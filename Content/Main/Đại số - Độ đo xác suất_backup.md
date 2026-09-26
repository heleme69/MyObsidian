
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
> 1. $\mu(\emptyset) = 0$.
> 2. Tính $\sigma$-cộng tính: Với mọi dãy $\{A_n\}_{n=1}^\infty \subseteq \mathfrak{M}$ gồm các tập hợp đôi một rời nhau, ta có:
>    $$ \mu\left( \bigcup_{n=1}^\infty A_n \right) = \sum_{n=1}^\infty \mu(A_n) $$

> [!def] (Độ đo xác suất)
> Nếu độ đo $\mu$ thỏa mãn thêm điều kiện chuẩn hóa $\mu(\Omega) = 1$, thì $\mu$ được gọi là một độ đo xác suất (thường ký hiệu là $\mathbb{P}$). 
> 
> Khi đó, bộ ba $(\Omega, \mathfrak{M}, \mathbb{P})$ được gọi là một không gian xác suất, các phần tử trong $\mathfrak{M}$ được gọi là các biến cố. $A \in \mathfrak{M}$ nghĩa là $\mathfrak{M}$-đo được hoặc gọi $A$ đo được nếu độ đo đã xác định.

> [!thm] (Các tính chất cơ bản của độ đo)
> Cho độ đo $\mu$ trên $(\Omega, \mathfrak{M})$. Với mọi $A, B \in \mathfrak{M}$:
> 1. Tính đơn điệu: Nếu $A \subseteq B \implies \mu(A) \le \mu(B)$.
> 2. Tính cộng tính hữu hạn: Nếu $A \cap B = \emptyset \implies \mu(A \cup B) = \mu(A) + \mu(B)$.
> 3. Tính chất trừ: Nếu $A \subseteq B$ và $\mu(A) < \infty \implies \mu(B \setminus A) = \mu(B) - \mu(A)$.
> 4. Tính $\sigma$-dưới cộng tính: $\mu\left( \bigcup_{n=1}^\infty A_n \right) \le \sum_{n=1}^\infty \mu(A_n)$ với mọi dãy $\{A_n\}$ bất kỳ.

> [!def] (Tính đóng với các phép toán cơ bản)
> Cho họ tập hợp $\mathcal{H} \subseteq 2^\Omega$.
> 1. Đóng với phép giao hữu hạn: Với mọi $A, B \in \mathcal{H} \implies A \cap B \in \mathcal{H}$.
> 2. Đóng với phép hiệu: Với mọi $A, B \in \mathcal{H} \implies A \setminus B \in \mathcal{H}$.
> 3. Đóng với phép hiệu chuẩn (proper difference): Với mọi $A, B \in \mathcal{H}$ thỏa mãn $B \subseteq A \implies A \setminus B \in \mathcal{H}$.
> 4. Đóng với giới hạn trên (hợp dãy tăng): Với mọi dãy tăng $A_1 \subseteq A_2 \subseteq \dots$ trong $\mathcal{H}$, ta có $\lim_{n \to \infty} A_n = \bigcup_{n=1}^\infty A_n \in \mathcal{H}$.

> [!def] (Hệ $\pi$ và Hệ $\lambda$)
> Cho không gian nền $\Omega \neq \emptyset$.
> - $\pi$-hệ: Là một họ $\mathcal{C} \subseteq 2^\Omega$ đóng với phép giao hữu hạn.
> - $\lambda$-hệ (Hệ Dynkin): Là một họ $\mathcal{H} \subseteq 2^\Omega$ thỏa mãn 3 tiên đề:
>    1. Chứa không gian nền: $\Omega \in \mathcal{H}$.
>    2. Đóng với phép hiệu chuẩn: Với mọi $A, B \in \mathcal{H}$ và $B \subseteq A \implies A \setminus B \in \mathcal{H}$.
>    3. Đóng với giới hạn trên: Với mọi dãy $\{A_n\}_{n=1}^\infty \subseteq \mathcal{H}$ thỏa mãn $A_n \uparrow A \implies A \in \mathcal{H}$.

> [!prp] (Đặc trưng hóa $\sigma$-đại số qua Hệ $\pi$ và Hệ $\lambda$)
> Cho không gian nền $\Omega \neq \emptyset$. Một họ tập hợp $\mathfrak{M} \subseteq 2^\Omega$ là một $\sigma$-đại số khi và chỉ khi $\mathfrak{M}$ vừa là một $\pi$-hệ vừa là một $\lambda$-hệ.

> [!prf]
> $(\implies)$ Giả sử $\mathfrak{M}$ là một $\sigma$-đại số trên $\Omega$.
> 1. Vì $\mathfrak{M}$ đóng với phép giao đếm được, nó hiển nhiên đóng với phép giao hai tập hữu hạn: $A, B \in \mathfrak{M} \implies A \cap B \in \mathfrak{M}$. Do đó $\mathfrak{M}$ là một $\pi$-hệ.
> 2. Ta kiểm tra 3 tiên đề của $\lambda$-hệ:
>    - $\Omega \in \mathfrak{M}$ (tiên đề trực tiếp của $\sigma$-đại số).
>    - Cho $A, B \in \mathfrak{M}$ với $B \subseteq A$. Do $\mathfrak{M}$ đóng với phép bù và giao hữu hạn, ta có $A \setminus B = A \cap B^c \in \mathfrak{M}$. Vậy $\mathfrak{M}$ đóng với phép hiệu chuẩn.
>    - Cho dãy tăng bất kỳ $\{A_n\}_{n=1}^\infty \subseteq \mathfrak{M}$ thỏa mãn $A_n \uparrow A$. Giới hạn của dãy chính là hợp đếm được:
>      $$ A = \lim_{n \to \infty} A_n = \bigcup_{n=1}^\infty A_n $$
>      Do $\mathfrak{M}$ đóng với phép hợp đếm được nên $A \in \mathfrak{M}$.
>    
>    Suy ra $\mathfrak{M}$ là một $\lambda$-hệ.
> 
> $(\impliedby)$ Giả sử $\mathfrak{M}$ đồng thời là một $\pi$-hệ và một $\lambda$-hệ. Ta kiểm tra 3 tiên đề của một $\sigma$-đại số:
> 1. **Chứa không gian nền:** $\Omega \in \mathfrak{M}$ theo tiên đề 1 của $\lambda$-hệ.
> 2. **Đóng với phép bù:** Với mọi $A \in \mathfrak{M}$, do $A \subseteq \Omega$ và $\Omega \in \mathfrak{M}$, áp dụng tính đóng với hiệu chuẩn của $\lambda$-hệ ta có:
>    $$ A^c = \Omega \setminus A \in \mathfrak{M} $$
> 3. **Đóng với phép hợp đếm được:** Giả sử $\{A_n\}_{n=1}^\infty \subseteq \mathfrak{M}$.
>    - Trước hết, ta chứng minh $\mathfrak{M}$ đóng với phép hợp hữu hạn: Với $A_1, A_2 \in \mathfrak{M}$, vì $\mathfrak{M}$ đóng với phép bù và là $\pi$-hệ (đóng với giao hữu hạn), theo luật De Morgan:
>      $$ A_1 \cup A_2 = (A_1^c \cap A_2^c)^c \in \mathfrak{M} $$
>      Bằng quy nạp, mọi hợp hữu hạn $\bigcup_{k=1}^n A_k$ đều thuộc $\mathfrak{M}$.
>    - Đặt dãy tổng bộ phận: $B_n = \bigcup_{k=1}^n A_k \in \mathfrak{M}$. Khi đó dãy $\{B_n\}_{n=1}^\infty$ là một dãy tăng:
>      $$ B_1 \subseteq B_2 \subseteq B_3 \subseteq \dots $$
>    - Áp dụng tính đóng với giới hạn trên của $\lambda$-hệ cho dãy tăng $\{B_n\}$:
>      $$ \bigcup_{n=1}^\infty A_n = \lim_{n \to \infty} B_n \in \mathfrak{M} $$
> 
> Vậy $\mathfrak{M}$ thỏa mãn toàn bộ các tiên đề và là một $\sigma$-đại số trên $\Omega$.

