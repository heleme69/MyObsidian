
> [!def] ($\sigma$-đại số)
> Cho không gian $\Omega$ và ký hiệu $2^{\Omega}$ là tập tất cả tập hợp con của $\Omega$. Gọi $\mathfrak{M}$ là họ các tập hợp con chứa trong $\Omega$. $\mathfrak{M}$ được gọi là một $\sigma$-đại số nếu
> 1. $\Omega \in \mathfrak{M}$.
> 2. $A \in \mathfrak{M} \implies A^{c} = \Omega \setminus A \in \mathfrak{M}$.
> 3. $A_{n} \in \mathfrak{M}$ với $n = 1,2,\dots \implies \bigcup_{n=1}^{\infty} A_{n} \in \mathfrak{M}$.
>    
> Hệ quả:
> 4. $\emptyset \in \mathfrak{M}$.
> 5. $\bigcap_{n=1}^{\infty} A_{n} \in \mathfrak{M}$.

> [!def] (Độ đo)
> Cho $(\Omega, \mathfrak{M})$ là một không gian đo được (với $\mathfrak{M}$ là một $\sigma$-đại số trên $\Omega$). Một hàm tập hợp $\mu: \mathfrak{M} \to [0, \infty]$ được gọi là một độ đo nếu nó thỏa mãn hai tiên đề:
> 6. $\mu(\emptyset) = 0$.
> 7. Tính $\sigma$-cộng tính: Với mọi dãy $\{A_n\}_{n=1}^\infty \subseteq \mathfrak{M}$ gồm các tập hợp đôi một rời nhau, ta có:
>    $$ \mu\left( \bigcup_{n=1}^\infty A_n \right) = \sum_{n=1}^\infty \mu(A_n) $$

> [!def] (Độ đo xác suất)
> Nếu độ đo $\mu$ thỏa mãn thêm điều kiện chuẩn hóa $\mu(\Omega) = 1$, thì $\mu$ được gọi là một độ đo xác suất (thường ký hiệu là $\mathbb{P}$). 
> 
> Khi đó, bộ ba $(\Omega, \mathfrak{M}, \mathbb{P})$ được gọi là một không gian xác suất, các phần tử trong $\mathfrak{M}$ được gọi là các biến cố. $A \in \mathfrak{M}$ nghĩa là $\mathfrak{M}$-đo được hoặc gọi $A$ đo được nếu độ đo đã xác định.

> [!thm] (Các tính chất cơ bản của độ đo)
> Cho độ đo $\mu$ trên $(\Omega, \mathfrak{M})$. Với mọi $A, B \in \mathfrak{M}$:
> 8. Tính đơn điệu: Nếu $A \subseteq B \implies \mu(A) \le \mu(B)$.
> 9. Tính cộng tính hữu hạn: Nếu $A \cap B = \emptyset \implies \mu(A \cup B) = \mu(A) + \mu(B)$.
> 10. Tính chất trừ: Nếu $A \subseteq B$ và $\mu(A) < \infty \implies \mu(B \setminus A) = \mu(B) - \mu(A)$.
> 11. Tính $\sigma$-dưới cộng tính: $\mu\left( \bigcup_{n=1}^\infty A_n \right) \le \sum_{n=1}^\infty \mu(A_n)$ với mọi dãy $\{A_n\}$ bất kỳ.

> [!def] (Tính đóng với các phép toán cơ bản)
> Cho họ tập hợp $\mathcal{H} \subseteq 2^\Omega$.
> 12. Đóng với phép giao hữu hạn: Với mọi $A, B \in \mathcal{H} \implies A \cap B \in \mathcal{H}$.
> 13. Đóng với phép hiệu: Với mọi $A, B \in \mathcal{H} \implies A \setminus B \in \mathcal{H}$.
> 14. Đóng với phép hiệu chuẩn (proper difference): Với mọi $A, B \in \mathcal{H}$ thỏa mãn $B \subseteq A \implies A \setminus B \in \mathcal{H}$.
> 15. Đóng với giới hạn trên (hợp dãy tăng): Với mọi dãy tăng $A_1 \subseteq A_2 \subseteq \dots$ trong $\mathcal{H}$, ta có $\lim_{n \to \infty} A_n = \bigcup_{n=1}^\infty A_n \in \mathcal{H}$.

