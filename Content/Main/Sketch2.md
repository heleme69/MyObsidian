# Ôn tập vấn đáp: Bổ đề Fatou và Các Định lý Hội tụ — Phân dạng theo điều kiện

> [!info] Mục đích tài liệu
> Tài liệu này không nhắc lại toàn bộ chứng minh chi tiết (đã có ở phần ghi chú chính), mà tổ chức lại các định lý hội tụ theo **trục điều kiện**: mỗi định lý là kết quả của việc thêm/bớt một giả thiết so với định lý gốc (MCT). Mục tiêu là khi giảng viên hỏi "nếu đổi điều kiện X thì sao", ta nhận ra ngay đang di chuyển theo trục nào, định lý nào còn đúng, định lý nào cần phản ví dụ, và derive lại được khung chứng minh tại chỗ.

---

## 0. Sơ đồ phụ thuộc giữa các định lý

```
                MCT (tăng, không âm)
                       │
         (bỏ tính đơn điệu, chỉ giữ không âm)
                       ▼
                  Bổ đề Fatou  ──────► MCT là hệ quả 2 chiều của Fatou
                       │
        (thêm chặn trên bởi hàm khả tích g)
                       ▼
                 Fatou ngược
                       │
        (kết hợp Fatou thuận + Fatou ngược,
         tức |f_n| ≤ g khả tích)
                       ▼
                    DCT  ──────► BCT là trường hợp riêng (g ≡ M, μ(D) < ∞)
                       │
        (thay hàm trội cố định g bằng dãy g_n hội tụ)
                       ▼
                Generalized DCT (Prob 9.22)
```

Mọi định lý trong sơ đồ trên đều quy về **Bổ đề Fatou** làm công cụ trung tâm; còn bản thân Fatou lại quy về **MCT** (qua dãy phụ $g_n = \inf_{k \ge n} f_k$). Vì vậy khi vấn đáp, nắm chắc chứng minh MCT và Fatou là đủ để derive lại toàn bộ cây phía dưới.

> [!obs] Hai công cụ nền tảng dùng xuyên suốt
> 1. **Tính đơn điệu của tích phân**: $f \le g$ a.e. $\implies \int_D f\,d\mu \le \int_D g\,d\mu$.
> 2. **Tính cộng tính hữu hạn**: $\int_D (f+g)\,d\mu = \int_D f\,d\mu + \int_D g\,d\mu$ khi cả hai vế có nghĩa (không vướng $\infty - \infty$).
>
> Hai tính chất này được dùng lặp lại ở mọi bước "giản ước đại lượng hữu hạn ở hai vế" trong các chứng minh bên dưới.

---

## I. Trục 1 — Tính đơn điệu của dãy hàm: tăng / giảm / không đơn điệu

### 1.1 Dãy tăng, không âm — MCT (định lý gốc)

> [!thm] (MCT)
> $(f_n)$ đo được, không âm, $f_n \uparrow f$ a.e. trên $D$. Khi đó $\int_D f_n\,d\mu \to \int_D f\,d\mu$.

> [!prf] Khung chứng minh (2 chiều)
> - **Chiều $\le$**: $f_n \le f \implies \int f_n \le \int f$, lấy giới hạn (dãy tăng bị chặn trên nên có giới hạn).
> - **Chiều $\ge$**: cố định hàm đơn giản $0 \le \varphi \le f$ và $\alpha \in (0,1)$; đặt $E_n = \{f_n \ge \alpha\varphi\}$. Chứng minh $E_n \uparrow D$ (dùng định nghĩa giới hạn điểm), rồi $\int_D f_n \ge \int_{E_n} f_n \ge \alpha \int_{E_n}\varphi \to \alpha\int_D \varphi$ (liên tục từ dưới của độ đo $\nu(A)=\int_A \varphi\,d\mu$). Cho $\alpha \to 1^-$ rồi lấy sup theo $\varphi$.

> [!obs] Điều cần chú ý
> MCT **không đòi hỏi** $\mu(D) < \infty$. Tính tăng đơn điệu của dãy đã đủ để kiểm soát giới hạn, bất kể không gian to hay nhỏ.

### 1.2 Dãy giảm, không âm — Hệ quả 4 (MCT giảm)

> [!thm] (MCT cho dãy giảm)
> $(f_n)$ đo được, không âm, $f_n \downarrow f$ a.e. **và tồn tại $k$ sao cho $\int_D f_k\,d\mu < \infty$**. Khi đó $\int_D f_n\,d\mu \to \int_D f\,d\mu$.