> [!thm] (Định lý $\pi$-$\lambda$ của Dynkin)
> Cho không gian nền $\Omega \neq \emptyset$. Nếu $\mathcal{C}$ là một $\pi$-hệ, $\mathcal{H}$ là một $\lambda$-hệ, và $\mathcal{C} \subseteq \mathcal{H}$, thì:
> $$ \sigma(\mathcal{C}) \subseteq \mathcal{H} $$

> [!prf]
> Gọi $\mathcal{H}(\mathcal{C})$ là $\lambda$-hệ nhỏ nhất chứa $\mathcal{C}$. Vì giao của một họ các $\lambda$-hệ bất kỳ luôn là một $\lambda$-hệ, $\mathcal{H}(\mathcal{C})$ tồn tại và hiển nhiên $\mathcal{C} \subseteq \mathcal{H}(\mathcal{C}) \subseteq \mathcal{H}$.
> 
> Ta sẽ chứng minh $\mathcal{H}(\mathcal{C})$ là một $\sigma$-đại số. Khi đó, do $\sigma(\mathcal{C})$ là $\sigma$-đại số nhỏ nhất chứa $\mathcal{C}$, ta suy ra $\sigma(\mathcal{C}) \subseteq \mathcal{H}(\mathcal{C}) \subseteq \mathcal{H}$.
> 
> Vì $\mathcal{H}(\mathcal{C})$ là một $\lambda$-hệ, nó chứa $\Omega$, đóng với phép hiệu chuẩn (suy ra đóng với phép lấy phần bù vì $A^c = \Omega \setminus A$), và đóng với hợp dãy tăng. Để là một $\sigma$-đại số, $\mathcal{H}(\mathcal{C})$ chỉ cần đóng với phép giao hữu hạn.
> 
> Với mỗi tập $A \subseteq \Omega$, đặt họ kiểm tra:
> $$ \mathcal{D}_A = \{ B \in \mathcal{H}(\mathcal{C}) : A \cap B \in \mathcal{H}(\mathcal{C}) \} $$
> Nhận xét: Nếu $A \in \mathcal{H}(\mathcal{C})$, thì $\mathcal{D}_A$ là một $\lambda$-hệ:
> 1. $\Omega \in \mathcal{D}_A$ vì $A \cap \Omega = A \in \mathcal{H}(\mathcal{C})$.
> 2. Đóng với phép hiệu chuẩn: Với $B_1, B_2 \in \mathcal{D}_A$ và $B_1 \subseteq B_2$, ta có $A \cap (B_2 \setminus B_1) = (A \cap B_2) \setminus (A \cap B_1)$. Do $A \cap B_1 \subseteq A \cap B_2$ cùng thuộc $\mathcal{H}(\mathcal{C})$, hiệu chuẩn của chúng nằm trong $\mathcal{H}(\mathcal{C})$. Vậy $B_2 \setminus B_1 \in \mathcal{D}_A$.
> 3. Đóng với dãy tăng: Với $B_n \in \mathcal{D}_A$ thỏa $B_n \uparrow B$, ta có $(A \cap B_n) \uparrow (A \cap B)$. Do $A \cap B_n \in \mathcal{H}(\mathcal{C})$, hợp giới hạn của dãy cũng nằm trong $\mathcal{H}(\mathcal{C})$. Vậy $B \in \mathcal{D}_A$.
> 
> Ta chứng minh $\mathcal{H}(\mathcal{C})$ đóng với phép giao qua hai bước:
> Bước 1: Cố định $C \in \mathcal{C}$. Với mọi $C' \in \mathcal{C}$, do $\mathcal{C}$ là $\pi$-hệ nên $C \cap C' \in \mathcal{C} \subseteq \mathcal{H}(\mathcal{C}) \implies C' \in \mathcal{D}_C \implies \mathcal{C} \subseteq \mathcal{D}_C$. Do $\mathcal{D}_C$ là $\lambda$-hệ và do tính tối tiểu của $\mathcal{H}(\mathcal{C})$, ta có $\mathcal{H}(\mathcal{C}) \subseteq \mathcal{D}_C$. Nghĩa là với mọi $B \in \mathcal{H}(\mathcal{C})$ và $C \in \mathcal{C}$ thì $B \cap C \in \mathcal{H}(\mathcal{C})$.
> 
> Bước 2: Cố định $B \in \mathcal{H}(\mathcal{C})$. Theo Bước 1, với mọi $C \in \mathcal{C}$ ta có $B \cap C \in \mathcal{H}(\mathcal{C}) \implies C \in \mathcal{D}_B \implies \mathcal{C} \subseteq \mathcal{D}_B$. Do $\mathcal{D}_B$ là $\lambda$-hệ, lại theo tính tối tiểu suy ra $\mathcal{H}(\mathcal{C}) \subseteq \mathcal{D}_B$. Nghĩa là với mọi $A, B \in \mathcal{H}(\mathcal{C})$ thì $A \cap B \in \mathcal{H}(\mathcal{C})$.
> 
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

> [!def] (Lớp đơn điệu - Monotone Class)
> Một họ $\mathcal{H} \subseteq 2^\Omega$ được gọi là một lớp đơn điệu nếu nó đóng với cả giới hạn trên và giới hạn dưới. Cụ thể:
> 1. Đóng với giới hạn trên: Dãy tăng $A_n \uparrow A \implies A \in \mathcal{H}$.
> 2. Đóng với giới hạn dưới: Dãy giảm $F_n \downarrow F \implies F \in \mathcal{H}$.

> [!thm] (Định lý Halmos đối với lớp đơn điệu)
> Cho $\mathcal{C}$ là một đại số trên $\Omega$. Nếu $\mathcal{H}$ là một lớp đơn điệu chứa $\mathcal{C}$, thì:
> $$ \sigma(\mathcal{C}) \subseteq \mathcal{H} $$