> [!def] (Hệ $\pi$ và Hệ $\lambda$)
> Cho không gian nền $\Omega \neq \emptyset$.
> 16. $\pi$-hệ: Là một họ $\mathcal{C} \subseteq 2^\Omega$ đóng với phép giao hữu hạn.
> 17. $\lambda$-hệ (Hệ Dynkin): Là một họ $\mathcal{H} \subseteq 2^\Omega$ thỏa mãn 3 tiên đề:
>    1. Chứa không gian nền: $\Omega \in \mathcal{H}$.
>    2. Đóng với phép hiệu chuẩn: Với mọi $A, B \in \mathcal{H}$ và $B \subseteq A \implies A \setminus B \in \mathcal{H}$.
>    3. Đóng với giới hạn trên: Với mọi dãy $\{A_n\}_{n=1}^\infty \subseteq \mathcal{H}$ thỏa mãn $A_n \uparrow A \implies A \in \mathcal{H}$.

> [!def] (Lớp đơn điệu - Monotone Class)
> Một họ $\mathcal{H} \subseteq 2^\Omega$ được gọi là một lớp đơn điệu nếu nó đóng với cả giới hạn trên và giới hạn dưới. Cụ thể:
> 18. Đóng với giới hạn trên: Dãy tăng $A_n \uparrow A \implies A \in \mathcal{H}$.
> 19. Đóng với giới hạn dưới: Dãy giảm $F_n \downarrow F \implies F \in \mathcal{H}$.

> [!thm] (Định lý $\pi$-$\lambda$ của Dynkin)
> Cho không gian nền $\Omega \neq \emptyset$. Nếu $\mathcal{C}$ là một $\pi$-hệ, $\mathcal{H}$ là một $\lambda$-hệ, và $\mathcal{C} \subseteq \mathcal{H}$, thì:
> $$ \sigma(\mathcal{C}) \subseteq \mathcal{H} $$

