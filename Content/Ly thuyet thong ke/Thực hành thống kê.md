# Lý thuyết ôn tập — Thực hành Thống kê

## 1. Mô tả dữ liệu và trực quan hóa

[!def] Các đại lượng mô tả mẫu
Với mẫu $x_1,\dots,x_n$:

$$\bar{x} = \frac{1}{n}\sum_{i=1}^n x_i, \qquad s^2 = \frac{1}{n-1}\sum_{i=1}^n (x_i-\bar{x})^2, \qquad s = \sqrt{s^2}$$

Phương sai theo mẫu số $n$ (không hiệu chỉnh, dùng trong MLE):

$$\hat\sigma^2_{\text{MLE}} = \frac{1}{n}\sum_{i=1}^n (x_i-\bar{x})^2 = \overline{x^2} - \bar{x}^2$$

Trong R: `var(x)` dùng mẫu số $n-1$; `mean((x-mean(x))^2)` dùng mẫu số $n$; hai giá trị này khác nhau.

Hệ số biến thiên (so sánh độ phân tán tương đối khi đơn vị đo khác nhau):

$$CV = \frac{s}{|\bar{x}|}$$

[!obs] Trung vị so với trung bình
Trung vị $\text{median}(x)$ ít nhạy với ngoại lệ hơn trung bình. Nếu $\bar{x} > \text{median}$, phân phối lệch phải; nếu $\bar{x} < \text{median}$, phân phối lệch trái.

[!def] Các lệnh R cho trực quan hóa
- `table(x)`: bảng tần số; `prop.table(table(x))`: bảng tần suất.
- `hist(x, freq=FALSE)` cộng `lines(density(x))`: histogram với đường mật độ ước lượng chồng lên.
- `boxplot(score ~ class)`: so sánh phân phối giữa các nhóm.
- `plot(x,y)` cộng `abline(lm(y~x))`: đồ thị phân tán và đường hồi quy tuyến tính.
- `cor(x,y)`: hệ số tương quan mẫu, đo mức độ quan hệ **tuyến tính** giữa hai biến (không phải quan hệ nhân quả).

---

## 2. Phân phối xác suất và mô phỏng

[!def] Các hàm phân phối trong R
Với mỗi họ phân phối `dist` (norm, pois, binom, exp, chisq, t, f, ...), R cung cấp bốn hàm:

- `d<dist>(x, ...)`: hàm mật độ/khối xác suất tại $x$.
- `p<dist>(q, ...)`: hàm phân phối tích lũy $P(X \le q)$.
- `q<dist>(p, ...)`: hàm phân vị (nghịch đảo của $p$).
- `r<dist>(n, ...)`: sinh $n$ giá trị ngẫu nhiên.

Ví dụ tính $P(2 \le X \le 6)$ với $X \sim \text{Poisson}(3)$:

```r
ppois(6, lambda = 3) - ppois(1, lambda = 3)
```

vì $X$ rời rạc nên phải trừ tại $ppois(1)$ chứ không phải $ppois(2)$.

Tính $P(X > 8)$ với $X \sim \text{Binomial}(20, 0.4)$:

```r
1 - pbinom(8, size = 20, prob = 0.4)
```

[!def] Phương pháp biến đổi ngược (inverse transform)
Nếu $U \sim U(0,1)$ và $F$ là hàm phân phối của $X$ thì $X = F^{-1}(U)$ có cùng phân phối với $X$.

Với $X \sim \text{Exp}(\lambda)$, $F(x) = 1-e^{-\lambda x}$, nên:

$$X = -\frac{\ln(1-U)}{\lambda}$$

```r
X <- -log(1 - U) / lambda
```

Với biến rời rạc nhận giá trị $a_1 < a_2 < a_3$ với xác suất $p_1,p_2,p_3$:

```r
x <- ifelse(u <= p1, a1, ifelse(u <= p1+p2, a2, a3))
```

[!thm] Ba phân phối liên quan đến mẫu chuẩn
1. Nếu $Z_1,\dots,Z_n \overset{iid}{\sim} N(0,1)$ thì $\sum Z_i^2 \sim \chi^2(n)$, và $\chi^2(n) = \text{Gamma}(n/2, 1/2)$.
2. Nếu $Z\sim N(0,1)$, $V \sim \chi^2(n)$ độc lập với $Z$ thì:
$$T = \frac{Z}{\sqrt{V/n}} \sim t(n)$$
3. Nếu $U \sim \chi^2(m)$, $V \sim \chi^2(n)$ độc lập thì:
$$F = \frac{U/m}{V/n} \sim F(m,n)$$