> [!prf]
> Gọi $\mathbf{m}(\mathcal{C})$ là lớp đơn điệu nhỏ nhất chứa $\mathcal{C}$. Ta có $\mathbf{m}(\mathcal{C}) \subseteq \mathcal{H}$.
> Ta chứng minh $\mathbf{m}(\mathcal{C})$ là một $\lambda$-hệ:
> 1. Do $\mathcal{C}$ là đại số nên $\Omega \in \mathcal{C} \subseteq \mathbf{m}(\mathcal{C})$.
> 2. Định nghĩa lớp đơn điệu bảo đảm $\mathbf{m}(\mathcal{C})$ đóng với giới hạn dãy tăng.
> 3. Để kiểm tra tính đóng với phép hiệu chuẩn, với mỗi $A \in \mathbf{m}(\mathcal{C})$, xét:
>    $$ \mathcal{D}_A = \{ B \in \mathbf{m}(\mathcal{C}) : A \setminus B \in \mathbf{m}(\mathcal{C}), B \setminus A \in \mathbf{m}(\mathcal{C}), A \cup B \in \mathbf{m}(\mathcal{C}) \} $$
>    Dễ dàng kiểm tra $\mathcal{D}_A$ là một lớp đơn điệu. Với $A \in \mathcal{C}$, do $\mathcal{C}$ là đại số nên $\mathcal{C} \subseteq \mathcal{D}_A$, dẫn tới $\mathcal{D}_A = \mathbf{m}(\mathcal{C})$. Lặp lại cho $A \in \mathbf{m}(\mathcal{C})$, ta thu được $\mathcal{D}_A = \mathbf{m}(\mathcal{C})$ với mọi $A \in \mathbf{m}(\mathcal{C})$. Suy ra $\mathbf{m}(\mathcal{C})$ đóng với phép hiệu chuẩn.
> 
> Do đó $\mathbf{m}(\mathcal{C})$ là một $\lambda$-hệ. Vì đại số $\mathcal{C}$ đóng với giao hữu hạn nên $\mathcal{C}$ là $\pi$-hệ. Áp dụng Định lý Dynkin cho cặp họ sinh $\mathcal{C}$ và $\lambda$-hệ $\mathbf{m}(\mathcal{C})$:
> $$ \sigma(\mathcal{C}) \subseteq \mathbf{m}(\mathcal{C}) \subseteq \mathcal{H} $$

> [!obs] (Motivation: Sự tương thích Hệ $\pi$-$\lambda$ với Độ đo)
> Trong thực hành, việc kiểm tra trực tiếp một tính chất giải tích trên toàn bộ $\sigma$-đại số $\sigma(\mathcal{C})$ là bất khả thi vì $\sigma(\mathcal{C})$ chứa vô số tập hợp phức tạp không thể biểu diễn tường minh. Hệ $\pi$-$\lambda$ của Dynkin giải quyết triệt để vấn đề này nhờ sự tương thích 1-1 giữa cấu trúc $\lambda$-hệ với các tiên đề của độ đo:
> 
> 1. **$\Omega \in \mathcal{H}$** $\longleftrightarrow$ **Tính chuẩn hóa của độ đo:** Độ đo trên không gian xác suất hoặc không gian đo hữu hạn luôn xác định tại toàn không gian: $\mu_1(\Omega) = \mu_2(\Omega) = 1 < \infty$.
> 2. **Đóng với hiệu chuẩn ($B \subseteq A \implies A \setminus B \in \mathcal{H}$)** $\longleftrightarrow$ **Tính chất trừ của độ đo:** Khi $B \subseteq A$ và độ đo hữu hạn, ta có phép trừ tập hợp $\mu(A \setminus B) = \mu(A) - \mu(B)$, giúp đẳng thức độ đo tự động bảo toàn qua phép hiệu tập con.
> 3. **Đóng với giới hạn trên ($A_n \uparrow A \implies A \in \mathcal{H}$)** $\longleftrightarrow$ **Tính liên tục dưới của độ đo:** Với dãy tăng, độ đo cho phép hoán vị giới hạn $\mu(A) = \lim \mu(A_n)$, giúp đẳng thức độ đo bảo toàn qua phép hợp vô hạn.
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
> 1. Chứa không gian nền $\mathbb{R}$: Do $\mathbb{P}_1$ và $\mathbb{P}_2$ là các độ đo xác suất, ta có $\mathbb{P}_1(\mathbb{R}) = 1 = \mathbb{P}_2(\mathbb{R}) \implies \mathbb{R} \in \mathcal{H}$.
> 2. Đóng với phép hiệu chuẩn: Cho $A, B \in \mathcal{H}$ thỏa mãn $B \subseteq A$. Do độ đo xác suất có giá trị hữu hạn, áp dụng tính chất trừ:
> $$
> \mathbb{P}_1(A \setminus B) = \mathbb{P}_1(A) - \mathbb{P}_1(B) = \mathbb{P}_2(A) - \mathbb{P}_2(B) = \mathbb{P}_2(A \setminus B)  
> $$
> Suy ra $A \setminus B \in \mathcal{H}$.  
> 3. Đóng với giới hạn trên: Cho dãy $\{B_n\}_{n=1}^\infty \subseteq \mathcal{H}$ thỏa mãn $B_n \uparrow B$. Áp dụng tính liên tục dưới của độ đo:
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
> 1. $\Omega \in \mathcal{H}_1$ vì $\mathbb{P}(\Omega \cap B) = \mathbb{P}(B) = \mathbb{P}(\Omega)\mathbb{P}(B)$ (do $\mathbb{P}(\Omega) = 1$).
> 2. Đóng với phép hiệu chuẩn: Cho $A_1, A_2 \in \mathcal{H}_1$ với $A_1 \subseteq A_2$. Ta có:
>    $$ \mathbb{P}((A_2 \setminus A_1) \cap B) = \mathbb{P}((A_2 \cap B) \setminus (A_1 \cap B)) = \mathbb{P}(A_2 \cap B) - \mathbb{P}(A_1 \cap B) $$
>    $$ = \mathbb{P}(A_2)\mathbb{P}(B) - \mathbb{P}(A_1)\mathbb{P}(B) = (\mathbb{P}(A_2) - \mathbb{P}(A_1))\mathbb{P}(B) = \mathbb{P}(A_2 \setminus A_1)\mathbb{P}(B) $$
>    Suy ra $A_2 \setminus A_1 \in \mathcal{H}_1$.
> 3. Đóng với dãy tăng: Cho $A_n \in \mathcal{H}_1$ với $A_n \uparrow A$. Khi đó $(A_n \cap B) \uparrow (A \cap B)$. Áp dụng tính liên tục dưới:
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