> [!prf]
> Gọi $\mathcal{H}(\mathcal{C})$ là $\lambda$-hệ nhỏ nhất chứa $\mathcal{C}$. Vì giao của một họ các $\lambda$-hệ bất kỳ luôn là một $\lambda$-hệ, $\mathcal{H}(\mathcal{C})$ tồn tại và hiển nhiên $\mathcal{C} \subseteq \mathcal{H}(\mathcal{C}) \subseteq \mathcal{H}$.
> Ta sẽ chứng minh $\mathcal{H}(\mathcal{C})$ là một $\sigma$-đại số. Khi đó, do $\sigma(\mathcal{C})$ là $\sigma$-đại số nhỏ nhất chứa $\mathcal{C}$, ta suy ra $\sigma(\mathcal{C}) \subseteq \mathcal{H}(\mathcal{C}) \subseteq \mathcal{H}$.
> Vì $\mathcal{H}(\mathcal{C})$ là một $\lambda$-hệ, nó chứa $\Omega$, đóng với phép hiệu chuẩn (suy ra đóng với phép lấy phần bù vì $A^c = \Omega \setminus A$), và đóng với hợp dãy tăng. Để là một $\sigma$-đại số, $\mathcal{H}(\mathcal{C})$ chỉ cần đóng với phép giao hữu hạn.
> Với mỗi tập $A \subseteq \Omega$, đặt họ kiểm tra:
> $$ \mathcal{D}_A = \{ B \in \mathcal{H}(\mathcal{C}) : A \cap B \in \mathcal{H}(\mathcal{C}) \} $$
> Nhận xét: Nếu $A \in \mathcal{H}(\mathcal{C})$, thì $\mathcal{D}_A$ là một $\lambda$-hệ:
> 20. $\Omega \in \mathcal{D}_A$ vì $A \cap \Omega = A \in \mathcal{H}(\mathcal{C})$.
> 21. Đóng với phép hiệu chuẩn: Với $B_1, B_2 \in \mathcal{D}_A$ và $B_1 \subseteq B_2$, ta có $A \cap (B_2 \setminus B_1) = (A \cap B_2) \setminus (A \cap B_1)$. Do $A \cap B_1 \subseteq A \cap B_2$ cùng thuộc $\mathcal{H}(\mathcal{C})$, hiệu chuẩn của chúng nằm trong $\mathcal{H}(\mathcal{C})$. Vậy $B_2 \setminus B_1 \in \mathcal{D}_A$.
> 22. Đóng với dãy tăng: Với $B_n \in \mathcal{D}_A$ thỏa $B_n \uparrow B$, ta có $(A \cap B_n) \uparrow (A \cap B)$. Do $A \cap B_n \in \mathcal{H}(\mathcal{C})$, hợp giới hạn của dãy cũng nằm trong $\mathcal{H}(\mathcal{C})$. Vậy $B \in \mathcal{D}_A$.
> 
> Ta chứng minh $\mathcal{H}(\mathcal{C})$ đóng với phép giao qua hai bước:
> Bước 1: Cố định $C \in \mathcal{C}$. Với mọi $C' \in \mathcal{C}$, do $\mathcal{C}$ là $\pi$-hệ nên $C \cap C' \in \mathcal{C} \subseteq \mathcal{H}(\mathcal{C}) \implies C' \in \mathcal{D}_C \implies \mathcal{C} \subseteq \mathcal{D}_C$. Do $\mathcal{D}_C$ là $\lambda$-hệ và do tính tối tiểu của $\mathcal{H}(\mathcal{C})$, ta có $\mathcal{H}(\mathcal{C}) \subseteq \mathcal{D}_C$. Nghĩa là với mọi $B \in \mathcal{H}(\mathcal{C})$ và $C \in \mathcal{C}$ thì $B \cap C \in \mathcal{H}(\mathcal{C})$.
> Bước 2: Cố định $B \in \mathcal{H}(\mathcal{C})$. Theo Bước 1, với mọi $C \in \mathcal{C}$ ta có $B \cap C \in \mathcal{H}(\mathcal{C}) \implies C \in \mathcal{D}_B \implies \mathcal{C} \subseteq \mathcal{D}_B$. Do $\mathcal{D}_B$ là $\lambda$-hệ, lại theo tính tối tiểu suy ra $\mathcal{H}(\mathcal{C}) \subseteq \mathcal{D}_B$. Nghĩa là với mọi $A, B \in \mathcal{H}(\mathcal{C})$ thì $A \cap B \in \mathcal{H}(\mathcal{C})$.
> Vậy $\mathcal{H}(\mathcal{C})$ là $\pi$-hệ. Do đó $\mathcal{H}(\mathcal{C})$ là $\sigma$-đại số.

> [!thm] (Đẳng thức cấu trúc $\lambda$-hệ nhỏ nhất)
> Cho $\mathcal{C}$ là một $\pi$-hệ chứa $\Omega$. Gọi $\mathcal{H}(\mathcal{C})$ là $\lambda$-hệ nhỏ nhất chứa $\mathcal{C}$. Khi đó:
> $$ \mathcal{H}(\mathcal{C}) = \sigma(\mathcal{C}) $$