Khi $n \to \infty$, $t(n) \to N(0,1)$; $t(1)$ chính là phân phối Cauchy.

[!thm] Định lý giới hạn trung tâm (CLT)
Nếu $X_1,\dots,X_n \overset{iid}{\sim}$ có kỳ vọng $\mu$ và phương sai $\sigma^2 < \infty$ thì với $n$ đủ lớn:

$$\bar{X}_n \approx N\left(\mu, \frac{\sigma^2}{n}\right)$$

Ví dụ: $X_i \sim \text{Exp}(\lambda=2)$ có $\mu = 1/2$, $\sigma = 1/2$. Với $n=50$:

$$\bar{X} \approx N\left(\frac{1}{2}, \frac{(1/2)^2}{50}\right), \quad sd(\bar{X}) = \frac{1/2}{\sqrt{50}}$$

```r
xbar <- replicate(B, mean(rexp(n, rate = 2)))
hist(xbar, freq = FALSE)
curve(dnorm(x, mean = 1/2, sd = 1/(2*sqrt(n))), add = TRUE)
```

[!obs] CLT không nói dữ liệu gốc có phân phối chuẩn; CLT chỉ áp dụng cho phân phối của **trung bình mẫu**. Luật số lớn (LLN) nói $\bar{X}_n \to \mu$ khi $n \to \infty$ (hội tụ về một giá trị, không phải một phân phối).

[!def] Chuẩn hóa (chuẩn hóa CLT)
$$Z = \frac{\bar{X} - \mu}{S/\sqrt{n}} \xrightarrow{d} N(0,1)$$

Với $X_i \sim \text{Binomial}(m, p)$, $\mu = mp$.

```r
mu <- size * prob
z <- (mean(x) - mu) / (sd(x) / sqrt(m))
```

---

## 3. Ước lượng điểm và MLE

[!def] Hàm hợp lý (likelihood) và log-hợp lý
Với mẫu $x_1,\dots,x_n \overset{iid}{\sim} f(x;\theta)$:

$$L(\theta) = \prod_{i=1}^n f(x_i;\theta), \qquad \ell(\theta) = \ln L(\theta) = \sum_{i=1}^n \ln f(x_i;\theta)$$

$$\hat\theta_{MLE} = \arg\max_\theta \ell(\theta)$$

[!prf] MLE của Bernoulli
Với $X_i \sim \text{Bernoulli}(p)$, $T=\sum X_i$:

$$\ell(p) = T\ln p + (n-T)\ln(1-p) \;\Rightarrow\; \hat{p}_{MLE} = \frac{T}{n} = \bar{x}$$

```r
loglik <- function(p, x) sum(x)*log(p) + (length(x)-sum(x))*log(1-p)
p_mle <- optimize(function(p) -loglik(p, x), interval = c(1e-6, 1-1e-6))$minimum
```

[!prf] MLE của Poisson
Với $X_i \sim \text{Poisson}(\lambda)$:

$$\ell(\lambda) = -n\lambda + T\ln\lambda - \sum \ln(x_i!), \quad T=\sum x_i \;\Rightarrow\; \hat\lambda_{MLE} = \bar{x}$$

[!prf] MLE của Exponential
Với $X_i \sim \text{Exp}(\lambda)$, $f(x)=\lambda e^{-\lambda x}$:

$$\ell(\lambda) = n\ln\lambda - \lambda\sum x_i \;\Rightarrow\; \hat\lambda_{MLE} = \frac{1}{\bar{x}}$$

```r
optimize(function(lam) -sum(dexp(x, rate=lam, log=TRUE)), interval=c(1e-6,10))
```

[!prf] MLE của Normal $(\mu,\sigma^2)$
$$\hat\mu_{MLE} = \bar{x}, \qquad \hat\sigma^2_{MLE} = \frac{1}{n}\sum(x_i-\bar{x})^2$$