> [!thm] (Trace $\sigma$-algebra)
> Cho $X \neq \emptyset$, $\mathfrak{C} \subseteq 2^X$ là một họ tập con tùy ý của $X$, và $A \subseteq X$. Đặt:
> $$ \sigma(\mathfrak{C}) \cap A = \{ B \cap A : B \in \sigma(\mathfrak{C}) \} $$
> Khi đó:
> 1. $\sigma(\mathfrak{C}) \cap A$ là một $\sigma$-đại số trên không gian nền $A$.
> 2. $\sigma_A(\mathfrak{C} \cap A) = \sigma(\mathfrak{C}) \cap A$, trong đó $\sigma_A(\mathfrak{C} \cap A)$ là $\sigma$-đại số trên $A$ sinh bởi họ vết $\mathfrak{C} \cap A = \{ C \cap A : C \in \mathfrak{C} \}$.

> [!prf]
> **Phần 1: Chứng minh $\sigma(\mathfrak{C}) \cap A$ là một $\sigma$-đại số trên $A$.**
> Ta kiểm tra 3 tiên đề của $\sigma$-đại số trên không gian nền $A$:
> 1. **Chứa không gian nền $A$:** Vì $\sigma(\mathfrak{C})$ là $\sigma$-đại số trên $X$ nên $X \in \sigma(\mathfrak{C})$. Do đó $A = X \cap A \in \sigma(\mathfrak{C}) \cap A$.
> 2. **Đóng với phép bù trên $A$:** Giả sử $E \in \sigma(\mathfrak{C}) \cap A$, tức tồn tại $B \in \sigma(\mathfrak{C})$ sao cho $E = B \cap A$. Phần bù của $E$ đối với không gian nền $A$ là:
>    $$ A \setminus E = A \setminus (B \cap A) = A \cap B^c = B^c \cap A $$
>    Vì $\sigma(\mathfrak{C})$ đóng với phép bù trên $X$ nên $B^c = X \setminus B \in \sigma(\mathfrak{C})$. Suy ra $A \setminus E \in \sigma(\mathfrak{C}) \cap A$.
> 3. **Đóng với hợp đếm được:** Cho dãy $\{E_n\}_{n=1}^\infty \subseteq \sigma(\mathfrak{C}) \cap A$. Khi đó với mỗi $n$, tồn tại $B_n \in \sigma(\mathfrak{C})$ sao cho $E_n = B_n \cap A$. Ta có:
>    $$ \bigcup_{n=1}^\infty E_n = \bigcup_{n=1}^\infty (B_n \cap A) = \left( \bigcup_{n=1}^\infty B_n \right) \cap A $$
>    Do $\sigma(\mathfrak{C})$ đóng với hợp đếm được nên $\bigcup_{n=1}^\infty B_n \in \sigma(\mathfrak{C})$. Suy ra $\bigcup_{n=1}^\infty E_n \in \sigma(\mathfrak{C}) \cap A$.
> 
> Vậy $\sigma(\mathfrak{C}) \cap A$ là một $\sigma$-đại số trên $A$.
> 
> **Phần 2: Chứng minh đẳng thức $\sigma_A(\mathfrak{C} \cap A) = \sigma(\mathfrak{C}) \cap A$.**
> 
> - **Chiều 1: Chứng minh $\sigma_A(\mathfrak{C} \cap A) \subseteq \sigma(\mathfrak{C}) \cap A$.**
>   Với mọi phần tử $C \in \mathfrak{C} \subseteq \sigma(\mathfrak{C})$, ta có $C \cap A \in \sigma(\mathfrak{C}) \cap A$. Suy ra $\mathfrak{C} \cap A \subseteq \sigma(\mathfrak{C}) \cap A$.
>   Theo Phần 1, $\sigma(\mathfrak{C}) \cap A$ là một $\sigma$-đại số trên $A$ chứa $\mathfrak{C} \cap A$. Mà $\sigma_A(\mathfrak{C} \cap A)$ là $\sigma$-đại số nhỏ nhất trên $A$ chứa $\mathfrak{C} \cap A$, do đó:
>   $$ \sigma_A(\mathfrak{C} \cap A) \subseteq \sigma(\mathfrak{C}) \cap A $$
> 
> - **Chiều 2: Chứng minh $\sigma(\mathfrak{C}) \cap A \subseteq \sigma_A(\mathfrak{C} \cap A)$.**
>   Xét họ kiểm tra gồm các tập con của $X$:
>   $$ \mathcal{D} = \{ B \subseteq X : B \cap A \in \sigma_A(\mathfrak{C} \cap A) \} $$
>   Ta chứng minh $\mathcal{D}$ là một $\sigma$-đại số trên $X$:
>   - $X \in \mathcal{D}$ vì $X \cap A = A \in \sigma_A(\mathfrak{C} \cap A)$.
>   - Nếu $B \in \mathcal{D}$, thì $B^c \cap A = (X \setminus B) \cap A = A \setminus (B \cap A) \in \sigma_A(\mathfrak{C} \cap A)$ (do $B \cap A \in \sigma_A(\mathfrak{C} \cap A)$ và $\sigma_A(\mathfrak{C} \cap A)$ đóng với phép bù trên $A$). Do đó $B^c \in \mathcal{D}$.
>   - Nếu $\{B_n\}_{n=1}^\infty \subseteq \mathcal{D}$, thì $\left(\bigcup_{n=1}^\infty B_n\right) \cap A = \bigcup_{n=1}^\infty (B_n \cap A) \in \sigma_A(\mathfrak{C} \cap A)$ (do đóng với hợp đếm được trên $A$). Do đó $\bigcup_{n=1}^\infty B_n \in \mathcal{D}$.
>   
>   Vậy $\mathcal{D}$ là một $\sigma$-đại số trên $X$. Mặt khác, với mọi $C \in \mathfrak{C}$, ta có $C \cap A \in \mathfrak{C} \cap A \subseteq \sigma_A(\mathfrak{C} \cap A)$, suy ra $\mathfrak{C} \subseteq \mathcal{D}$.
>   Vì $\sigma(\mathfrak{C})$ là $\sigma$-đại số nhỏ nhất trên $X$ chứa $\mathfrak{C}$, ta suy ra:
>   $$ \sigma(\mathfrak{C}) \subseteq \mathcal{D} $$
>   Điều này có nghĩa là với mọi $B \in \sigma(\mathfrak{C})$, ta đều có $B \cap A \in \sigma_A(\mathfrak{C} \cap A)$. Hay nói cách khác:
>   $$ \sigma(\mathfrak{C}) \cap A \subseteq \sigma_A(\mathfrak{C} \cap A) $$
> 
> Kết hợp cả hai chiều, ta được đẳng thức cần chứng minh: $\sigma_A(\mathfrak{C} \cap A) = \sigma(\mathfrak{C}) \cap A$.

