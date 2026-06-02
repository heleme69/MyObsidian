> [!exr]
> Viết phương trình sai phân với $n = 5$ để xấp xỉ nghiệm của phương trình có điều kiện biên:
> $$
> y'' + 3y' + 2y = 4x^2, \quad y(1) = 1, \quad y(2) = 6 \quad 1 \le x \le 2
> $$
> Trong trường hợp $n = 5, 10,20,40,80$. Dùng MATLAB để xấp xỉ nghiệm cho bài toán trên và vẽ đồ thị giữa nghiệm chính xác và nghiệm xấp xỉ. Lập bảng sai số.

> [!sol]
> 1. Đổi miền bài toán:
> 	- Đổi biến:
> 		- Đặt $t = \frac{x - a}{b - a}$, khi đó $x(t) = a + (b-a) t = 1 + (2-1)t = 1+t$, $t \in [0,1]$
> 	- Tính đạo hàm theo biến $t$:
> 		- $\frac{dy}{dx} = \frac{dy}{dt}\frac{dt}{dx} = y'(t) \cdot 1 = y'(t)$
> 		- $\frac{d^2y}{dx^2} = \frac{d}{dt}(y'(t))\frac{dt}{dx} = y''(t)$
> 	- Thay $x = 1+t$, $y' = y'(t)$ và $y'' = y''(t)$, ta có phương trình theo biến $t$:
> 	$$
> 	y''(t) + 3y'(t) + 2y(t) = 4(1+t)^2 \tag{1}
> 	$$
> 	- Chi tiết:
> 		- Trên miền $t \in [0,1]$, bậc $n= 5$, bước lưới $h = \frac{1 - 0}{5} = 0.2$.
> 		- Với $t_{i} = i.h$, ${} t_{i} \in \{ 0, 0.2, 0.4, 0.6, 0.8, 1 \} {}$
> 		- Tại $t = 0$, ta có $y(0) = 1$.
> 		- Tại $t = 1$, ta có $y(1) = 6$.
> 		- Áp dụng công thức sai phân trung tâm cho $y''$ và $y'$ tại $t_{i}$ cho ${} (1) {}$:
>		$$
>		\frac{y_{i+1} - 2y_i + y_{i-1}}{(h)^2} + 3\left(\frac{y_{i+1} - y_{i-1}}{2h}\right) + 2y_i = 4t_i^2 + 8t_i + 4
>		$$
>		- Nhân hai vế với $h^{2} = (0.2)^{2}$ và gom nhóm theo $y_{i-1}$, $y_{i}$ và $y_{i+1}$:
>		$$
>		0.7y_{i-1} - 1.92y_i + 1.3y_{i+1} = 0.16t_i^2 + 0.32t_i + 0.16 \tag{2}
>		$$
> 2. Ma trận biểu diễn
> - Thay $t_{i} = 0.2, 0.4, 0.6, 0.8$ vào $(2)$:
> 	- Tại $t_{i} = 0.2$: $0.7y_0 - 1.92y_1 + 1.3y_2 = 0.2304$
> 	    Thay $y_{0} = 1$ và chuyển vế:  $-1.92y_1 + 1.3y_2 = -0.4696$
> 	- Tại $t_{i} = 0.4$: - $0.7y_1 - 1.92y_2 + 1.3y_3 = 0.3136$
> 	- Tại $t_{i} = 0.6$: $0.7y_2 - 1.92y_3 + 1.3y_4 = 0.4096$
> 	- Tại $t_{i} = 0.8$: $0.7y_3 - 1.92y_4 + 1.3y_5 = 0.5184$
> 	     Thay $y_{5} = 6$ và chuyển vế: $0.7y_3 - 1.92y_4 = -7.2816$
> - Ma trận biểu diễn hệ $A.Y = F$:
> $$
> \begin{pmatrix} -1.92 & 1.3 & 0 & 0 \\ 0.7 & -1.92 & 1.3 & 0 \\ 0 & 0.7 & -1.92 & 1.3 \\ 0 & 0 & 0.7 & -1.92 \end{pmatrix} \begin{pmatrix} y_1 \\ y_2 \\ y_3 \\ y_4 \end{pmatrix} = \begin{pmatrix} -0.4696 \\ 0.3136 \\ 0.4096 \\ -7.2816 \end{pmatrix}
> $$
> 
> 3. Bảng sai số 
> $$
> \begin{array}{|c|c|c|}
> \hline
> n & h & \text{Sai số lớn nhất } \mathcal{O}(h^2) \\
> \hline
> 5  & 2.0000 \times 10^{-1} & 1.3414 \times 10^{-2} \\
> 10 & 1.0000 \times 10^{-1} & 3.4216 \times 10^{-3} \\
> 20 & 5.0000 \times 10^{-2} & 8.6015 \times 10^{-4} \\
> 40 & 2.0000 \times 10^{-2} & 2.1534 \times 10^{-4} \\
> 80 & 1.0000 \times 10^{-2} & 5.3853 \times 10^{-5} \\
> \hline
> \end{array}
> $$
>
> 4. Code
> - bvp_fdm.m
> > [!code]- Matlab
> > ```matlab
> > function [x, y] = bvp_fdm(p, q, r, a, b, alpha, beta, n)
> > % Nhiem vu: Giai BVP y'' + p(x)y' + q(x)y = r(x) bang Sai phan trung tam
> >     h = (b - a) / n;
> >     x = linspace(a, b, n+1)';
> > 
> >     A = sparse(n-1, n-1); 
> >     F = zeros(n-1, 1);
> > 
> >     for i = 1:n-1
> >         xi = x(i+1); 
> >         pi = p(xi); qi = q(xi); ri = r(xi);
> > 
> >         A_low = 1 - (h/2)*pi;
> >         A_diag = -2 + (h^2)*qi;
> >         A_up = 1 + (h/2)*pi;
> > 
> >         A(i, i) = A_diag;
> >         F(i) = (h^2) * ri;
> > 
> >         % Xu ly dieu kien bien
> >         if i > 1
> >             A(i, i-1) = A_low; 
> >         else
> >             F(i) = F(i) - A_low * alpha; 
> >         end
> >         
> >         if i < n-1
> >             A(i, i+1) = A_up; 
> >         else
> >             F(i) = F(i) - A_up * beta; 
> >         end
> >     end
> > 
> >     y_in = A \ F;
> >     y = [alpha; y_in; beta];
> > end
> > ```
> - main.m
> > [!code]- Matlab
> > ```matlab
> > clc; clear; close all;
> > 
> > % Du lieu bai toan
> > p = @(x) 3; q = @(x) 2; r = @(x) 4*x^2; 
> > a = 1; b = 2; alpha = 1; beta = 6;
> > 
> > n_array = [5; 10; 20; 40; 80]; 
> > h_array = (b - a) ./ n_array;
> > max_err = zeros(length(n_array), 1);
> > 
> > % Nghiem chinh xac
> > A_mat = [exp(-1), exp(-2); exp(-2), exp(-4)];
> > B_mat = [1 - (2*1^2 - 6*1 + 7); 6 - (2*2^2 - 6*2 + 7)];
> > C = A_mat \ B_mat;
> > y_exact = @(x) C(1)*exp(-x) + C(2)*exp(-2*x) + 2*x.^2 - 6*x + 7;
> > 
> > % Tinh toan va ve do thi
> > figure('Color', 'w');
> > x_plot = linspace(a, b, 200);
> > plot(x_plot, y_exact(x_plot), 'k-', 'LineWidth', 2); hold on;
> > 
> > colors = lines(length(n_array)); markers = {'o', 's', '^', 'd', 'p'};
> > 
> > for i = 1:length(n_array)
> >     [x_app, y_app] = bvp_fdm(p, q, r, a, b, alpha, beta, n_array(i));
> >     max_err(i) = max(abs(y_exact(x_app) - y_app)); % Ghi nhận sai số
> >     plot(x_app, y_app, '--', 'Marker', markers{i}, 'Color', colors(i,:), 'LineWidth', 1.2);
> > end
> > 
> > xlim([1.2, 1.5]); 
> > ylim([3.4, 5.1]); 
> > 
> > legend(['Chính xác', arrayfun(@(n) sprintf('n = %d', n), n_array', 'UniformOutput', false)], 'Location', 'best');
> > title('So sánh nghiệm (x = [1.2, 1.5])'); 
> > xlabel('x'); ylabel('y(x)'); grid on; hold off;
> > 
> > % Hien thi bang sai so
> > disp('--- BẢNG SAI SỐ THEO CÁC TRƯỜNG HỢP N ---');
> > bang_sai_so = table(n_array, h_array, max_err, 'VariableNames', {'n', 'h', 'Max_Error'});
> > disp(bang_sai_so);
> > ```
> 
> ![[THGTS_Tuần 8 - Bài 1.webp]]





$\xi$