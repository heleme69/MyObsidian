
> [!def] ($\sigma$-đại số)
> Cho không gian $\Omega$ và ký hiệu $2^{\Omega}$ là tập tất cả tập hợp con của $\Omega$. Gọi $\mathfrak{M}$ là họ các tập hợp con chứa trong $\Omega$. $\mathfrak{M}$ được gọi là một $\sigma$-đại số nếu: 
> 1. $\Omega \in \mathfrak{M}$.
> 2. $A \in \mathfrak{M} \implies A^{c} = \Omega \setminus A \in \mathfrak{M}$.
> 3. $A_{n} \in \mathfrak{M}$ với $n = 1,2,\dots \implies \bigcup_{n=1}^{\infty} A_{n} \in \mathfrak{M}$.
> 
> Hệ quả:
> 4. $\emptyset \in \mathfrak{M}$.
> 5. $\bigcap_{n=1}^{\infty} A_{n} \in \mathfrak{M}$.
> 
> Trong xác suất, nếu $A \in \mathfrak{M}$ thì được gọi là một biến cố và $A$ được gọi là $\mathfrak{M}$-đo được hoặc gọi $A$ đo được nếu $\mathfrak{M}$ không đổi.

> [!def] (Độ đo)
> Cho $(\Omega, \mathfrak{M})$ là một không gian đo được (với $\mathfrak{M}$ là một $\sigma$-đại số trên $\Omega$). Một hàm tập hợp $\mu: \mathfrak{M} \to [0, \infty]$ được gọi là một độ đo nếu nó thỏa mãn hai tiên đề:
> 6. $\mu(\emptyset) = 0$.
> 7. Tính $\sigma$-cộng tính: Với mọi dãy $\{A_n\}_{n=1}^\infty \subseteq \mathfrak{M}$ gồm các tập hợp đôi một rời nhau, ta có:
>    $$ \mu\left( \bigcup_{n=1}^\infty A_n \right) = \sum_{n=1}^\infty \mu(A_n) $$

> [!def] (Độ đo xác suất)
> Nếu độ đo $\mu$ thỏa mãn thêm điều kiện chuẩn hóa $\mu(\Omega) = 1$, thì $\mu$ được gọi là một độ đo xác suất (thường ký hiệu là $\mathbb{P}$). Khi đó, bộ ba $(\Omega, \mathfrak{M}, \mathbb{P})$ được gọi là một không gian xác suất, các phần tử trong $\mathfrak{M}$ được gọi là các biến cố.

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
> 16. $\pi$-hệ (Hệ $\pi$): Là một họ $\mathcal{P} \subseteq 2^\Omega$ đóng với phép giao hữu hạn.
> 17. $\lambda$-hệ (Hệ $\lambda$ / Hệ Dynkin): Là một họ $\mathcal{L} \subseteq 2^\Omega$ thỏa mãn 3 tiên đề:
>    1. Chứa không gian nền: $\Omega \in \mathcal{L}$.
>    2. Đóng với phép hiệu chuẩn: Với mọi $A, B \in \mathcal{L}$ và $B \subseteq A \implies A \setminus B \in \mathcal{L}$.
>    3. Đóng với giới hạn trên: Với mọi dãy $\{A_n\}_{n=1}^\infty \subseteq \mathcal{L}$ thỏa mãn $A_n \uparrow A \implies A \in \mathcal{L}$.

> [!def] (Lớp đơn điệu - Monotone Class)
> Một họ $\mathcal{M} \subseteq 2^\Omega$ được gọi là một lớp đơn điệu nếu nó đóng với cả giới hạn trên và giới hạn dưới. Cụ thể:
> 18. Đóng với giới hạn trên: Dãy tăng $A_n \uparrow A \implies A \in \mathcal{M}$.
> 19. Đóng với giới hạn dưới: Dãy giảm $F_n \downarrow F \implies F \in \mathcal{M}$.

> [!thm] (Định lý $\pi$-$\lambda$ của Dynkin)
> Nếu $\mathcal{P}$ là một $\pi$-hệ, $\mathcal{L}$ là một $\lambda$-hệ, và $\mathcal{P} \subseteq \mathcal{L}$, thì $\sigma$-đại số sinh bởi $\mathcal{P}$ hoàn toàn bị bao hàm trong $\mathcal{L}$:
> $$ \sigma(\mathcal{P}) \subseteq \mathcal{L} $$