> [!prp] (Tính tương đương của các điều kiện liên tục của độ đo xác suất)
> Cho $\mathcal{A}$ là một $\sigma$-đại số trên không gian $\Omega$. Giả sử ánh xạ $\mathbb{P} : \mathcal{A} \to [0, 1]$ thỏa mãn điều kiện chuẩn hóa $\mathbb{P}(\Omega) = 1$ và có tính cộng tính hữu hạn (tức là $\mathbb{P}(A \cup B) = \mathbb{P}(A) + \mathbb{P}(B)$ với mọi $A, B \in \mathcal{A}$ thỏa mãn $A \cap B = \emptyset$).
> 
> Khi đó, các mệnh đề sau đây là tương đương:
> 
> (i). Cộng tính đếm được ($\sigma$-additivity): 
>     Nếu $(A_n)_{n \ge 1}$ là một dãy các tập rời nhau từng đôi một trong $\mathcal{A}$, thì:
>     $$\mathbb{P}\left(\bigcup_{n=1}^\infty A_n\right) = \sum_{n=1}^\infty \mathbb{P}(A_n)$$
> (ii). Liên tục dưới tại $\emptyset$: 
>     Nếu $A_n \in \mathcal{A}$ với $A_{n+1} \subseteq A_n$ với mọi $n \ge 1$ và $\bigcap_{n=1}^\infty A_n = \emptyset$ (ký hiệu $A_n \downarrow \emptyset$), thì:
>     $$\lim_{n \to \infty} \mathbb{P}(A_n) = 0 \quad (\text{ký hiệu } \mathbb{P}(A_n) \downarrow 0)$$
> (iii). Liên tục dưới: 
>     Nếu $A_n \in \mathcal{A}$ với $A_{n+1} \subseteq A_n$ với mọi $n \ge 1$ và $\bigcap_{n=1}^\infty A_n = A$ (ký hiệu $A_n \downarrow A$), thì:
>     $$\lim_{n \to \infty} \mathbb{P}(A_n) = \mathbb{P}(A) \quad (\text{ký hiệu } \mathbb{P}(A_n) \downarrow \mathbb{P}(A))$$
> (iv). Liên tục trên tại $\Omega$: 
>     Nếu $A_n \in \mathcal{A}$ với $A_n \subseteq A_{n+1}$ với mọi $n \ge 1$ và $\bigcup_{n=1}^\infty A_n = \Omega$ (ký hiệu $A_n \uparrow \Omega$), thì:
>     $$\lim_{n \to \infty} \mathbb{P}(A_n) = 1 \quad (\text{ký hiệu } \mathbb{P}(A_n) \uparrow 1)$$
> (v). Liên tục trên: 
>     Nếu $A_n \in \mathcal{A}$ với $A_n \subseteq A_{n+1}$ với mọi $n \ge 1$ và $\bigcup_{n=1}^\infty A_n = A$ (ký hiệu $A_n \uparrow A$), thì:
>     $$\lim_{n \to \infty} \mathbb{P}(A_n) = \mathbb{P}(A) \quad (\text{ký hiệu } \mathbb{P}(A_n) \uparrow \mathbb{P}(A))$$

> [!prf]
> **Chứng minh $\text{(ii)} \iff \text{(iv)}$ và $\text{(iii)} \iff \text{(v)}$:**
> Theo luật De-Morgan, nếu một dãy $A_{n} \downarrow A$ thì dãy bù $A^{c} \uparrow A^{c}$. Do giả thiết $\mathbb{P}$ có tính cộng hữu hạn và $\mathbb{P}(\Omega) = 1$, ta có công thức xác suất phần bù: 
> $$
> \mathbb{P}(A^{c}) = 1 - \mathbb{P}(A_{n}) \iff \mathbb{P}(A_{n}) = 1 - \mathbb{P}(A^{c})
> $$
> Do đó khi $A = \emptyset$, ta có $A^{c} = \Omega$. Dãy $A_{n} \downarrow \emptyset$ tương đương $A_{n}^{c} \uparrow \Omega$, nên $\mathbb{P}(A_{n}) \downarrow 0 \iff \mathbb{P}(A_{n}^{c}) = 1 - \mathbb{P}(A_{n}) \uparrow 1$. Vậy $\text{(ii)} \iff \text{(iv)}$
> 
> Với tập $A$ bất kì, dãy $A_n \downarrow A$ tương đương $A_n^c \uparrow A^c$. Khi đó $\mathbb{P}(A_n) \downarrow \mathbb{P}(A) \iff \mathbb{P}(A_n^c) = 1 - \mathbb{P}(A_n) \uparrow 1 - \mathbb{P}(A) = \mathbb{P}(A^c)$. Vậy $\text{(iii)} \iff \text{(v)}$. 
> 
> **Chứng minh $\text{(iv)} \iff \text{(v)}$:**
>  Chiều $\text{(v)} \implies \text{(iv)}$ là hiển nhiên bằng cách chọn trường hợp đặc biệt $A = \Omega$. 
>   
>  Giả sử ta có $\text{(iv)}$ và dãy tăng $A_{n} \uparrow A$. Xét $B_{n} = A_{n} \cup A^{c}$, ta có $B_{n} \uparrow A \cup A^{c} = \Omega$. Áp dụng $\text{(iv)}$ cho $B_{n}$, ta được: 
>  $$
>  \lim_{ n \to \infty } \mathbb{P}(B_{n}) = 1
>  $$
> Vì $A_{n} \subset A$ nên $A_{n} \cap A^{c} = \emptyset$. Sử dụng tính hữu hạn công tính, ta có: 
> $$
> \mathbb{P}(B_n) = \mathbb{P}(A_n \cup A^c) = \mathbb{P}(A_n) + \mathbb{P}(A^c)
> $$
> Lấy giới hạn $n \to \infty$: 
> $$
> 1 = \lim_{n \to \infty} \mathbb{P}(B_n) = \lim_{n \to \infty} \{\mathbb{P}(A_n) + \mathbb{P}(A^c)\} = \lim_{n \to \infty} \mathbb{P}(A_n) + \mathbb{P}(A^c)
> $$
> Ta suy ra $\lim_{ n \to \infty } \mathbb{P}(A_{n}) = 1 - \mathbb{P}(A^{c}) = \mathbb{P}(A)$, ta thu được $\text{(v)}$.
> 
> **Chứng minh $\text{(v)} \iff \text{(i)}$:**
> Giả sử có ${} \text{(v)} {}$. Xét dãy $(A_n)_{n \ge 1}$ các tập rời nhau từng đôi một ($A_n \cap A_m = \emptyset$ khi $n \ne m$). Đặt $B_{n} = \bigcup_{n = 1}^{\infty} A_{n}$ và xét bộ $B_{p} = \bigcup_{p = 1} ^{n} A_{p}$. Ta có dãy $(B_{n})_{n \ge 1}$ là dãy tăng và $B_{n} \uparrow B$, theo tính cộng tính hữu hạn, với mỗi $n$: 
> $$
> \mathbb{P}(B_n) = \sum_{p=1}^n \mathbb{P}(A_p)
> $$
> Lấy giới hạn $n \to \infty$: 
> $$
> \mathbb{P}(B) = \lim_{ n \to \infty } \mathbb{P}(B_{n}) = \sum_{p=1}^{\infty} \mathbb{P}(A_{p})
> $$
> Áp dụng tính chất liên tục trên cho dãy $B_{n} \uparrow B$, ta có $\lim_{n \to \infty} \mathbb{P}(B_n) = \mathbb{P}(B)$. Ta thu được ${} \text{(i)} {}$: 
> $$
> \mathbb{P}\left(\bigcup_{n=1}^\infty A_n\right) = \mathbb{P}(B) = \sum_{n=1}^\infty \mathbb{P}(A_n)
> $$
> 
> Bây giờ giả sử ta có $\text{(i)}$ và dãy tăng $A_{n} \uparrow A$. Đặt $B_{1} = A_{1}$, $B_{2} = A_{2} \setminus A_{1}$ và tương tự cho tới $B_{n} = A_{n} \setminus A_{n - 1}$. Khi đó $(B_{n})_{n \ge 1}$ rời nhau và $\bigcup_{n = 1} ^{\infty} B_{n} = \bigcup_{n = 1} ^{\infty} A_{n} = A$ và $\bigcup_{p=1}^n B_p = A_n$. Áp dụng tính cộng tính đếm được: 
> $$
> \mathbb{P}(A) = \mathbb{P}\left(\bigcup_{n=1}^\infty B_n\right) = \sum_{p=1}^\infty \mathbb{P}(B_p) = \lim_{n \to \infty} \sum_{p=1}^n \mathbb{P}(B_p)
> $$
> Mặt khác do tính cộng tính hữu hạn, $\sum_{p=1}^{n} \mathbb{P}(B_{p}) = \mathbb{P}\left( \bigcup_{p = 1} ^{n} B_{n} \right) = \mathbb{P}(A)$.  Thay vào giới hạn bên trên, ta được: 
> $$
> \lim_{n \to \infty} \mathbb{P}(A_n) = \mathbb{P}(A)
> $$
> Vậy ta thu được $\text{(i)}$.