> [!prf]
> Chiều 1: Chứng minh $\sigma(\mathcal{C}) \subseteq \mathcal{H}(\mathcal{C})$.
> Vì $\mathcal{C}$ là một $\pi$-hệ và $\mathcal{H}(\mathcal{C})$ là một $\lambda$-hệ chứa $\mathcal{C}$, áp dụng trực tiếp Định lý $\pi$-$\lambda$ của Dynkin:
> $$ \sigma(\mathcal{C}) \subseteq \mathcal{H}(\mathcal{C}) $$
> 
> Chiều 2: Chứng minh $\mathcal{H}(\mathcal{C}) \subseteq \sigma(\mathcal{C})$.
> $\sigma(\mathcal{C})$ là một $\sigma$-đại số nên nó chứa $\Omega$, đóng với phép hiệu chuẩn, và đóng với hợp dãy tăng. Do đó $\sigma(\mathcal{C})$ là một $\lambda$-hệ chứa $\mathcal{C}$. Vì $\mathcal{H}(\mathcal{C})$ là $\lambda$-hệ nhỏ nhất chứa $\mathcal{C}$, ta suy ra:
> $$ \mathcal{H}(\mathcal{C}) \subseteq \sigma(\mathcal{C}) $$
> 
> Kết hợp hai chiều, ta được $\mathcal{H}(\mathcal{C}) = \sigma(\mathcal{C})$.

> [!thm] (Định lý Halmos đối với lớp đơn điệu)
> Cho $\mathcal{C}$ là một đại số trên $\Omega$. Nếu $\mathcal{H}$ là một lớp đơn điệu chứa $\mathcal{C}$, thì:
> $$ \sigma(\mathcal{C}) \subseteq \mathcal{H} $$

> [!prf]
> Gọi $\mathbf{m}(\mathcal{C})$ là lớp đơn điệu nhỏ nhất chứa $\mathcal{C}$. Ta có $\mathbf{m}(\mathcal{C}) \subseteq \mathcal{H}$.
> Ta chứng minh $\mathbf{m}(\mathcal{C})$ là một $\lambda$-hệ:
> 23. Do $\mathcal{C}$ là đại số nên $\Omega \in \mathcal{C} \subseteq \mathbf{m}(\mathcal{C})$.
> 24. Định nghĩa lớp đơn điệu bảo đảm $\mathbf{m}(\mathcal{C})$ đóng với giới hạn dãy tăng.
> 25. Để kiểm tra tính đóng với phép hiệu chuẩn, với mỗi $A \in \mathbf{m}(\mathcal{C})$, xét:
>    $$ \mathcal{D}_A = \{ B \in \mathbf{m}(\mathcal{C}) : A \setminus B \in \mathbf{m}(\mathcal{C}), B \setminus A \in \mathbf{m}(\mathcal{C}), A \cup B \in \mathbf{m}(\mathcal{C}) \} $$
>    Dễ dàng kiểm tra $\mathcal{D}_A$ là một lớp đơn điệu. Với $A \in \mathcal{C}$, do $\mathcal{C}$ là đại số nên $\mathcal{C} \subseteq \mathcal{D}_A$, dẫn tới $\mathcal{D}_A = \mathbf{m}(\mathcal{C})$. Lặp lại cho $A \in \mathbf{m}(\mathcal{C})$, ta thu được $\mathcal{D}_A = \mathbf{m}(\mathcal{C})$ với mọi $A \in \mathbf{m}(\mathcal{C})$. Suy ra $\mathbf{m}(\mathcal{C})$ đóng với phép hiệu chuẩn.
> 
> Do đó $\mathbf{m}(\mathcal{C})$ là một $\lambda$-hệ. Vì đại số $\mathcal{C}$ đóng với giao hữu hạn nên $\mathcal{C}$ là $\pi$-hệ. Áp dụng Định lý Dynkin cho cặp họ sinh $\mathcal{C}$ và $\lambda$-hệ $\mathbf{m}(\mathcal{C})$:
> $$ \sigma(\mathcal{C}) \subseteq \mathbf{m}(\mathcal{C}) \subseteq \mathcal{H} $$

