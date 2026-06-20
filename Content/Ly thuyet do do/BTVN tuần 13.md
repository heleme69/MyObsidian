> [!def] 
> Cho hai không gian độ đo $(X, \mathcal{F}, \mu)$ và $(Y, \mathcal{G}, \nu)$. Đặt $\mathcal{R}$ là họ các hợp hữu hạn của các hình chữ nhật đo được đôi một rời nhau: 
> $$\mathcal{R} = \left\{ \bigcup_{i=1}^{m} A_i \times B_i : A_i \in \mathcal{F},\, B_i \in \mathcal{G},\, \text{đôi một rời nhau} \right\}$$

> [!thm] (Mệnh đề 1) 
> $\mathcal{R}$ là một đại số trên $X \times Y$.

> [!prf]
> **Bổ đề:** Giao của hai hình chữ nhật đo được luôn là một hình chữ nhật đo được:
> $$(A_1 \times B_1) \cap (A_2 \times B_2) = (A_1 \cap A_2) \times (B_1 \cap B_2)$$
> Do $\mathcal{F}, \mathcal{G}$ đóng với phép giao hữu hạn nên $(A_1 \cap A_2) \in \mathcal{F}$ và $(B_1 \cap B_2) \in \mathcal{G}$.
> 
> **1. Chứa không gian mẫu ($X \times Y \in \mathcal{R}$):**
> Do $X \in \mathcal{F}$ và $Y \in \mathcal{G}$, ta có $X \times Y = \bigcup_{i=1}^{1} (X \times Y)$. Vậy $X \times Y \in \mathcal{R}$ (với $m=1$).
> 
> **2. Đóng với phép giao hữu hạn:**
> Giả sử $E_1 = \bigcup_{i=1}^m R_i \in \mathcal{R}$ và $E_2 = \bigcup_{j=1}^k R'_j \in \mathcal{R}$. Áp dụng tính phân phối:
> $$E_1 \cap E_2 = \left( \bigcup_{i=1}^m R_i \right) \cap \left( \bigcup_{j=1}^k R'_j \right) = \bigcup_{i=1}^m \bigcup_{j=1}^k (R_i \cap R'_j)$$
> Theo Bổ đề, mỗi mảnh $R_i \cap R'_j$ là một hình chữ nhật đo được. Do các họ ban đầu rời nhau, các giao điểm mới cũng đôi một rời nhau. Số lượng hcn là $m \times k$ (hữu hạn) $\implies E_1 \cap E_2 \in \mathcal{R}$.
> 
> **3. Đóng với phép lấy phần bù:**
> * **Với $m = 1$:** Xét $R = A \times B$. Phần bù rã thành hợp của 2 hình chữ nhật rời nhau:
>     $$R^c = (A^c \times Y) \cup (A \times B^c)$$
>     Kiểm tra tính rời nhau: $(A^c \times Y) \cap (A \times B^c) = (A^c \cap A) \times (Y \cap B^c) = \emptyset$. Do đó $R^c \in \mathcal{R}$.
> * **Với $m > 1$:** Xét $E = \bigcup_{i=1}^m R_i$. Áp dụng luật De Morgan:
>     $$E^c = \left( \bigcup_{i=1}^m R_i \right)^c = \bigcap_{i=1}^m R_i^c$$
>     Theo trường hợp $m=1$, mỗi $R_i^c \in \mathcal{R}$. Vì $\mathcal{R}$ đóng với phép giao hữu hạn (mục 2), suy ra $E^c \in \mathcal{R}$.
> 
> **4. Đóng với phép hợp hữu hạn:**
> Giả sử $E_1, E_2 \in \mathcal{R}$. Đồng hóa về dạng hợp rời nhau:
> $$E_1 \cup E_2 = E_1 \cup (E_2 \setminus E_1) = E_1 \cup (E_2 \cap E_1^c)$$
> * Do tính đóng với phần bù $\implies E_1^c \in \mathcal{R}$.
> * Do tính đóng với phép giao hữu hạn $\implies (E_2 \cap E_1^c) \in \mathcal{R}$ (là hợp hữu hạn của các hình chữ nhật rời nhau).
> * Do $E_1$ rời với $(E_2 \cap E_1^c)$, tập hợp tổng là một họ hữu hạn các hình chữ nhật đôi một rời nhau.
> 
> Suy ra $E_1 \cup E_2 \in \mathcal{R}$.
> 
> **Kết luận:** $\mathcal{R}$ thỏa mãn đầy đủ 3 tiên đề nên là đại số trên không gian $X \times Y$.