> [!def] (Hàm chỉ thị và Sự hội tụ của dãy biến cố)
> Cho $\Omega$ là không gian mẫu.
> 
> 1. Với mỗi tập con $A \subseteq \Omega$ ($A \in 2^\Omega$), **hàm chỉ thị** (*indicator function*) của $A$ được xác định bởi:
>     $$\mathbf{1}_A(\omega) = \begin{cases} 1 & \text{nếu } \omega \in A, \\ 0 & \text{nếu } \omega \notin A. \end{cases}$$
>     Ta viết gọn $\mathbf{1}_A$ thay cho $\mathbf{1}_A(\omega)$.
> 
> 2. Dãy các tập hợp $A_n \in \mathcal{A}$ được gọi là **hội tụ** về tập hợp $A$ (ký hiệu $A_n \to A$) nếu:
>     $$\lim_{n \to \infty} \mathbf{1}_{A_n}(\omega) = \mathbf{1}_A(\omega), \quad \forall \omega \in \Omega.$$
>     Đặc biệt, nếu dãy $A_n$ là dãy tăng (tương ứng, dãy giảm) dần về $A$, thì dãy đó cũng hội tụ về $A$ theo nghĩa trên.

> [!prp] Các phép toán cơ bản của hàm chỉ thị
> Cho $\Omega$ là không gian mẫu và $A, B \subseteq \Omega$. Ta có các tính chất:
> 
> (i) Phép giao và tích đại số:
> $$
> \mathbf{1}_{A \cap B}(\omega) = \mathbf{1}_A(\omega) \cdot \mathbf{1}_B(\omega) = \min\{\mathbf{1}_A(\omega), \mathbf{1}_B(\omega)\}, \quad \forall \omega \in \Omega
> $$
> 
> (ii) Phép lấy phần bù:
> $$
> \mathbf{1}_{A^c}(\omega) = 1 - \mathbf{1}_A(\omega), \quad \forall \omega \in \Omega
> $$
> 
> (iii) Phép hợp và cực đại:
> $$
> \mathbf{1}_{A \cup B}(\omega) = \max\{\mathbf{1}_A(\omega), \mathbf{1}_B(\omega)\} = \mathbf{1}_A(\omega) + \mathbf{1}_B(\omega) - \mathbf{1}_{A \cap B}(\omega), \quad \forall \omega \in \Omega
> $$
> Đặc biệt, nếu $A \cap B = \emptyset$ thì $\mathbf{1}_{A \cup B}(\omega) = \mathbf{1}_A(\omega) + \mathbf{1}_B(\omega)$.

> [!prf] Chứng minh
> $\text{(i)}$ Xét phép giao:
> 
> Nếu $\omega \in A \cap B$, ta có $\omega \in A$ và $\omega \in B$, do đó $\mathbf{1}_A(\omega) = 1$ và $\mathbf{1}_B(\omega) = 1$. Khi đó:
> $$
> \mathbf{1}_A(\omega) \cdot \mathbf{1}_B(\omega) = 1 = \mathbf{1}_{A \cap B}(\omega)
> $$
> 
> Ngược lại, nếu $\omega \notin A \cap B$, ít nhất một trong hai giá trị bằng $0$, dẫn tới tích bằng $0 = \mathbf{1}_{A \cap B}(\omega)$. Biểu thức cực tiểu tương đương vì $\min\{1, 1\} = 1$ và $\min\{1, 0\} = \min\{0, 0\} = 0$.
> 
> $\text{(ii)}$ Xét phép lấy phần bù:
> 
> Nếu $\omega \in A^c$ thì $\omega \notin A$, do đó $\mathbf{1}_{A^c}(\omega) = 1$ và:
> $$
> 1 - \mathbf{1}_A(\omega) = 1 - 0 = 1
> $$
> 
> Nếu $\omega \notin A^c$ thì $\omega \in A$, suy ra $\mathbf{1}_{A^c}(\omega) = 0$ và:
> $$
> 1 - \mathbf{1}_A(\omega) = 1 - 1 = 0
> $$
> 
> $\text{(iii)}$ Xét phép hợp:
> 
> Theo luật De Morgan, $A \cup B = (A^c \cap B^c)^c$. Sử dụng $\text{(i)}$ và $\text{(ii)}$:
> $$
> \mathbf{1}_{A \cup B} = 1 - \mathbf{1}_{A^c \cap B^c} = 1 - (1 - \mathbf{1}_A)(1 - \mathbf{1}_B) = \mathbf{1}_A + \mathbf{1}_B - \mathbf{1}_A \mathbf{1}_B = \mathbf{1}_A + \mathbf{1}_B - \mathbf{1}_{A \cap B}
> $$
> 
> Mặt khác, $\omega \in A \cup B$ khi và chỉ khi ít nhất một trong hai giá trị $\mathbf{1}_A(\omega), \mathbf{1}_B(\omega)$ bằng $1$, điều này tương đương với $\max\{\mathbf{1}_A(\omega), \mathbf{1}_B(\omega)\} = 1$.
> 
> Khi $A \cap B = \emptyset$, $\mathbf{1}_{A \cap B} = 0$, ta thu được $\mathbf{1}_{A \cup B} = \mathbf{1}_A + \mathbf{1}_B$.