> [!prf] Khung chứng minh
> Đặt $h_n = f_1 - f_n \ge 0$ (giả sử $k=1$), khi đó $h_n \uparrow f_1 - f$. Áp MCT gốc cho $(h_n)$, rồi dùng tính tuyến tính tách $\int f_1$ ra hai vế và giản ước (cần $\int_D f_1\,d\mu < \infty$ để phép trừ hợp lệ, không vướng $\infty - \infty$).

> [!prob] Phản ví dụ khi thiếu điều kiện "có số hạng khả tích"
> $f_n = \chi_{[n,\infty)}$ trên $D=[0,\infty)$ với độ đo Lebesgue: $f_n \downarrow 0$ nhưng $\int_D f_n\,d\mu = \infty$ với mọi $n$ (không có số hạng nào khả tích), nên $\lim \int f_n = \infty \ne 0 = \int \lim f_n$.
>
> **Bài học**: đối với dãy giảm, điều kiện "có ít nhất một số hạng khả tích" là **bắt buộc**, khác hẳn dãy tăng (không cần gì thêm). Lý do sâu xa: dãy tăng tích lũy diện tích từ dưới lên (đơn điệu, không có rủi ro "trừ vô cực"), còn dãy giảm tích lũy diện tích từ trên xuống, nếu số hạng đầu đã là $\infty$ thì phép trừ $f_1 - f_n$ trong chứng minh trên mất nghĩa.

### 1.3 Dãy không đơn điệu, không âm — Bổ đề Fatou

> [!thm] (Hệ quả 3: Bổ đề Fatou)
> $(f_n)$ đo được, không âm trên $D$ (không cần hội tụ điểm, không cần đơn điệu). Khi đó:
> $$\int_D \liminf_{n\to\infty} f_n\,d\mu \le \liminf_{n\to\infty} \int_D f_n\,d\mu$$

> [!prf] Khung chứng minh
> Đặt $g_n = \inf_{k\ge n} f_k \ge 0$. Dãy $(g_n)$ **tăng** ($n$ tăng thì infimum lấy trên tập chỉ số nhỏ hơn nên không giảm) và $g_n \uparrow \liminf f_n$ theo định nghĩa. Vì $g_n \le f_n$, đơn điệu tích phân cho $\int g_n \le \int f_n$. Áp MCT cho $(g_n)$ rồi lấy liminf hai vế.

> [!obs] Vì sao Fatou tổng quát hơn MCT (tăng)?
> Fatou chỉ dùng được **chiều $\le$** nhờ $g_n \le f_n$ — không cần $f_n$ đơn điệu. Khi $(f_n)$ thực sự tăng và hội tụ điểm, chiều $\le$ ngược lại ($\int f_n \le \int f$, do $f_n \le f$) tự động đúng, kẹp hai chiều cho ra đẳng thức — đây chính là cách MCT được suy ngược lại từ Fatou (xem mục dưới).

> [!cor] (MCT là hệ quả 2 chiều của Fatou)
> Nếu $f_n \uparrow f$ a.e.: chiều $\le$ từ đơn điệu tích phân ($f_n \le f$), chiều $\ge$ từ Fatou áp dụng trực tiếp (lưu ý $\liminf f_n = \lim f_n = f$ và $\liminf \int f_n = \lim \int f_n$ vì dãy số $\int f_n$ tăng). Kẹp hai chiều suy ra đẳng thức.

### 1.4 Dãy không đơn điệu nhưng bị chặn trên bởi chính hàm giới hạn — Định lý 8.14 (Prob 9.25)

> [!thm] (Định lý 8.14)
> $(f_n)$ đo được không âm, $f_n \to f$ a.e. và $f_n \le f$ a.e. với mọi $n$ (không cần $f_n$ tăng!). Khi đó $\int_D f_n\,d\mu \to \int_D f\,d\mu$.

> [!prf] Khung chứng minh
> Chiều $\le$ (tức $\int f \le \liminf \int f_n$): Fatou trực tiếp. Chiều $\ge$ (tức $\limsup \int f_n \le \int f$): đơn điệu tích phân từ $f_n \le f$. Kẹp $\liminf \le \limsup$ cho đẳng thức.

> [!obs] So sánh với mục 1.3 và 1.1
> Đây là điểm trung gian thú vị: **không cần tính đơn điệu** của $(f_n)$, chỉ cần $f_n$ bị chặn trên bởi $f$ tại mọi bước — yếu hơn "tăng" nhưng đủ để có đẳng thức, vì chiều khó (Fatou) luôn miễn phí, còn chiều dễ chỉ cần $f_n \le f$ chứ không cần $f_{n} \le f_{n+1}$.