```r
negloglik <- function(theta){
  mu <- theta[1]; sigma <- exp(theta[2])
  -sum(dnorm(x, mean=mu, sd=sigma, log=TRUE))
}
fit <- nlminb(start=c(mean(x), log(sd(x))), objective=negloglik)
```
Tham số hóa $\theta=(\mu,\ln\sigma)$ để đảm bảo $\sigma>0$ khi tối ưu không ràng buộc.

[!def] Ước lượng mô-men (Method of Moments)
Cân bằng mô-men mẫu với mô-men lý thuyết. Với $X_i\sim\text{Exp}(\lambda)$, $E[X]=1/\lambda$:

$$\hat\lambda_{MOM} = \frac{1}{\bar{x}}$$

[!def] Thông tin Fisher và khoảng tin cậy tiệm cận
$$I(\theta) = -E\left[\frac{\partial^2 \ell}{\partial \theta^2}\right], \qquad \hat\theta \overset{approx}{\sim} N\left(\theta, \frac{1}{I(\theta)}\right)$$

Với Bernoulli: $I(\hat p) = \dfrac{n}{\hat p(1-\hat p)}$, suy ra:

$$\widehat{se}(\hat p) = \sqrt{\frac{\hat p(1-\hat p)}{n}}, \qquad CI_{95\%} = \hat p \pm z_{0.975}\cdot\widehat{se}(\hat p)$$

Dạng tổng quát cho ước lượng tiệm cận chuẩn bất kỳ:

$$\hat\theta \pm 1.96 \cdot \widehat{se}$$

[!def] Đánh giá ước lượng bằng mô phỏng: Bias, Variance, MSE
Với $B$ mẫu mô phỏng cho ra vector ước lượng `est`, giá trị thật `theta`:

$$\text{Bias}(\hat\theta) = E[\hat\theta] - \theta, \qquad \text{Var}(\hat\theta), \qquad MSE(\hat\theta) = \text{Var}(\hat\theta) + \text{Bias}^2(\hat\theta) = E[(\hat\theta-\theta)^2]$$

```r
bias <- mean(est) - theta
variance <- var(est)
mse <- mean((est - theta)^2)
```

---

## 4. Khoảng tin cậy

[!def] Khoảng tin cậy cho trung bình (phương sai chưa biết)
$$\bar{x} \pm t_{n-1,\,1-\alpha/2}\cdot\frac{s}{\sqrt{n}}$$

```r
alpha <- 1 - conf
q <- qt(1 - alpha/2, df = n - 1)
ci <- xbar + c(-1,1) * q * s / sqrt(n)
```

[!def] Khoảng tin cậy cho tỷ lệ (Wald)
$$\hat p \pm z_{1-\alpha/2}\sqrt{\frac{\hat p(1-\hat p)}{n}}$$

```r
phat <- x / n
se <- sqrt(phat*(1-phat)/n)
ci <- phat + c(-1,1) * qnorm(1 - alpha/2) * se
```

[!def] Khoảng tin cậy cho phương sai (mẫu chuẩn)
$$\left(\frac{(n-1)s^2}{\chi^2_{1-\alpha/2,\,n-1}},\; \frac{(n-1)s^2}{\chi^2_{\alpha/2,\,n-1}}\right)$$

```r
chi_lower <- qchisq(alpha/2, df = n-1)
chi_upper <- qchisq(1 - alpha/2, df = n-1)
ci_var <- c((n-1)*s2/chi_upper, (n-1)*s2/chi_lower)
```

Khoảng tin cậy cho độ lệch chuẩn: lấy căn bậc hai hai đầu mút.

[!def] Khoảng tin cậy cho hiệu hai trung bình — phương sai gộp (pooled)
Giả định $\sigma_x^2=\sigma_y^2$:

$$s_p^2 = \frac{(n-1)s_x^2+(m-1)s_y^2}{n+m-2}, \qquad \bar x-\bar y \pm t_{n+m-2,\,1-\alpha/2}\cdot s_p\sqrt{\frac{1}{n}+\frac{1}{m}}$$

```r
sp2 <- ((n-1)*var(x) + (m-1)*var(y)) / (n+m-2)
se  <- sqrt(sp2) * sqrt(1/n + 1/m)
tcrit <- qt(1-alpha/2, df = n+m-2)
ci <- (mean(x)-mean(y)) + c(-1,1)*tcrit*se
```