> [!obs] (Motivation: Sự tương thích Hệ $\pi$-$\lambda$ với Độ đo)
> Trong thực hành, việc kiểm tra trực tiếp một tính chất giải tích trên toàn bộ $\sigma$-đại số $\sigma(\mathcal{C})$ là bất khả thi vì $\sigma(\mathcal{C})$ chứa vô số tập hợp phức tạp không thể biểu diễn tường minh. Hệ $\pi$-$\lambda$ của Dynkin giải quyết triệt để vấn đề này nhờ sự tương thích 1-1 giữa cấu trúc $\lambda$-hệ với các tiên đề của độ đo:
> 
> 26. **$\Omega \in \mathcal{H}$** $\longleftrightarrow$ **Tính chuẩn hóa của độ đo:** Độ đo trên không gian xác suất hoặc không gian đo hữu hạn luôn xác định tại toàn không gian: $\mu_1(\Omega) = \mu_2(\Omega) = 1 < \infty$.
> 27. **Đóng với hiệu chuẩn ($B \subseteq A \implies A \setminus B \in \mathcal{H}$)** $\longleftrightarrow$ **Tính chất trừ của độ đo:** Khi $B \subseteq A$ và độ đo hữu hạn, ta có phép trừ giải tích $\mu(A \setminus B) = \mu(A) - \mu(B)$, giúp đẳng thức độ đo tự động bảo toàn qua phép hiệu tập con.
> 28. **Đóng với giới hạn trên ($A_n \uparrow A \implies A \in \mathcal{H}$)** $\longleftrightarrow$ **Tính liên tục dưới của độ đo:** Với dãy tăng, độ đo cho phép hoán vị giới hạn $\mu(A) = \lim \mu(A_n)$, giúp đẳng thức độ đo bảo toàn qua phép hợp vô hạn.
> 
> Ta có thể thấy họ các tập hợp thỏa mãn tính chất độ đo tạo thành một $\lambda$-hệ $\mathcal{H}$. Ta chỉ cần kiểm tra tính chất trên họ sinh $\mathcal{C}$ là $\pi$-hệ (chỉ cần đóng với phép giao hai tập), Định lý Dynkin sẽ tự động bảo đảm tính chất đúng trên toàn bộ $\sigma(\mathcal{C})$.

> [!exm] (Ứng dụng: Tính duy nhất của độ đo xác suất qua hàm phân phối tích lũy)
> Cho $(\mathbb{R}, \mathcal{B}(\mathbb{R}))$ là không gian đo Borel trên tập số thực. Giả sử $\mathbb{P}_1$ và $\mathbb{P}_2$ là hai độ đo xác suất trên $\mathcal{B}(\mathbb{R})$ có cùng hàm phân phối tích lũy (CDF), tức là:  
> 
> $$
> F_1(x) = \mathbb{P}_1((-\infty, x]) = \mathbb{P}_2((-\infty, x]) = F_2(x), \quad \forall x \in \mathbb{R}  
> $$
> Khi đó $\mathbb{P}_1$ và $\mathbb{P}_2$ trùng nhau trên toàn bộ $\sigma$-đại số Borel:  
> 
> $$
> \mathbb{P}_1(B) = \mathbb{P}_2(B), \quad \forall B \in \mathcal{B}(\mathbb{R})  
> $$