---

## II. Trục 2 — Độ đo của không gian: hữu hạn hay vô hạn?

### 2.1 MCT (tăng) — không cần $\mu(D) < \infty$

Đã nêu ở mục 1.1: chứng minh MCT không hề dùng đến $\mu(D)$ ở bất kỳ bước nào. Dãy tăng "an toàn" với không gian vô hạn.

### 2.2 MCT giảm — thất bại khi không gian vô hạn **và** thiếu số hạng khả tích

Phản ví dụ $\chi_{[n,\infty)}$ ở mục 1.2 chính là trường hợp $\mu(D) = \infty$. Cần phân biệt rõ: cái làm hỏng định lý không phải bản thân $\mu(D)=\infty$, mà là **hệ quả của nó** — khi không gian vô hạn, một dãy giảm rất dễ không có số hạng nào khả tích (khối lượng "trượt ra vô cực theo phương ngang" thay vì giảm về 0 theo phương dọc).

### 2.3 BCT — cần $\mu(D) < \infty$ một cách bản chất

> [!thm] (Định lý Hội tụ Bị chặn — BCT)
> $D$ với $\mu(D) < \infty$, $(f_n)$ đo được, $f_n \to f$ a.e., $|f_n| \le M$ a.e. (hằng số $M$). Khi đó $\int_D f_n\,d\mu \to \int_D f\,d\mu$.

> [!prf] Khung chứng minh
> Hằng số $M$ chỉ khả tích trên $D$ vì $\int_D M\,d\mu = M\mu(D) < \infty$ (đây là chỗ **duy nhất** dùng $\mu(D)<\infty$). Áp Fatou cho $g_n = f_n + M \ge 0$ được chiều $\int f \le \liminf \int f_n$; áp Fatou cho $h_n = M - f_n \ge 0$ được chiều $\limsup \int f_n \le \int f$. Kẹp lại.

> [!prob] Phản ví dụ Prob 8.10: bị chặn đều + hội tụ đều nhưng $\mu(D)=\infty$
> $f_n(x) = \frac{1}{n}\chi_{[1,n]}(x)$ trên $D=[1,\infty)$. Dãy này bị chặn đều bởi $M=1$, hơn nữa hội tụ **đều** về $f=0$ (không chỉ điểm), nhưng:
> $$\int_D f_n\,d\mu = 1 - \frac{1}{n} \to 1 \ne 0 = \int_D f\,d\mu$$
> **Bài học quan trọng**: ngay cả hội tụ đều cũng không cứu được nếu $\mu(D) = \infty$ — vì hằng chặn $M$ không khả tích trên không gian vô hạn, nên hàm trội "không đủ kiểm soát" lượng diện tích trải dài ra vô tận.

### 2.4 DCT — không cần $\mu(D) < \infty$

> [!obs] Vì sao DCT thoát được điều kiện $\mu(D)<\infty$?
> Trong DCT, hàm trội $g$ tự thân **đã được giả thiết khả tích** ($\int|g|\,d\mu < \infty$), bất kể $\mu(D)$ lớn hay nhỏ. Hàm trội $g$ đóng vai trò "đo lường kích thước hữu hiệu" của bài toán thay cho $\mu(D)$. Đây là lý do DCT là bản tổng quát thực sự của BCT chứ không chỉ là đổi tên: nó tách rời điều kiện về không gian ($\mu(D)<\infty$) khỏi điều kiện về hàm trội (khả tích), và chỉ giữ lại điều kiện thứ hai.
>
> Kiểm chứng nhanh: nếu áp dụng đúng cho ví dụ Prob 8.10 ở trên, hàm trội duy nhất khả dĩ "đều" cho mọi $n$ là $\sup_n f_n(x)$; nhưng $\sup_n \frac{1}{n}\chi_{[1,n]}(x)$ không khả tích trên $[1,\infty)$ (nó tiến dần về $0$ quá chậm để có tích phân hữu hạn) — đúng như dự đoán, DCT cũng phải thất bại ở đây vì không tìm được hàm trội khả tích.

---

## III. Trục 3 — Loại hàm trội: hằng số $M$ / hàm khả tích cố định $g$ / dãy hàm khả tích $g_n$

### 3.1 Trội bởi hằng số $M$, $\mu(D)<\infty$ — BCT (đã nêu ở mục 2.3)