> [!prf] 
> Gọi $\mathcal{L}_0$ là $\lambda$-hệ nhỏ nhất chứa $\mathcal{P}$. Vì giao của một họ các $\lambda$-hệ bất kỳ luôn là một $\lambda$-hệ, $\mathcal{L}_0$ tồn tại và hiển nhiên $\mathcal{P} \subseteq \mathcal{L}_0 \subseteq \mathcal{L}$.
> Ta sẽ chứng minh $\mathcal{L}_0$ là một $\sigma$-đại số. Khi đó, do $\sigma(\mathcal{P})$ là $\sigma$-đại số nhỏ nhất chứa $\mathcal{P}$, ta có ngay $\sigma(\mathcal{P}) \subseteq \mathcal{L}_0 \subseteq \mathcal{L}$.
> Vì $\mathcal{L}_0$ là một $\lambda$-hệ, nó chứa $\Omega$, đóng với phép hiệu chuẩn (do đó đóng với phép lấy phần bù vì $A^c = \Omega \setminus A$), và đóng với hợp của dãy tăng. Một lớp tập hợp thỏa mãn các điều kiện này sẽ là một $\sigma$-đại số nếu nó đóng với phép giao hữu hạn (tức là một $\pi$-hệ).
> Xét tập kiểm tra với một tập $A \subseteq \Omega$ tùy ý:
> $$ \mathcal{D}_A = \{ B \in \mathcal{L}_0 : A \cap B \in \mathcal{L}_0 \} $$
> Nhận xét quan trọng: Nếu $A \in \mathcal{L}_0$, thì $\mathcal{D}_A$ là một $\lambda$-hệ. Thật vậy:
> 20. $\Omega \in \mathcal{D}_A$ vì $A \cap \Omega = A \in \mathcal{L}_0$.
> 21. Đóng với phép hiệu chuẩn: Cho $B_1, B_2 \in \mathcal{D}_A$ với $B_1 \subseteq B_2$. Ta có $A \cap (B_2 \setminus B_1) = (A \cap B_2) \setminus (A \cap B_1)$. Vì $A \cap B_1 \subseteq A \cap B_2$ và cả hai cùng thuộc $\mathcal{L}_0$, phép hiệu chuẩn của chúng nằm trong $\mathcal{L}_0$. Do đó $B_2 \setminus B_1 \in \mathcal{D}_A$.
> 22. Đóng với dãy tăng: Cho $B_n \in \mathcal{D}_A$ với $B_n \uparrow B$. Ta có $A \cap B_n \uparrow A \cap B$. Vì $A \cap B_n \in \mathcal{L}_0$, hợp giới hạn của dãy này cũng thuộc $\mathcal{L}_0$. Do đó $B \in \mathcal{D}_A$.
> 
> Ta sử dụng $\mathcal{D}_A$ để chứng minh $\mathcal{L}_0$ là $\pi$-hệ qua hai bước:
> Bước 1: Cố định $C \in \mathcal{P}$. Lấy $C' \in \mathcal{P}$ bất kỳ, vì $\mathcal{P}$ là $\pi$-hệ nên $C \cap C' \in \mathcal{P} \subseteq \mathcal{L}_0$. Vậy $C' \in \mathcal{D}_C$, suy ra $\mathcal{P} \subseteq \mathcal{D}_C$. Vì $\mathcal{D}_C$ là $\lambda$-hệ chứa $\mathcal{P}$, theo định nghĩa về tính tối tiểu của $\mathcal{L}_0$, ta có $\mathcal{L}_0 \subseteq \mathcal{D}_C$. Điều này dẫn đến kết quả: Với mọi $B \in \mathcal{L}_0$ và mọi $C \in \mathcal{P}$, $B \cap C \in \mathcal{L}_0$.
> Bước 2: Cố định $B \in \mathcal{L}_0$. Dựa vào kết quả ở Bước 1, với mọi $C \in \mathcal{P}$, ta có $B \cap C \in \mathcal{L}_0$. Do đó $C \in \mathcal{D}_B$, suy ra $\mathcal{P} \subseteq \mathcal{D}_B$. Vì $\mathcal{D}_B$ là $\lambda$-hệ chứa $\mathcal{P}$, lại do tính tối tiểu, $\mathcal{L}_0 \subseteq \mathcal{D}_B$. Điều này dẫn đến kết quả: Với mọi $A, B \in \mathcal{L}_0$, $A \cap B \in \mathcal{L}_0$.
> Tính chất ở Bước 2 chứng tỏ $\mathcal{L}_0$ đóng với phép giao hữu hạn. Vậy $\mathcal{L}_0$ là một $\sigma$-đại số, hoàn thành bài chứng minh.

> [!thm] (Sự tương đương của $\lambda$-hệ nhỏ nhất)
> Cho $\mathcal{C}$ là một $\pi$-hệ chứa $\Omega$. Gọi $\mathcal{B}$ là $\lambda$-hệ nhỏ nhất chứa $\mathcal{C}$ (tức là $\mathcal{B}$ là họ tập hợp nhỏ nhất vừa đóng với giới hạn trên, vừa đóng với phép hiệu chuẩn và chứa $\mathcal{C}$). Khi đó: $\mathcal{B} = \sigma(\mathcal{C})$.

