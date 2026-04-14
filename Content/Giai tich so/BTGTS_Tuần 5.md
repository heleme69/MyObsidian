
> [!exr]
> Xác định một đa thức có bậc ≤ 3 để nội suy dữ liệu:
> 
> | $x$ | 1.2 | 2.1 | 3.0 | 3.6 |
> | --- | --- | --- | --- | --- |
> | $y$ | 0.7 | 8.1 | 27.7| 45.1|

> [!sol] 
> 1. Bảng tỷ hiệu 
> 
> | $x_i$ | $f(x_i)$ | Tỷ hiệu cấp 1 | Tỷ hiệu cấp 2 | Tỷ hiệu cấp 3 |
> | --- | --- | --- | --- | --- |
> | 1.2 | 0.7 | | | |
> | | | $\frac{8.1-0.7}{2.1-1.2} = \mathbf{\frac{74}{9}}$ | | |
> | 2.1 | 8.1 | | $\frac{196/9-74/9}{3.0-1.2} = \mathbf{\frac{610}{81}}$ | |
> | | | $\frac{27.7-8.1}{3.0-2.1} = \frac{196}{9}$ | | $\frac{130/27-610/81}{3.6-1.2} = \mathbf{-\frac{275}{243}}$ |
> | 3.0 | 27.7 | | $\frac{29-196/9}{3.6-2.1} = \frac{130}{27}$ | |
> | | | $\frac{45.1-27.7}{3.6-3.0} = 29$ | | |
> | 3.6 | 45.1 | | | |
>
> 2. Đa thức nội suy Newton: $$ P_3(x) = 0.7 + \frac{74}{9}(x - 1.2) + \frac{610}{81}(x - 1.2)(x - 2.1) - \frac{275}{243}(x - 1.2)(x - 2.1)(x - 3.0) $$

> [!exr] 
> Cho $\ln(x) = 0.6932, \ln(3) = 1.0986$ và $\ln(6) = 1.7981$,  sử dụng đa thức Lagrange để nội suy và xấp xỉ giá trị hàm logarit tự nhiên tại các số nguyên từ 1 đến 10. Viết code MATLAB và ập bảng kết quả bao gồm giá trị xấp xỉ, sai số tuyệt đối và sai số tương đối.

> [!sol] 
> 1. Các đa thức cơ sở Lagrange:
> - $L_0(x) = \frac{(x-3)(x-6)}{(2-3)(2-6)} = \frac{1}{4}(x-3)(x-6)$
> - $L_1(x) = \frac{(x-2)(x-6)}{(3-2)(3-6)} = -\frac{1}{3}(x-2)(x-6)$
> - $L_2(x) = \frac{(x-2)(x-3)}{(6-2)(6-3)} = \frac{1}{12}(x-2)(x-3)$
> 2. Đa thức nội suy Lagrange: $$P_2(x) = 0.6932 \cdot L_0(x) + 1.0986 \cdot L_1(x) + 1.7918 \cdot L_2(x)$$
> > [!code] 
> > ```matlab
> > % 1. Khai bao du lieu noi suy
> > X = [2, 3, 6];
> > Y = [0.6932, 1.0986, 1.7918];
> > 
> > % 2. Cac diem can xap xi
> > x_eval = 1:10;
> > n = length(x_eval);
> > 
> > % Khoi tao mang luu tru
> > P_val = zeros(1, n);
> > True_val = log(x_eval); % Gia tri thuc cua ln(x)
> > 
> > % 3. Tinh gia tri da thuc Lagrange tai cac diem x_eval
> > for k = 1:n
> >     x = x_eval(k);
> >     sum_L = 0;
> >     
> >     for i = 1:length(X)
> >         % Tinh da thuc co so L_i
> >         L_i = 1;
> >         for j = 1:length(X)
> >             if i ~= j
> >                 L_i = L_i * (x - X(j)) / (X(i) - X(j));
> >             end
> >         end
> >         % Cong don vao P(x)
> >         sum_L = sum_L + Y(i) * L_i;
> >     end
> >     
> >     P_val(k) = sum_L;
> > end
> > 
> > % 4. Tinh sai so
> > Abs_err = abs(True_val - P_val);
> > Rel_err = Abs_err ./ abs(True_val);
> > 
> > % 5. In bang ket qua
> > fprintf('%-5s | %-15s | %-15s | %-18s | %-18s\n', 'x', 'Gia tri thuc', 'Gia tri xap xi', 'Sai so tuyet doi', 'Sai so tuong doi');
> > fprintf(repmat('-', 1, 85));
> > fprintf('\n');
> > 
> > for k = 1:n
> >     % Xu ly rieng cho x = 1 (vi ln(1) = 0 dan den chia cho 0 o sai so tuong doi)
> >     if x_eval(k) == 1
> >         fprintf('%-5d | %-15.6f | %-15.6f | %-18.6e | %-18s\n', x_eval(k), True_val(k), P_val(k), Abs_err(k), 'Khong xac dinh (Inf)');
> >     else
> >         fprintf('%-5d | %-15.6f | %-15.6f | %-18.6e | %-18.6e\n', x_eval(k), True_val(k), P_val(k), Abs_err(k), Rel_err(k));
> >     end
> > end
> > ```




$\pi$

























$\pi$