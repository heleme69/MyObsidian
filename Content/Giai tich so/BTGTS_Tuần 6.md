
> [!exr] 
> Xây dựng các đa thức nội suy bậc một hai ba cho các dữ liệu sau:
> a)
> 
> | $x$ | 8.1 | 8.3 | 8.6 | 8.7 |
> | --- | --- | --- | --- | --- |
> | $f(x)$ | 16.94410 | 17.56492 | 18.50515| 18.82091|
> b)
> 
> | $x$ | 0.6 | 0.7 | 0.8 | 1.0 |
> | --- | --- | --- | --- | --- |
> | $f(x)$ | −0.17694460 | 0.01375227 | 0.22363362| 0.65809197|

> [!sol]
> a)
> 1. Bảng tỷ hiệu:
> 
> | $x_i$ | $f(x_i)$ | Tỷ hiệu cấp 1 | Tỷ hiệu cấp 2 | Tỷ hiệu cấp 3 |
> | --- | --- | --- | --- | --- |
> | 8.1 | 16.94410 | | | |
> | | | $\frac{17.56492 - 16.94410}{8.3 - 8.1} = \mathbf{3.1041}$ | | |
> | 8.3 | 17.56492 | | $\frac{3.1341 - 3.1041}{8.6 - 8.1} = \mathbf{0.06}$ | |
> | | | $\frac{18.50515 - 17.56492}{8.6 - 8.3} = \mathbf{3.1341}$ | | $\frac{0.05875 - 0.06}{8.7 - 8.1} = \mathbf{-\frac{1}{480}}$ |
> | 8.6 | 18.50515 | | $\frac{3.1576 - 3.1341}{8.7 - 8.3} = \mathbf{0.05875}$ | |
> | | | $\frac{18.82091 - 18.50515}{8.7 - 8.6} = \mathbf{3.1576}$ | | |
> | 8.7 | 18.82091 | | | |
> 2. Đa thức nội suy Newton: $$P_3(x) = 16.94410 + 3.1041(x - 8.1) + 0.06(x - 8.1)(x - 8.3) - \frac{1}{480}(x - 8.1)(x - 8.3)(x - 8.6)$$
> 3. Kết quả: $$f(8.4) \approx 17.8771425$$
> 
> b)
> 1. Bảng tỷ hiệu:
> 
> | $x_i$ | $f(x_i)$ | Tỷ hiệu cấp 1 | Tỷ hiệu cấp 2 | Tỷ hiệu cấp 3 |
> | --- | --- | --- | --- | --- |
> | 0.6 | -0.17694460 | | | |
> | | | $\frac{0.01375227 - (-0.17694460)}{0.7 - 0.6} = \mathbf{1.9069687}$ | | |
> | 0.7 | 0.01375227 | | $\frac{2.0988135 - 1.9069687}{0.8 - 0.6} = \mathbf{0.959224}$ | |
> | | | $\frac{0.22363362 - 0.01375227}{0.8 - 0.7} = \mathbf{2.0988135}$ | | $\frac{0.2449275 - 0.959224}{1.0 - 0.6} = \mathbf{-1.78574125}$ |
> | 0.8 | 0.22363362 | | $\frac{2.17229175 - 2.0988135}{1.0 - 0.7} = \mathbf{0.2449275}$ | |
> | | | $\frac{0.65809197 - 0.22363362}{1.0 - 0.8} = \mathbf{2.17229175}$ | | |
> | 1.0 | 0.65809197 | | | |
> 2. Đa thức nội suy Newton: $$P_3(x) = -0.17694460 + 1.9069687(x - 0.6) + 0.959224(x - 0.6)(x - 0.7) - 1.78574125(x - 0.6)(x - 0.7)(x - 0.8)$$
> 3. Kết quả: $$f(0.9) \approx 0.4419850025$$
> 
> > [!code]- Matlab
> > ```matlab
> > % --- Câu a ---
> > xa = [8.1, 8.3, 8.6, 8.7];
> > ya = [16.94410, 17.56492, 18.50515, 18.82091];
> > [Fa, coeff_a] = newton_divide(xa, ya);
> > res_a = newton_eval(xa, coeff_a, 8.4);
> > 
> > % --- Câu b ---
> > xb = [0.6, 0.7, 0.8, 1.0];
> > yb = [-0.17694460, 0.01375227, 0.22363362, 0.65809197];
> > [Fb, coeff_b] = newton_divide(xb, yb);
> > res_b = newton_eval(xb, coeff_b, 0.9);
> > 
> > % --- Hiển thị kết quả ---
> > disp('--- KET QUA ---');
> > fprintf('Cau a - f(8.4) = %.7f\n', res_a);
> > fprintf('Cau b - f(0.9) = %.10f\n', res_b);
> > 
> > function [F, F_divide] = newton_divide(x, y)
> >     % Thuật toán xây dựng bảng tỷ hiệu Newton theo mẫu
> >     n = length(x);
> >     F = zeros(n, n);
> >     F(:, 1) = y(:); % Đảm bảo y là vector cột để gán không bị lỗi
> >     
> >     for i = 2:n
> >         for j = 2:i
> >             F(i, j) = (F(i, j-1) - F(i-1, j-1)) / (x(i) - x(i-j+1));
> >         end
> >     end
> >     F_divide = diag(F); % Lấy đường chéo chính làm hệ số đa thức
> > end
> > 
> > function P = newton_eval(x, coeff, x_val)
> >     % Thuật toán tính giá trị đa thức nội suy tại điểm x_val
> >     n = length(coeff);
> >     P = coeff(1);
> >     term = 1;
> >     for i = 2:n
> >         term = term * (x_val - x(i-1));
> >         P = P + coeff(i) * term;
> >     end
> > end
> > ```

> [!exr]
> Cho hàm số $f(x) = x^{5} −5x^{3} +x^{2} +4x−2$ tại các điểm nội suy $x_{0} = -2, x_{1} = -1, x_{2} = 0, x_{3} = 1, x_{4} = 2$
> a) Nội suy gần đúng các giá trị của $f(x)$ tại $x = -1.5, -0,5, 0.5, 1.5$
> b) Vẽ hàm $f$ cùng với đa thức Newton $P(x)$ 

> [!sol]
> a)
> 
> | $x_i$ | -2 | -1 | 0 | 1 | 2 |
> | --- | --- | --- | --- | --- | --- |
> | $f(x_i)$ | 2 | -1 | -2 | -1 | 2 |