### 3.2 Trội bởi hàm khả tích cố định $g$ — DCT

> [!thm] (Định lý Hội tụ Bị chặn Lebesgue — DCT)
> $(f_n)$ đo được, $f_n \to f$ a.e., tồn tại $g$ khả tích sao cho $|f_n| \le g$ a.e. với mọi $n$. Khi đó $\int_\Omega f_n\,d\mu \to \int_\Omega f\,d\mu$, và thêm nữa $\int_\Omega |f_n - f|\,d\mu \to 0$.

> [!prf] Khung chứng minh
> Hoàn toàn song song BCT, chỉ thay $M$ bởi $g$: áp Fatou cho $g+f_n \ge 0$ và $g - f_n \ge 0$, kẹp hai chiều. Phần $L^1$-hội tụ: dùng $|f_n-f| \le 2g$, áp Fatou cho $2g - |f_n-f| \ge 0$, suy ra $\limsup \int|f_n-f| \le 0$.

> [!obs] BCT là trường hợp riêng của DCT
> Đặt $g = M\chi_D$. Khi $\mu(D)<\infty$, hàm này khả tích ($\int g\,d\mu = M\mu(D) <\infty$), và $|f_n|\le M$ trên $D$ tương đương $|f_n|\le g$. Vậy BCT $=$ DCT thu hẹp vào trường hợp hàm trội là hằng số nhân chỉ thị của một tập hữu hạn độ đo.

### 3.3 Trội bởi dãy hàm khả tích $g_n$ — Generalized DCT (Prob 9.22)

> [!thm] (Prob 9.22)
> $f_n \to f$, $g_n \to g$ a.e. (cả hai dãy đo được, $g_n, g \ge 0$ khả tích), $|f_n| \le g_n$, và $\int_D g_n\,d\mu \to \int_D g\,d\mu < \infty$. Khi đó $f$ khả tích và $\int_D f_n\,d\mu \to \int_D f\,d\mu$.

> [!prf] Khung chứng minh
> Áp Fatou cho $g_n + f_n \ge 0$: vế trái cho $\int(g+f)$, vế phải cho $\lim\int g_n + \liminf \int f_n$; giản ước $\int g$ (hữu hạn, dùng giả thiết hội tụ của $\int g_n$) được $\int f \le \liminf \int f_n$. Tương tự với $g_n - f_n \ge 0$ được chiều kia. Kẹp lại.

> [!obs] DCT là trường hợp riêng của Generalized DCT
> Đặt $g_n \equiv g$ với mọi $n$: điều kiện $\int g_n \to \int g$ tự động đúng (hằng số), và điều kiện $g_n \to g$ a.e. cũng hiển nhiên. Vậy Generalized DCT nới lỏng đúng một chỗ duy nhất: **cho phép hàm trội thay đổi theo $n$**, miễn là tích phân của nó hội tụ về đúng giá trị giới hạn.

> [!obs] Điểm tinh tế dễ bị hỏi vặn
> Giả thiết $\int_D g_n\,d\mu \to \int_D g\,d\mu$ **không** tự động suy ra từ $g_n \to g$ a.e. (đây chính là loại mệnh đề mà ta đang cố chứng minh cho $f_n$!) — nó phải được cho thêm như giả thiết độc lập. Nếu chỉ có $g_n \to g$ a.e. mà không có hội tụ tích phân, định lý có thể sai (xem lại chính các phản ví dụ MCT/DCT ở mục V — chúng đều là các dãy $g_n \to g$ a.e. mà $\int g_n \not\to \int g$).

### 3.4 Trội chỉ một phía (chặn trên) bởi hàm khả tích — Fatou ngược (Hệ quả 5)

> [!thm] (Hệ quả 5: Fatou ngược)
> $(f_n)$ đo được (không cần không âm), tồn tại $g$ khả tích sao cho $f_n \le g$ a.e. với mọi $n$. Khi đó:
> $$\limsup_{n\to\infty} \int_D f_n\,d\mu \le \int_D \limsup_{n\to\infty} f_n\,d\mu$$

> [!prf] Khung chứng minh
> Đặt $h_n = g - f_n \ge 0$. Áp Fatou gốc cho $(h_n)$, dùng $\liminf(g-f_n) = g - \limsup f_n$ và $\liminf \int(g-f_n) = \int g - \limsup \int f_n$ (tách được vì $\int g < \infty$), rồi đổi dấu.