[!def] Khoảng tin cậy cho hiệu hai trung bình — Welch (không giả định phương sai bằng nhau)
$$se = \sqrt{\frac{s_x^2}{n}+\frac{s_y^2}{m}}, \qquad df = \frac{\left(\frac{s_x^2}{n}+\frac{s_y^2}{m}\right)^2}{\frac{(s_x^2/n)^2}{n-1}+\frac{(s_y^2/m)^2}{m-1}}$$

```r
se <- sqrt(var(x)/n + var(y)/m)
df <- (var(x)/n + var(y)/m)^2 / ((var(x)/n)^2/(n-1) + (var(y)/m)^2/(m-1))
ci <- (mean(x)-mean(y)) + c(-1,1)*qt(1-alpha/2, df)*se
```

---

## 5. Kiểm định giả thuyết

[!def] Khung tổng quát
Giả thuyết không $H_0$, đối thuyết $H_1$. Thống kê kiểm định $\to$ so sánh với phân phối dưới $H_0$ $\to$ tính p-value.

- $H_1$ hai phía: $p = 2\left(1-F(|t_{obs}|)\right)$
- $H_1$: tham số $>$ giá trị: $p = 1-F(t_{obs})$ (đuôi phải)
- $H_1$: tham số $<$ giá trị: $p = F(t_{obs})$ (đuôi trái)

[!def] Quy tắc quyết định
Nếu $p\text{-value} \le \alpha$: bác bỏ $H_0$. Nếu $p\text{-value} > \alpha$: không đủ cơ sở bác bỏ $H_0$ (**không** chứng minh $H_0$ đúng tuyệt đối). Tương đương: nếu $\mu_0$ nằm ngoài khoảng tin cậy $1-\alpha$ cho $\mu$ thì bác bỏ $H_0:\mu=\mu_0$ ở mức $\alpha$.

[!def] Kiểm định trung bình một mẫu
$$t_{obs} = \frac{\bar x - \mu_0}{s/\sqrt n} \sim t(n-1) \text{ dưới } H_0$$

```r
t.test(x, mu = mu0, alternative = "greater")   # H1: mu > mu0
t.test(x, mu = mu0, alternative = "less")      # H1: mu < mu0
t.test(x, mu = mu0, alternative = "two.sided")
```

[!def] Kiểm định tỷ lệ một mẫu
$$z_{obs} = \frac{\hat p - p_0}{\sqrt{p_0(1-p_0)/n}} \sim N(0,1) \text{ dưới } H_0$$

```r
prop.test(x = k, n = n, p = p0, alternative = "greater", correct = FALSE)
```

[!def] Kiểm định hiệu hai trung bình (hai mẫu độc lập)

```r
t.test(x, y, var.equal = TRUE,  alternative = "greater")  # pooled
t.test(x, y, var.equal = FALSE, alternative = "greater")  # Welch
```

[!def] Kiểm định hai mẫu bắt cặp (paired)
Khi hai mẫu đo trên cùng đối tượng (trước/sau):

```r
t.test(after, before, paired = TRUE, alternative = "greater")
```

[!def] Kiểm định hai tỷ lệ

```r
prop.test(x = c(x1, x2), n = c(n1, n2), correct = FALSE)
```

[!def] Kiểm định phương sai
Một mẫu, $H_0:\sigma^2=\sigma_0^2$:

$$Q_{obs} = \frac{(n-1)s^2}{\sigma_0^2} \sim \chi^2(n-1) \text{ dưới } H_0$$

```r
q_obs <- (n-1)*var(x)/sigma2_0
p_value_greater <- 1 - pchisq(q_obs, df = n-1)
p_value_two_sided <- 2*min(pchisq(q_obs, df=n-1), 1-pchisq(q_obs, df=n-1))
EnvStats::varTest(x, sigma.squared = sigma2_0, alternative = "greater")
```

Hai mẫu, $H_0:\sigma_x^2=\sigma_y^2$:

```r
var.test(x, y, alternative = "two.sided", conf.level = 0.95)
```

[!def] Giá trị tới hạn thường dùng
$$z_{0.975}=\texttt{qnorm(0.975)}, \qquad t_{n-1,\,0.975}=\texttt{qt(0.975, df=n-1)}$$

---