> [!prf]
> Bước 1: Chọn $\pi$-hệ họ sinh $\mathcal{C}$.  
> Xét họ các nửa khoảng vô hạn về bên trái:  
> 
> $$
> \mathcal{C} = \{ (-\infty, x] : x \in \mathbb{R} \}  
> $$
> Với hai phần tử bất kỳ $(-\infty, x], (-\infty, y] \in \mathcal{C}$, giả sử $x \le y$, ta có:  
> 
> $$
> (-\infty, x] \cap (-\infty, y] = (-\infty, \min(x, y)] = (-\infty, x] \in \mathcal{C}  
> $$
> Do đó $\mathcal{C}$ đóng với phép giao hữu hạn, tức $\mathcal{C}$ là một $\pi$-hệ. Đồng thời, theo định nghĩa của $\sigma$-đại số Borel, họ $\mathcal{C}$ sinh ra toàn bộ $\mathcal{B}(\mathbb{R})$, nghĩa là $\sigma(\mathcal{C}) = \mathcal{B}(\mathbb{R})$.  
> 
> Bước 2: Thiết lập $\lambda$-hệ kiểm tra $\mathcal{H}$.  
> Đặt họ tất cả các tập Borel mà tại đó hai độ đo nhận cùng giá trị:  
> 
> $$
> \mathcal{H} = \{ B \in \mathcal{B}(\mathbb{R}) : \mathbb{P}_1(B) = \mathbb{P}_2(B) \}  
> $$
> Ta kiểm tra $\mathcal{H}$ thỏa mãn 3 tiên đề của một $\lambda$-hệ:  
> 29. Chứa không gian nền $\mathbb{R}$: Do $\mathbb{P}_1$ và $\mathbb{P}_2$ là các độ đo xác suất, ta có $\mathbb{P}_1(\mathbb{R}) = 1 = \mathbb{P}_2(\mathbb{R}) \implies \mathbb{R} \in \mathcal{H}$.
> 30. Đóng với phép hiệu chuẩn: Cho $A, B \in \mathcal{H}$ thỏa mãn $B \subseteq A$. Do độ đo xác suất có giá trị hữu hạn, áp dụng tính chất trừ:
> 
> $$
> \mathbb{P}_1(A \setminus B) = \mathbb{P}_1(A) - \mathbb{P}_1(B) = \mathbb{P}_2(A) - \mathbb{P}_2(B) = \mathbb{P}_2(A \setminus B)  
> $$
> Suy ra $A \setminus B \in \mathcal{H}$.  
> 31. Đóng với giới hạn trên: Cho dãy $\{B_n\}_{n=1}^\infty \subseteq \mathcal{H}$ thỏa mãn $B_n \uparrow B$. Áp dụng tính liên tục dưới của độ đo:
> 
> $$
> \mathbb{P}_1(B) = \lim_{n \to \infty} \mathbb{P}_1(B_n) = \lim_{n \to \infty} \mathbb{P}_2(B_n) = \mathbb{P}_2(B)  
> $$
> Suy ra $B \in \mathcal{H}$.  
> 
> Do đó $\mathcal{H}$ là một $\lambda$-hệ.  
> 
> Bước 3: Áp dụng Định lý $\pi$-$\lambda$ của Dynkin.  
> Theo giả thiết đề bài, với mọi $x \in \mathbb{R}$, tập $I_x = (-\infty, x] \in \mathcal{C}$ thỏa mãn:  
> 
> $$
> \mathbb{P}_1(I_x) = F_1(x) = F_2(x) = \mathbb{P}_2(I_x) \implies I_x \in \mathcal{H}  
> $$
> Suy ra $\mathcal{C} \subseteq \mathcal{H}$.  
> Vì $\mathcal{C}$ là $\pi$-hệ và $\mathcal{H}$ là $\lambda$-hệ, theo Định lý Dynkin:  
> 
> $$
> \sigma(\mathcal{C}) \subseteq \mathcal{H} \iff \mathcal{B}(\mathbb{R}) \subseteq \mathcal{H}  
> $$
> 
> Vậy $\mathbb{P}_1(B) = \mathbb{P}_2(B)$ với mọi tập Borel $B \in \mathcal{B}(\mathbb{R})$.  

> [!exm] (Ứng dụng: Tiêu chuẩn độc lập của các $\sigma$-đại số)
> Cho $(\Omega, \mathfrak{M}, \mathbb{P})$ là một không gian xác suất. Giả sử $\mathcal{C}_1$ và $\mathcal{C}_2$ là hai $\pi$-hệ nằm trong $\mathfrak{M}$ thỏa mãn tính độc lập:
> $$ \mathbb{P}(A \cap B) = \mathbb{P}(A)\mathbb{P}(B), \quad \forall A \in \mathcal{C}_1, \forall B \in \mathcal{C}_2 $$
> Khi đó $\sigma(\mathcal{C}_1)$ và $\sigma(\mathcal{C}_2)$ độc lập với nhau, tức là:
> $$ \mathbb{P}(A \cap B) = \mathbb{P}(A)\mathbb{P}(B), \quad \forall A \in \sigma(\mathcal{C}_1), \forall B \in \sigma(\mathcal{C}_2) $$

