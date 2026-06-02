> [!exr] 
> Viết phương trình sai phân với $n = 4$ để xấp xỉ nghiệm của phương trình có điều kiện biên bằng phương pháp biến ảo trung tâm:
> $$y'' + y' - 2y = (1 - x^2)e^{-x}, \quad y(0) = -1, \quad y'(1) = \frac{1}{e}, \quad 0 \le x \le 1$$
> Trong trường hợp $n = 5, 10, 20, 40$. Dùng Matlab để xấp xỉ nghiệm cho bài toán trên và vẽ đồ thị giữa nghiệm chính xác và nghiệm xấp xỉ.

> [!sol] 
> 1. Tính toán:
> - Chi tiết: 
> 	- Trên miền $x \in [0, 1]$, với $n = 4$, bước lưới được xác định là $h = \frac{1 - 0}{4} = 0.25$.
> 	- Với $x_i = i \cdot h$, các nút lưới bao gồm: $x_i \in \{ 0, 0.25, 0.5, 0.75, 1 \}$ (tương ứng với các ẩn $y_0, y_1, y_2, y_3, y_4$).
> 	- Tại nút biên trái $x_0 = 0$: $y_0 = -1$.
> 	- Tại nút biên phải $x_4 = 1$: Điều kiện đạo hàm $y'(1) = \frac{1}{e}$.
> 	
> 	- Áp dụng công thức sai phân trung tâm cho $y''$ và $y'$ tại nút lưới $x_i$:
> 	$$\frac{y_{i+1} - 2y_i + y_{i-1}}{h^2} + \left(\frac{y_{i+1} - y_{i-1}}{2h}\right) - 2y_i = (1 - x_i^2)e^{-x_i}$$
> 	- Nhân hai vế với $h^2 = (0.25)^2 = 0.0625$ và gom nhóm theo $y_{i-1}$, $y_i$, $y_{i+1}$:
> 	$$
> 	\left(1 - \frac{h}{2}\right)y_{i-1} - (2 + 2h^2)y_i + \left(1 + \frac{h}{2}\right)y_{i+1} = h^2(1 - x_i^2)e^{-x_i}
> 	$$
> 	- Thay giá trị cụ thể $h = 0.25$ vào phương trình tổng quát trên, ta được:
> 	$$
> 	0.875y_{i-1} - 2.125y_i + 1.125y_{i+1} = 0.0625(1 - x_i^2)e^{-x_i} \tag{1}
> 	$$
> 
>- Sử dụng biến ảo cho đạo hàm tại $x_4 = 1$:
> Để tính phương trình tại nút biên $x_4$ ($i=4$), ta giả sử tồn tại một nút ảo $x_5 = 1 + h$ với giá trị hàm tương ứng là $y_5$.
> 	- Áp dụng công thức sai phân trung tâm cho đạo hàm tại biên phải $x_4$:
> 	$$y'(1) = \frac{y_5 - y_3}{2h} = \frac{1}{e} \implies y_5 = y_3 + \frac{2h}{e} = y_3 + \frac{0.5}{e}$$
> 	- Thay phương trình biến ảo $y_5$ vào phương trình sai phân $(1)$ tại vị trí $i = 4$:
> 	$$0.875y_3 - 2.125y_4 + 1.125y_5 = 0.0625(1 - 1^2)e^{-1}$$
> 	$$0.875y_3 - 2.125y_4 + 1.125\left(y_3 + \frac{0.5}{e}\right) = 0$$
> 	- Rút gọn và chuyển số hạng tự do sang vế phải:
> 	$$2y_3 - 2.125y_4 = -\frac{0.5625}{e} \approx -0.2069$$
> 
> 2. Ma trận biểu diễn:
> - Thay các giá trị nút lưới trong $x_i = 0.25, 0.5, 0.75$ vào phương trình $(1)$ kết hợp với biên ảo tại nút $x_4$:
> 	- Tại $x_1 = 0.25$:  $0.875y_0 - 2.125y_1 + 1.125y_2 = 0.0625(1 - 0.25^2)e^{-0.25} \approx 0.0456$
> 	  Thay $y_0 = -1$ và chuyển vế: $-2.125y_1 + 1.125y_2 = 0.0456 + 0.875 = 0.9206$
> 	- Tại $x_2 = 0.50$: $0.875y_1 - 2.125y_2 + 1.125y_3 = 0.0625(1 - 0.5^2)e^{-0.5} \approx 0.0284$
> 	- Tại $x_3 = 0.75$: $0.875y_2 - 2.125y_3 + 1.125y_4 = 0.0625(1 - 0.75^2)e^{-0.75} \approx 0.0129$
> 	- Tại biên ảo $x_4 = 1.0$: $2y_3 - 2.125y_4 = -\frac{0.5625}{e} \approx -0.2069$
> - Ma trận biểu diễn hệ $A \cdot Y = F$:
> $$
> \begin{pmatrix} -2.125 & 1.125 & 0 & 0 \\ 0.875 & -2.125 & 1.125 & 0 \\ 0 & 0.875 & -2.125 & 1.125 \\ 0 & 0 & 2 & -2.125 \end{pmatrix} \begin{pmatrix} y_1 \\ y_2 \\ y_3 \\ y_4 \end{pmatrix} = \begin{pmatrix} 0.9206 \\ 0.0284 \\ 0.0129 \\ -0.2069 \end{pmatrix}
> $$
> 
> 1. Code:
> - bvp_fmd_ghost.m
> > [!code]- Matlab
> > ```matlab
> > function [x, y] = bvp_fdm_ghost(p, q, r, a, b, alpha, g_beta, n)
> > % Giai BVP: y'' + p(x)y' + q(x)y = r(x)
> > % Bien trai Dirichlet: y(a) = alpha
> > % Bien phai Neumann (Bien ao trung tam): y'(b) = g_beta
> > 
> > h = (b - a) / n;
> > x = linspace(a, b, n+1)';
> > 
> > A = sparse(n, n); 
> > F = zeros(n, 1);
> > 
> > % --- Tu x_i den x_n-1 ---
> > for i = 1:n-1
> >     xi = x(i+1);
> >     A_low  = 1 - (h/2)*p(xi);
> >     A_diag = -2 + (h^2)*q(xi);
> >     A_up   = 1 + (h/2)*p(xi);
> > 
> >     A(i, i) = A_diag; 
> >     F(i) = h^2 * r(xi);
> > 
> >     if i > 1
> >         A(i, i-1) = A_low; 
> >     else
> >         F(i) = F(i) - A_low * alpha; % y_0 = alpha
> >     end
> > 
> >     if i < n-1
> >         A(i, i+1) = A_up; 
> >     end
> > end
> > 
> > % --- Bien ao trung tam tai x_n ---
> > A_low  = 1 - (h/2)*p(b);
> > A_diag = -2 + (h^2)*q(b);
> > A_up   = 1 + (h/2)*p(b);
> > 
> > A(n, n) = A_diag;
> > A(n, n-1) = A_low + A_up; 
> > F(n) = h^2 * r(b) - A_up * (2 * h * g_beta);
> > 
> > y_in = A \ F;
> > y = [alpha; y_in];
> > end
> > ```
> 
> - main.m
> > [!code]- Matlab
> > ```matlab
> > clc; clear; close all;
> > 
> > % Du lieu bai toan
> > p = @(x) 1; 
> > q = @(x) -2; 
> > r = @(x) (1 - x.^2).*exp(-x);
> > 
> > a = 0; b = 1; 
> > alpha = -1;       % Biên trái y(0) = -1
> > g_beta = 1/exp(1); % Biên phải đạo hàm y'(1) = 1/e
> > 
> > n_array = [5; 10; 20; 40];
> > h_array = (b - a) ./ n_array;
> > max_err = zeros(length(n_array), 1);
> > 
> > % Nghiem chinh xac
> > y_exact = @(x) -x .* exp(-x);
> > 
> > %% 3. Tính toán và Vẽ đồ thị phóng to (Zoom in view)
> > figure('Color', 'w');
> > x_plot = linspace(a, b, 200);
> > plot(x_plot, y_exact(x_plot), 'k-', 'LineWidth', 2); hold on;
> > 
> > colors = lines(length(n_array)); 
> > markers = {'o', 's', '^', 'd'};
> > 
> > for i = 1:length(n_array)
> >     % Gọi hàm giải mạng biên ảo trung tâm
> >     [x_app, y_app] = bvp_fdm_ghost(p, q, r, a, b, alpha, g_beta, n_array(i));
> >     
> >     % Ghi nhận sai số lớn nhất
> >     max_err(i) = max(abs(y_exact(x_app) - y_app));
> >     
> >     % Vẽ đồ thị từng trường hợp lưới
> >     plot(x_app, y_app, '--', 'Marker', markers{i}, 'Color', colors(i,:), 'LineWidth', 1.2);
> > end
> > 
> > % Zoom vào vùng biên đạo hàm [0.6, 1.0] để phân biệt rõ các đường n lẻ
> > xlim([0.6, 1.0]); 
> > ylim([-0.4, -0.2]); 
> > 
> > legend([{'Chính xác'}, arrayfun(@(n) sprintf('n = %d', n), n_array', 'UniformOutput', false)], 'Location', 'best');
> > title('So sánh nghiệm phương pháp biến ảo (Phóng to x = [0.6, 1.0])'); 
> > xlabel('x'); ylabel('y(x)'); grid on; hold off;
> > 
> > %% 4. Hiển thị bảng sai số duy nhất
> > disp('--- BẢNG SAI SỐ LỚN NHẤT PHƯƠNG PHÁP BIẾN ẢO ---');
> > bang_sai_so = table(n_array, h_array, max_err, 'VariableNames', {'n', 'h', 'Max_Error'});
> > disp(bang_sai_so);
> > ```





$\xi$