> [!prf]
> Chiều 1: Chứng minh $\sigma(\mathcal{C}) \subseteq \mathcal{B}$.
> Theo giả thiết, $\mathcal{C}$ là một $\pi$-hệ. $\mathcal{B}$ là một $\lambda$-hệ chứa $\mathcal{C}$.
> Áp dụng trực tiếp Định lý $\pi$-$\lambda$ của Dynkin: Bất kỳ $\lambda$-hệ nào chứa $\pi$-hệ $\mathcal{C}$ đều phải chứa $\sigma$-đại số sinh bởi $\mathcal{C}$. Suy ra $\sigma(\mathcal{C}) \subseteq \mathcal{B}$.
> 
> Chiều 2: Chứng minh $\mathcal{B} \subseteq \sigma(\mathcal{C})$.
> Bản thân $\sigma(\mathcal{C})$ là một $\sigma$-đại số, do đó nó chắc chắn chứa $\Omega$, đóng với phép hiệu chuẩn ($A \setminus B = A \cap B^c$), và đóng với hợp đếm được (bao gồm cả giới hạn của dãy tăng). 
> Suy ra $\sigma(\mathcal{C})$ đáp ứng đầy đủ tiên đề của một $\lambda$-hệ.
> Mặt khác, $\sigma(\mathcal{C})$ hiển nhiên chứa $\mathcal{C}$. 
> Vì $\mathcal{B}$ là $\lambda$-hệ nhỏ nhất chứa $\mathcal{C}$, theo định nghĩa tính tối tiểu, $\mathcal{B}$ phải nằm gọn trong bất kỳ $\lambda$-hệ nào chứa $\mathcal{C}$. Suy ra $\mathcal{B} \subseteq \sigma(\mathcal{C})$.
> 
> Kết hợp hai chiều bao hàm, ta có đẳng thức tuyệt đối: $\mathcal{B} = \sigma(\mathcal{C})$.

> [!thm] (Định lý Halmos đối với lớp đơn điệu)
> Nếu $\mathcal{M}$ là một lớp đơn điệu chứa đại số $\mathcal{R}$, thì $\sigma(\mathcal{R}) \subseteq \mathcal{M}$.

> [!prf] 
> Gọi $\mathbf{m}(\mathcal{R})$ là lớp đơn điệu nhỏ nhất chứa đại số $\mathcal{R}$. Hiển nhiên $\mathbf{m}(\mathcal{R}) \subseteq \mathcal{M}$.
> Ta sẽ chứng minh $\mathbf{m}(\mathcal{R})$ là một $\lambda$-hệ:
> 23. Vì $\mathcal{R}$ là đại số nên $\Omega \in \mathcal{R} \subseteq \mathbf{m}(\mathcal{R})$.
> 24. Bằng định nghĩa lớp đơn điệu, $\mathbf{m}(\mathcal{R})$ đóng với giới hạn dãy tăng.
> 25. Để kiểm tra tính đóng với phép hiệu chuẩn, với mỗi $A \in \mathbf{m}(\mathcal{R})$, đặt họ tập kiểm tra:
>    $$ \mathcal{D}_A = \{ B \in \mathbf{m}(\mathcal{R}) : A \setminus B \in \mathbf{m}(\mathcal{R}), B \setminus A \in \mathbf{m}(\mathcal{R}), A \cup B \in \mathbf{m}(\mathcal{R}) \} $$
>    Bằng tính chất giới hạn tập hợp, người ta dễ dàng chứng minh được $\mathcal{D}_A$ cũng là một lớp đơn điệu. 
>    Vì $\mathcal{R}$ là đại số (đóng với mọi phép toán bù, giao, hợp hữu hạn), $\mathcal{R} \subseteq \mathcal{D}_A$ với mọi $A \in \mathcal{R}$. Do tính tối tiểu, $\mathcal{D}_A = \mathbf{m}(\mathcal{R})$ với mọi $A \in \mathcal{R}$. 
>    Lặp lại lập luận trên cho $A \in \mathbf{m}(\mathcal{R})$, ta suy ra $\mathcal{D}_A = \mathbf{m}(\mathcal{R})$ với mọi $A \in \mathbf{m}(\mathcal{R})$. Điều này đồng nghĩa $\mathbf{m}(\mathcal{R})$ đóng với phép hiệu, trong đó có phép hiệu chuẩn.
> 
> Vậy $\mathbf{m}(\mathcal{R})$ là một $\lambda$-hệ. 
> Mặt khác, vì $\mathcal{R}$ là đại số nên nó đóng với giao hữu hạn, suy ra $\mathcal{R}$ là một $\pi$-hệ.
> Áp dụng Định lý Dynkin: $\pi$-hệ $\mathcal{R}$ nằm trong $\lambda$-hệ $\mathbf{m}(\mathcal{R})$ dẫn đến $\sigma(\mathcal{R}) \subseteq \mathbf{m}(\mathcal{R})$.
> Kết hợp với tính chất $\mathbf{m}(\mathcal{R}) \subseteq \mathcal{M}$, ta kết luận được $\sigma(\mathcal{R}) \subseteq \mathcal{M}$.