> [!prp] (Giới hạn đơn điệu và supremum, infimum)
> Cho $(A_n)_{n \ge 1}$ là một dãy các tập con của $\Omega$.
> 
> (i) Dãy tăng: Nếu $A_n \subseteq A_{n+1}$ với mọi $n \ge 1$, ta có $A_n \uparrow A$ và đặt $A = \bigcup_{n=1}^\infty A_n$, thì:
> $$
> \lim_{n \to \infty} \mathbf{1}_{A_n}(\omega) = \sup_{n \ge 1} \mathbf{1}_{A_n}(\omega) = \mathbf{1}_A(\omega), \quad \forall \omega \in \Omega
> $$
> 
> (ii) Dãy giảm: Nếu $A_{n+1} \subseteq A_n$ với mọi $n \ge 1$, ta có $A_n \downarrow A$ và đặt $A = \bigcap_{n=1}^\infty A_n$ thì:
> $$
> \lim_{n \to \infty} \mathbf{1}_{A_n}(\omega) = \inf_{n \ge 1} \mathbf{1}_{A_n}(\omega) = \mathbf{1}_A(\omega), \quad \forall \omega \in \Omega
> $$
> 
> (iii) Họ tập bất kỳ: Với một dãy tập $(E_k)_{k \ge 1}$ tùy ý, ta luôn có:
> $$
> \mathbf{1}_{\bigcup_{k=n}^\infty E_k}(\omega) = \sup_{k \ge n} \mathbf{1}_{E_k}(\omega), \qquad \mathbf{1}_{\bigcap_{k=n}^\infty E_k}(\omega) = \inf_{k \ge n} \mathbf{1}_{E_k}(\omega)
> $$

> [!prf] 
> $\text{(i)}$ Xét dãy tăng:
> 
> Vì $A_n \subseteq A_{n+1}$, ta có $\mathbf{1}_{A_n}(\omega) \le \mathbf{1}_{A_{n+1}}(\omega)$ với mọi $n$. Dãy số thực $(\mathbf{1}_{A_n}(\omega))_{n \ge 1}$ không giảm và bị chặn trên bởi $1$, do đó giới hạn tồn tại và bằng $\sup_{n \ge 1} \mathbf{1}_{A_n}(\omega)$.
> 
> Nếu $\omega \in A = \bigcup_{n=1}^\infty A_n$, tồn tại chỉ số $N$ để $\omega \in A_N$. Vì dãy tăng nên $\omega \in A_n$ với mọi $n \ge N$, dẫn đến $\mathbf{1}_{A_n}(\omega) = 1$ với mọi $n \ge N$. Suy ra:
> $$
> \lim_{n \to \infty} \mathbf{1}_{A_n}(\omega) = 1 = \mathbf{1}_A(\omega)
> $$
> 
> Nếu $\omega \notin A$, thì $\omega \notin A_n$ với mọi $n \ge 1$, suy ra $\mathbf{1}_{A_n}(\omega) = 0$ với mọi $n$. Giới hạn bằng $0 = \mathbf{1}_A(\omega)$.
> 
> $\text{(ii)}$ Xét dãy giảm:
> 
> Vì $A_{n+1} \subseteq A_n$, dãy số thực $(\mathbf{1}_{A_n}(\omega))_{n \ge 1}$ không tăng và bị chặn dưới bởi $0$, do đó giới hạn tồn tại và bằng $\inf_{n \ge 1} \mathbf{1}_{A_n}(\omega)$.
> 
> Nếu $\omega \in A = \bigcap_{n=1}^\infty A_n$, thì $\omega \in A_n$ với mọi $n \ge 1$, suy ra $\mathbf{1}_{A_n}(\omega) = 1$ với mọi $n$. Do đó:
> $$
> \lim_{n \to \infty} \mathbf{1}_{A_n}(\omega) = 1 = \mathbf{1}_A(\omega)
> $$
> 
> Nếu $\omega \notin A$, tồn tại $N$ để $\omega \notin A_N$. Vì dãy giảm nên $\omega \notin A_n$ với mọi $n \ge N$, suy ra $\mathbf{1}_{A_n}(\omega) = 0$ với mọi $n \ge N$. Do đó:
> $$
> \lim_{n \to \infty} \mathbf{1}_{A_n}(\omega) = 0 = \mathbf{1}_A(\omega)
> $$
> 
> $\text{(iii)}$ Xét họ tập bất kỳ:
> 
> Đặt $B_m = \bigcup_{k=n}^m E_k$. Dãy $(B_m)_{m \ge n}$ là dãy tăng và $\bigcup_{m=n}^\infty B_m = \bigcup_{k=n}^\infty E_k$. Áp dụng tính chất ở phần các phép toán cơ bản và $\text{(i)}$:
> $$
> \mathbf{1}_{\bigcup_{k=n}^\infty E_k} = \lim_{m \to \infty} \mathbf{1}_{B_m} = \lim_{m \to \infty} \max_{n \le k \le m} \mathbf{1}_{E_k} = \sup_{k \ge n} \mathbf{1}_{E_k}
> $$
> 
> Tương tự cho phép giao, xét $C_m = \bigcap_{k=n}^m E_k \downarrow \bigcap_{k=n}^\infty E_k$, áp dụng $\text{(ii)}$:
> $$
> \mathbf{1}_{\bigcap_{k=n}^\infty E_k} = \lim_{m \to \infty} \mathbf{1}_{C_m} = \lim_{m \to \infty} \min_{n \le k \le m} \mathbf{1}_{E_k} = \inf_{k \ge n} \mathbf{1}_{E_k}
> $$

> [!prp] (Hàm chỉ thị của limsup, liminf và điều kiện tồn tại giới hạn)
> Cho $(A_n)_{n \ge 1}$ là một dãy các tập con tùy ý của $\Omega$.
> 
> (i) Biểu diễn của giới hạn trên và giới hạn dưới:
> $$
> \mathbf{1}_{\limsup_{n \to \infty} A_n}(\omega) = \limsup_{n \to \infty} \mathbf{1}_{A_n}(\omega)
> $$
> $$
> \mathbf{1}_{\liminf_{n \to \infty} A_n}(\omega) = \liminf_{n \to \infty} \mathbf{1}_{A_n}(\omega)
> $$
> 
> (ii) Tiêu chuẩn tồn tại giới hạn:
> Dãy tập hợp $A_n$ hội tụ về tập $A$ (tức là $\lim_{n \to \infty} \mathbf{1}_{A_n}(\omega) = \mathbf{1}_A(\omega), \, \forall \omega \in \Omega$) khi và chỉ khi:
> $$
> \limsup_{n \to \infty} A_n = \liminf_{n \to \infty} A_n = A
> $$

