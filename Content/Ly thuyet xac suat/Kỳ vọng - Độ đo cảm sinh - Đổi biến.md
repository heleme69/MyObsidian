
# 1. Kỳ vọng

> [!def] (Kỳ vọng)
> Đối với một biến ngẫu nhiên nhận giá trị thực $\Omega$ trên không gian xác suất $(\Omega, \mathcal{F}, P)$, giá trị kỳ vọng $\mathbb{E}X$ được định nghĩa là tích phân Lebesgue
> 
> $$\mathbb{E}X := \int_{\Omega} \Omega(\omega)P(d\omega).$$
> 
> Xét một biến ngẫu nhiên nhận giá trị $S$ là $Y$ (một ánh xạ đo được $Y: \Omega \to S$) và một hàm đo được $g: S \to \mathbb{R}$, với $(S, \mathcal{S})$ là không gian đo được. Vì hợp của các hàm đo được tạo ra một hàm đo được, $\Omega = g(Y)$ là một biến ngẫu nhiên nhận giá trị thực.

> [!def] (Distribution/law/push-forward measure)
> Nếu $\mathcal{S}$ là đại số $\sigma$ được sử dụng trên $S$, thì $Y$ cảm sinh (induces) một độ đo xác suất $\mu$ trên $(S, \mathcal{S})$ thông qua công thức
> 
> $$\mu(A) = P(Y \in A), \quad A \in \mathcal{S}.$$
> 
> Độ đo $\mu$ được gọi là phân phối / luật / độ đo đẩy tiến của $Y$.

Một kết quả cơ bản là công thức đổi biến (độ đo): change-of-measure formula, cho phép chúng ta viết lại giá trị kỳ vọng $\mathbb{E}g(Y)$, biểu thị tích phân trên không gian $\Omega$ có thể trừu tượng, thành một tích phân trên không gian $S$ (thường cụ thể hơn).

> [!lem] (LOTUS: Law of the Unconscious Statistician)
> Nếu $\mathbb{E}g(Y)$ được xác định rõ, thì
> 
> $$\mathbb{E}g(Y) = \int_{\Omega} g(Y)(\omega)P(d\omega) = \int_{S} g(y)\mu(dy).$$

> [!obs]
>  Khi $g(y) = y$ và $Y$ nhận giá trị thực và hoặc rời rạc với hàm khối lượng xác suất $f(y)$, hoặc liên tục với hàm mật độ $f(y)$ đối với độ đo Lebesgue, phương trình tương ứng lần lượt rút gọn thành:
> $$\mathbb{E}Y = \sum_{y} yf(y) \quad \text{và} \quad \mathbb{E}Y = \int_{\mathbb{R}} yf(y)dy$$














$\xi$