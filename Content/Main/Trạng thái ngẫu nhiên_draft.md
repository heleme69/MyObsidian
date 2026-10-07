
> [!rem] (ký hiệu)
> Không gian trạng thái ký hiệu $E$ (một số tài liệu dùng $I$ hoặc $S$); các trạng thái ký hiệu bằng các chỉ số $i, j, k \in E$.
> 
> Ma trận chuyển $P = (p_{ij})_{i, j \in E}$, với
> 
> $$p_{ij} = \mathbb{P}(X_{n+1} = j \mid X_n = i), \quad p_{ij}^{(n)} = \mathbb{P}(X_n = j \mid X_0 = i).$$
> 
> $\mathbb{P}_i(\,\cdot\,) := \mathbb{P}(\,\cdot \mid X_0 = i)$ và $\mathbb{E}_i[\,\cdot\,] := \mathbb{E}[\,\cdot \mid X_0 = i]$ là xác suất và kỳ vọng khi xích *khởi đầu* tại $i$.

Xét một xích Markov $(X_n)_{n \ge 0}$ được định nghĩa trên không gian trạng thái $E$ với ma trận chuyển $P$.

> [!def] (Lớp giao tiếp)
> Cho hai trạng thái $i$ và $j$. Ta nói rằng $i$ dẫn đến $j$ hay $j$ có thể tiếp cận được từ $i$, ký hiệu $i \to j$, nếu:
> 
> $$\exists n \in \mathbb{N}, \quad p_{ij}^{(n)} = \mathbb{P}(X_n = j \mid X_0 = i) > 0.$$
> 
> Quan hệ này có nghĩa là bắt đầu từ $i$, sau một số hữu hạn bước ta có thể đi đến $j$.
> * Ta nói rằng $i$ **giao tiếp** (*communicate*) với $j$, ký hiệu $i \leftrightarrow j$, nếu $i \to j$ và $j \to i$.

> [!prp] Mệnh đề 1
> Quan hệ giao tiếp $\leftrightarrow$ là một quan hệ tương đương.

> [!prf] Chứng minh
> Để chứng minh $\leftrightarrow$ là một quan hệ tương đương trên không gian trạng thái $E$, ta cần chứng minh ba tính chất: phản xạ, đối xứng và bắc cầu.
> 
> 1. **Tính phản xạ ($i \leftrightarrow i$ với mọi $i \in E$):**
>    Với $n = 0$, theo định nghĩa xác suất có điều kiện:
>    $$p_{ii}^{(0)} = \mathbb{P}(X_0 = i \mid X_0 = i) = 1 > 0.$$
>    Do đó, $i \to i$ với mọi $i \in E$. Suy ra $i \leftrightarrow i$.
> 
> 2. **Tính đối xứng ($i \leftrightarrow j \implies j \leftrightarrow i$):**
>    Giả sử $i \leftrightarrow j$. Theo định nghĩa của quan hệ giao tiếp, điều này có nghĩa là $i \to j$ và $j \to i$.  
>    Từ đó trực tiếp suy ra $j \to i$ và $i \to j$, tức là $j \leftrightarrow i$.
> 
> 3. **Tính bắc cầu ($i \leftrightarrow j$ và $j \leftrightarrow k \implies i \leftrightarrow k$):**
>    Giả sử $i \leftrightarrow j$ và $j \leftrightarrow k$. Ta cần chứng minh $i \to k$ và $k \to i$.
>  Vì $i \to j$ và $j \to k$, tồn tại $m, n \in \mathbb{N}$ sao cho $p_{ij}^{(m)} > 0$ và $p_{jk}^{(n)} > 0$.
>      Áp dụng phương trình Chapman-Kolmogorov:
>      $$p_{ik}^{(m+n)} = \sum_{r \in E} p_{ir}^{(m)} p_{rk}^{(n)} \ge p_{ij}^{(m)} p_{jk}^{(n)} > 0.$$
>      Do đó tồn tại bước $m + n \in \mathbb{N}$ sao cho $p_{ik}^{(m+n)} > 0$, tức là $i \to k$.
>  Tương tự, vì $k \to j$ và $j \to i$, tồn tại các số nguyên $u, v \in \mathbb{N}$ sao cho $p_{kj}^{(u)} > 0$ và $p_{ji}^{(v)} > 0$.
>      Theo phương trình Chapman-Kolmogorov:
>      $$p_{ki}^{(u+v)} = \sum_{r \in E} p_{kr}^{(u)} p_{ri}^{(v)} \ge p_{kj}^{(u)} p_{ji}^{(v)} > 0.$$
>      Suy ra $k \to i$.
>    
>    Kết hợp $i \to k$ và $k \to i$, ta thu được $i \leftrightarrow k$.
> 
> Vậy $\leftrightarrow$ là một quan hệ tương đương trên $E$.