## 6. Kiểm định chi-bình phương

[!def] Ba tình huống dùng `chisq.test`
1. **Sự phù hợp (Goodness of fit)** — so sánh tần số thực nghiệm với xác suất lý thuyết:
```r
prob <- freq / sum(freq)
chisq.test(observed, p = prob, correct = FALSE)
```
2. **So sánh hai (hoặc nhiều) bộ số liệu thực nghiệm theo cùng các nhóm** (bảng tần số dạng cột):
```r
tab <- data.frame(MauA = c(...), MauB = c(...))
chisq.test(tab, correct = FALSE)
```
3. **Tính độc lập giữa hai biến định tính**:
```r
tab <- table(A, B)
chisq.test(tab, correct = FALSE)
```
$H_0$: hai biến định tính độc lập với nhau.

[!obs] Nếu tần số kỳ vọng trong một số ô quá nhỏ (thường $<5$), xấp xỉ chi-bình phương có thể kém chính xác.

---

## 7. Hồi quy tuyến tính đơn

[!def] Mô hình
$$Y_i = \beta_0 + \beta_1 x_i + \varepsilon_i, \qquad \varepsilon_i \overset{iid}{\sim} N(0,\sigma^2)$$

[!def] Ước lượng bình phương tối thiểu (OLS)
$$\hat\beta_1 = \frac{\sum(x_i-\bar x)(y_i-\bar y)}{\sum(x_i-\bar x)^2}, \qquad \hat\beta_0 = \bar y - \hat\beta_1\bar x$$

```r
fit <- lm(y ~ x)
coef(fit)[1]   # beta0_hat
coef(fit)[2]   # beta1_hat
plot(x, y); abline(fit)
```

[!def] Kiểm định hệ số hồi quy
Trong `summary(fit)`, dòng biến $x$ kiểm định $H_0:\beta_1=0$ (không có quan hệ tuyến tính) đối lại $H_1:\beta_1\ne0$. Nếu $\text{Pr}(>|t|) \le 0.05$: có bằng chứng thống kê rằng $\beta_1 \ne 0$.

[!def] Dự đoán và khoảng tin cậy cho hệ số
```r
predict(fit, newdata = data.frame(x = x0))
confint(fit)
```
Tên biến trong `newdata` phải khớp chính xác tên biến độc lập dùng trong `lm()`.

[!def] Hệ số xác định $R^2$
$$R^2 = 1 - \frac{\sum(y_i-\hat y_i)^2}{\sum(y_i-\bar y)^2}$$

$R^2$ là tỷ lệ phần trăm biến thiên của biến phụ thuộc được giải thích bởi mô hình tuyến tính với biến độc lập. $R^2=0.82$ nghĩa là khoảng 82% biến thiên của $Y$ được giải thích bởi $X$.

---

## Bảng tổng hợp thống kê kiểm định — phân phối dưới $H_0$

| Bài toán | Thống kê | Phân phối dưới $H_0$ |
|---|---|---|
| Trung bình 1 mẫu, $\sigma$ chưa biết | $t=\dfrac{\bar x-\mu_0}{s/\sqrt n}$ | $t(n-1)$ |
| Tỷ lệ 1 mẫu | $z=\dfrac{\hat p-p_0}{\sqrt{p_0(1-p_0)/n}}$ | $N(0,1)$ |
| Hiệu 2 trung bình, pooled | $t=\dfrac{\bar x-\bar y}{s_p\sqrt{1/n+1/m}}$ | $t(n+m-2)$ |
| Hiệu 2 trung bình, Welch | $t=\dfrac{\bar x-\bar y}{\sqrt{s_x^2/n+s_y^2/m}}$ | $t(df)$ xấp xỉ Welch–Satterthwaite |
| Phương sai 1 mẫu | $Q=\dfrac{(n-1)s^2}{\sigma_0^2}$ | $\chi^2(n-1)$ |
| Phương sai 2 mẫu | $F=s_x^2/s_y^2$ | $F(n-1,m-1)$ |
| Phù hợp / độc lập | $\sum\dfrac{(O-E)^2}{E}$ | $\chi^2$ với bậc tự do tương ứng |
| Hệ số hồi quy | $t=\dfrac{\hat\beta_1}{se(\hat\beta_1)}$ | $t(n-2)$ |