> [!obs] Vì sao đây là "Fatou đảo dấu" chứ không phải định lý độc lập?
> So với Fatou gốc (cần $f_n \ge 0$, bất đẳng thức theo chiều $\liminf$, $\le$), Fatou ngược **đổi chặn dưới 0 thành chặn trên bởi hàm khả tích $g$**, và bất đẳng thức đảo chiều thành $\limsup$, $\le$. Cấu trúc chứng minh là phản chiếu gương: lấy $g$ trừ đi $f_n$ để quay về dạng không âm rồi áp lại Fatou gốc — đúng kỹ thuật được dùng lặp lại trong BCT và DCT (mục 3.1, 3.2).

---

## IV. Trục 4 — Hàm không âm bị bỏ hoàn toàn (không có gì chặn)

> [!obs] Trường hợp không có domination dưới lẫn trên
> Nếu $(f_n)$ chỉ đo được (không không âm, không bị chặn bởi hàm khả tích nào, không đơn điệu), thì **không có kết luận tổng quát nào** về việc hoán đổi $\lim$ và $\int$ — kể cả khi $f_n \to f$ a.e. điểm và mọi tích phân $\int f_n\,d\mu$ đều hữu hạn riêng lẻ.
>
> Phản ví dụ đơn giản nhất: trên $D=[0,1]$ với độ đo Lebesgue, đặt $f_n(x) = n^2 x(1-x)^n$ (mass tập trung và "đi lên" gần $x=0$ rồi co lại). Có thể kiểm tra $f_n \to 0$ a.e. trên $(0,1]$ nhưng $\int_0^1 f_n\,dx \to \infty$ hoặc một hằng số khác $0$ tùy cách dựng cụ thể — bản chất là khối lượng "trượt" theo phương dọc (giống cách $\chi_{[n,\infty)}$ trượt theo phương ngang ở mục 1.2). Đây là lý do tất cả các định lý ở trên đều cần ít nhất một trong hai cơ chế kiểm soát: **đơn điệu** (MCT) hoặc **bị trội bởi một hàm/hằng số khả tích** (Fatou/BCT/DCT).

> [!obs] Quy tắc ghi nhớ tổng quát
> Mọi định lý hoán đổi $\lim \leftrightarrow \int$ trong lý thuyết độ đo đều cần một trong hai cơ chế:
> 1. **Đơn điệu** (loại trừ khả năng "khối lượng trượt đi rồi quay lại") — MCT.
> 2. **Bị trội bởi hàm khả tích** (chặn cứng khối lượng tại mọi bước) — Fatou/BCT/DCT.
>
> Thiếu cả hai, không có gì đảm bảo — đây chính là tinh thần trả lời cho câu hỏi "nếu chỉ có hàm đo được (không âm, không đơn điệu, không trội)" của giảng viên.

---

## V. Bảng tổng hợp so sánh

| Định lý | Dấu hàm | Đơn điệu? | $\mu(D)$ | Hàm trội | Hội tụ điểm | Kết luận |
|---|---|---|---|---|---|---|
| MCT (tăng) | $f_n \ge 0$ | $f_n \uparrow f$ | bất kỳ | — | a.e. | $\int f_n \to \int f$ |
| MCT (giảm) | $f_n \ge 0$ | $f_n \downarrow f$ | bất kỳ | cần $\exists k: \int f_k<\infty$ | a.e. | $\int f_n \to \int f$ |
| Fatou | $f_n \ge 0$ | không cần | bất kỳ | — | không cần (chỉ cần liminf) | $\int \liminf f_n \le \liminf \int f_n$ |
| Fatou ngược | bất kỳ | không cần | bất kỳ | $f_n \le g$, $g$ khả tích | không cần | $\limsup \int f_n \le \int \limsup f_n$ |
| Định lý 8.14 | $f_n \ge 0$ | $f_n \le f$ | bất kỳ | (chính $f$ đóng vai trò trội) | a.e. | $\int f_n \to \int f$ |
| BCT | bất kỳ | không cần | **$<\infty$** | hằng số $M$ | a.e. | $\int f_n \to \int f$ |
| DCT | bất kỳ | không cần | bất kỳ | hàm khả tích $g$ cố định | a.e. | $\int f_n \to \int f$, $\int|f_n-f|\to 0$ |
| Generalized DCT | bất kỳ | không cần | bất kỳ | dãy $g_n \to g$, $\int g_n \to \int g <\infty$ | a.e. | $\int f_n \to \int f$ |

---