> [!prf]
> Bước 1: Mở rộng độc lập cho $\sigma(\mathcal{C}_1)$ với $\mathcal{C}_2$.
> Cố định một tập $B \in \mathcal{C}_2$ tùy ý. Xét họ kiểm tra:
> $$ \mathcal{H}_1 = \{ A \in \mathfrak{M} : \mathbb{P}(A \cap B) = \mathbb{P}(A)\mathbb{P}(B) \} $$
> Ta chứng minh $\mathcal{H}_1$ là một $\lambda$-hệ:
> 32. $\Omega \in \mathcal{H}_1$ vì $\mathbb{P}(\Omega \cap B) = \mathbb{P}(B) = \mathbb{P}(\Omega)\mathbb{P}(B)$ (do $\mathbb{P}(\Omega) = 1$).
> 33. Đóng với phép hiệu chuẩn: Cho $A_1, A_2 \in \mathcal{H}_1$ với $A_1 \subseteq A_2$. Ta có:
>    $$ \mathbb{P}((A_2 \setminus A_1) \cap B) = \mathbb{P}((A_2 \cap B) \setminus (A_1 \cap B)) = \mathbb{P}(A_2 \cap B) - \mathbb{P}(A_1 \cap B) $$
>    $$ = \mathbb{P}(A_2)\mathbb{P}(B) - \mathbb{P}(A_1)\mathbb{P}(B) = (\mathbb{P}(A_2) - \mathbb{P}(A_1))\mathbb{P}(B) = \mathbb{P}(A_2 \setminus A_1)\mathbb{P}(B) $$
>    Suy ra $A_2 \setminus A_1 \in \mathcal{H}_1$.
> 34. Đóng với dãy tăng: Cho $A_n \in \mathcal{H}_1$ với $A_n \uparrow A$. Khi đó $(A_n \cap B) \uparrow (A \cap B)$. Áp dụng tính liên tục dưới:
>    $$ \mathbb{P}(A \cap B) = \lim_{n \to \infty} \mathbb{P}(A_n \cap B) = \lim_{n \to \infty} (\mathbb{P}(A_n)\mathbb{P}(B)) = \mathbb{P}(A)\mathbb{P}(B) $$
>    Suy ra $A \in \mathcal{H}_1$.
> 
> Vì $\mathcal{C}_1$ là $\pi$-hệ và $\mathcal{C}_1 \subseteq \mathcal{H}_1$, áp dụng Định lý Dynkin ta có $\sigma(\mathcal{C}_1) \subseteq \mathcal{H}_1$.
> Điều này có nghĩa: Với mọi $A \in \sigma(\mathcal{C}_1)$ và mọi $B \in \mathcal{C}_2$, đẳng thức $\mathbb{P}(A \cap B) = \mathbb{P}(A)\mathbb{P}(B)$ luôn đúng.
> 
> Bước 2: Mở rộng độc lập cho $\sigma(\mathcal{C}_1)$ với $\sigma(\mathcal{C}_2)$.
> Cố định một tập $A \in \sigma(\mathcal{C}_1)$ tùy ý. Xét họ kiểm tra:
> $$ \mathcal{H}_2 = \{ B \in \mathfrak{M} : \mathbb{P}(A \cap B) = \mathbb{P}(A)\mathbb{P}(B) \} $$
> Hoàn toàn tương tự Bước 1, ta chứng minh được $\mathcal{H}_2$ là một $\lambda$-hệ.
> Theo kết quả của Bước 1, với mọi $B \in \mathcal{C}_2$ thì $B \in \mathcal{H}_2$, do đó $\mathcal{C}_2 \subseteq \mathcal{H}_2$.
> Vì $\mathcal{C}_2$ là một $\pi$-hệ, áp dụng Định lý Dynkin ta suy ra $\sigma(\mathcal{C}_2) \subseteq \mathcal{H}_2$.
> Kết luận: Với mọi $A \in \sigma(\mathcal{C}_1)$ và mọi $B \in \sigma(\mathcal{C}_2)$, ta có $\mathbb{P}(A \cap B) = \mathbb{P}(A)\mathbb{P}(B)$.