> [!prf] 
> $\text{(i)}$ Xét biểu diễn giới hạn trên và giới hạn dưới:
> 
> Theo định nghĩa tập hợp, $\limsup_{n \to \infty} A_n = \bigcap_{n=1}^\infty \bigcup_{k=n}^\infty A_k$.
> 
> Đặt $U_n = \bigcup_{k=n}^\infty A_k$. Khi đó $U_{n+1} \subseteq U_n$, tức $U_n \downarrow \limsup_{n \to \infty} A_n$. Áp dụng tính chất giới hạn giảm:
> $$
> \mathbf{1}_{\limsup_{n \to \infty} A_n} = \inf_{n \ge 1} \mathbf{1}_{U_n}
> $$
> 
> Mặt khác, theo tính chất supremum của họ tập bất kỳ, ta có $\mathbf{1}_{U_n} = \sup_{k \ge n} \mathbf{1}_{A_k}$. Thay vào hệ thức trên:
> $$
> \mathbf{1}_{\limsup_{n \to \infty} A_n} = \inf_{n \ge 1} \sup_{k \ge n} \mathbf{1}_{A_k} = \limsup_{n \to \infty} \mathbf{1}_{A_n}
> $$
> 
> Hoàn toàn tương tự, xét $V_n = \bigcap_{k=n}^\infty A_k$. Khi đó $V_n \uparrow \liminf_{n \to \infty} A_n$. Áp dụng tính chất giới hạn tăng và tính chất infimum:
> $$
> \mathbf{1}_{\liminf_{n \to \infty} A_n} = \sup_{n \ge 1} \mathbf{1}_{V_n} = \sup_{n \ge 1} \inf_{k \ge n} \mathbf{1}_{A_k} = \liminf_{n \to \infty} \mathbf{1}_{A_n}
> $$
> 
> $\text{(ii)}$ Xét tiêu chuẩn tồn tại giới hạn:
> 
> Với mỗi $\omega \in \Omega$, dãy $(\mathbf{1}_{A_n}(\omega))_{n \ge 1}$ là dãy số thực bị chặn trong đoạn $[0, 1]$. Theo tiêu chuẩn hội tụ cơ bản, dãy số có giới hạn khi và chỉ khi giới hạn trên bằng giới hạn dưới:
> $$
> \lim_{n \to \infty} \mathbf{1}_{A_n}(\omega) = c \iff \limsup_{n \to \infty} \mathbf{1}_{A_n}(\omega) = \liminf_{n \to \infty} \mathbf{1}_{A_n}(\omega) = c
> $$
> 
> Kết hợp với kết quả đã chứng minh ở $\text{(i)}$:
> $$
> \lim_{n \to \infty} \mathbf{1}_{A_n}(\omega) = \mathbf{1}_A(\omega) \iff \mathbf{1}_{\limsup_{n \to \infty} A_n}(\omega) = \mathbf{1}_{\liminf_{n \to \infty} A_n}(\omega) = \mathbf{1}_A(\omega)
> $$
> 
> Vì đẳng thức của hai hàm chỉ thị đúng với mọi $\omega \in \Omega$, điều này tương đương với:
> $$
> \limsup_{n \to \infty} A_n = \liminf_{n \to \infty} A_n = A
> $$

> [!thm] (Tính liên tục của độ đo xác suất dưới sự hội tụ của dãy biến cố)
> Cho $(\Omega, \mathcal{A}, \mathbb{P})$ là một không gian xác suất và $(A_n)_{n \ge 1}$ là dãy các biến cố trong $\mathcal{A}$ hội tụ về biến cố $A$ (tức là $A_n \to A$). Khi đó:
> 
> (i) $A \in \mathcal{A}$
> 
> (ii) Giới hạn của dãy xác suất tồn tại và bằng xác suất của tập giới hạn:
> $$
> \lim_{n \to \infty} \mathbb{P}(A_n) = \mathbb{P}(A)
> $$

> [!prf] Chứng minh
> $\text{(i)}$ Chứng minh $A \in \mathcal{A}$:
> 
> Nhắc lại định nghĩa tập hợp của giới hạn trên và giới hạn dưới:
> $$
> \limsup_{n \to \infty} A_n = \bigcap_{n=1}^\infty \bigcup_{m \ge n} A_m
> $$
> $$
> \liminf_{n \to \infty} A_n = \bigcup_{n=1}^\infty \bigcap_{m \ge n} A_m
> $$
> 
> Vì $\mathcal{A}$ là một $\sigma$-đại số, $\mathcal{A}$ đóng kín dưới các phép toán lấy hợp đếm được và lấy giao đếm được. Do $A_n \in \mathcal{A}$ với mọi $n \ge 1$, ta suy ra:
> $$
> \limsup_{n \to \infty} A_n \in \mathcal{A} \quad \text{và} \quad \liminf_{n \to \infty} A_n \in \mathcal{A}
> $$
> 
> Theo giả thiết, dãy $A_n$ hội tụ về $A$, nghĩa là dãy hàm chỉ thị hội tụ từng điểm $\lim_{n \to \infty} \mathbf{1}_{A_n}(\omega) = \mathbf{1}_A(\omega)$ với mọi $\omega \in \Omega$. Điều này tương đương với đẳng thức tập hợp:
> $$
> A = \limsup_{n \to \infty} A_n = \liminf_{n \to \infty} A_n
> $$
> 
> Do đó, $A \in \mathcal{A}$.
> 
> $\text{(ii)}$ Chứng minh $\lim_{n \to \infty} \mathbb{P}(A_n) = \mathbb{P}(A)$:
> 
> Với mỗi $n \ge 1$, ta xây dựng hai dãy tập hợp kẹp:
> $$
> B_n = \bigcap_{m \ge n} A_m \qquad \text{và} \qquad C_n = \bigcup_{m \ge n} A_m
> $$
> 
> Dãy $(B_n)_{n \ge 1}$ là dãy tăng và hội tụ dần về $\liminf_{n \to \infty} A_n = A$ ($B_n \uparrow A$). Áp dụng tính chất liên tục của độ đo xác suất đối với dãy tăng:
> $$
> \lim_{n \to \infty} \mathbb{P}(B_n) = \mathbb{P}(A)
> $$
> 
> Tương tự, dãy $(C_n)_{n \ge 1}$ là dãy giảm và hội tụ dần về $\limsup_{n \to \infty} A_n = A$ ($C_n \downarrow A$). Áp dụng tính chất liên tục của độ đo xác suất đối với dãy giảm:
> $$
> \lim_{n \to \infty} \mathbb{P}(C_n) = \mathbb{P}(A)
> $$
> 
> Mặt khác, theo định nghĩa của $B_n$ và $C_n$, với mọi $n \ge 1$ ta luôn có quan hệ bao hàm:
> $$
> B_n \subseteq A_n \subseteq C_n
> $$
> 
> Do tính đơn điệu của độ đo xác suất $\mathbb{P}$, ta có bất đẳng thức kẹp:
> $$
> \mathbb{P}(B_n) \le \mathbb{P}(A_n) \le \mathbb{P}(C_n)
> $$
> 
> Cho $n \to \infty$ và áp dụng nguyên lý kẹp cho dãy số thực, ta kết luận:
> $$
> \lim_{n \to \infty} \mathbb{P}(A_n) = \mathbb{P}(A)
> $$