## VI. Bản đồ phản ví dụ — mỗi phản ví dụ ứng với điều kiện nào bị vi phạm

| Phản ví dụ | Định lý bị thách thức | Điều kiện thiếu |
|---|---|---|
| $f_n = nx^n$ trên $[0,1]$ | MCT | dãy **không đơn điệu tăng** (tăng rồi giảm theo $n$ tại mỗi $x$ cố định) |
| $f_n = \chi_{[n,\infty)}$ trên $[0,\infty)$ | MCT giảm | không có số hạng nào khả tích (mọi $\int f_n = \infty$) |
| $f_n = \frac{1}{n}\chi_{[1,n]}$ trên $[1,\infty)$ | BCT | $\mu(D) = \infty$ (dù bị chặn đều và hội tụ đều) |
| $f_n(x) = \frac{n}{1+n^2x^2}$ trên $[a,\infty)$, $a\le 0$ | DCT | không tồn tại hàm trội khả tích thống nhất gần $x=0$ (hàm trội nhỏ nhất khả dĩ là $\frac{1}{2\lvert x\rvert}$, không khả tích quanh $0$) |

Quan sát chung: mỗi phản ví dụ chỉ "phá" đúng **một** điều kiện trong bảng ở Mục V — đây là cách hiệu quả để trả lời câu "vì sao định lý cần điều kiện này": chỉ cần nhớ phản ví dụ tương ứng.

---

## VII. Checklist câu hỏi vấn đáp gợi ý

> [!question] "Nếu xét hàm không âm thì điều kiện hội tụ là gì?"
> Tùy thêm trục đơn điệu: tăng → MCT (không cần gì thêm); giảm → MCT giảm (cần một số hạng khả tích); không đơn điệu → chỉ còn bất đẳng thức một chiều (Fatou), muốn có đẳng thức cần thêm domination hoặc $f_n \le f$ (Định lý 8.14).

> [!question] "Nếu không gian đo không hữu hạn thì sao?"
> MCT (tăng) và DCT vẫn đúng nguyên vẹn (không dùng đến $\mu(D)<\infty$ trong chứng minh). BCT thì **sụp đổ** vì hàm hằng $M$ không khả tích trên không gian vô hạn — xem phản ví dụ Prob 8.10. MCT giảm cũng dễ sụp đổ trên không gian vô hạn nếu không có số hạng khả tích (phản ví dụ $\chi_{[n,\infty)}$), dù bản chất nguyên nhân là thiếu tính khả tích chứ không phải trực tiếp do $\mu(D)=\infty$.

> [!question] "Nếu hàm giảm thay vì tăng thì sao?"
> Cần thêm điều kiện tồn tại ít nhất một số hạng khả tích trong dãy (Hệ quả 4); chứng minh bằng cách quy về MCT tăng qua $h_n = f_1 - f_n$. Không có điều kiện này thì sai (phản ví dụ $\chi_{[n,\infty)}$).

> [!question] "Nếu thay bị chặn bởi hàm khả tích thành bị chặn bởi hằng số thì sao?"
> Đây là đi từ DCT (tổng quát) xuống BCT (đặc biệt): đặt $g = M\chi_D$. Cái giá phải trả là cần thêm $\mu(D)<\infty$ để $g$ khả tích — nếu không, hằng số $M$ không còn đóng vai trò "hàm trội khả tích" được nữa (phản ví dụ Prob 8.10).

> [!question] "Nếu chỉ là hàm đo được (bỏ điều kiện không âm) mà không có domination thì sao?"
> Không có kết luận tổng quát — cần ít nhất một cơ chế kiểm soát: đơn điệu (MCT) hoặc bị trội bởi hàm/hằng số khả tích (Fatou hai chiều/BCT/DCT). Thiếu cả hai, khối lượng có thể "trượt đi" theo phương ngang (như $\chi_{[n,\infty)}$) hoặc phương dọc, phá vỡ đẳng thức.

> [!question] "Vì sao Fatou chỉ là bất đẳng thức một chiều, không phải đẳng thức?"
> Vì $g_n = \inf_{k\ge n} f_k \le f_n$ chỉ cho một chiều bất đẳng thức tích phân; không có gì đảm bảo $g_n$ "đuổi kịp" $f_n$ về mặt tích phân nếu thiếu thêm giả thiết (đơn điệu, hoặc domination, hoặc $f_n \le f$). Khi có thêm một trong các giả thiết đó, chiều còn lại tự động xuất hiện và ta được đẳng thức (MCT, Định lý 8.14).
