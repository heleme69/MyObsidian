# Tổng hợp lý thuyết & code R: Khoảng tin cậy — Kiểm định giả thuyết — Hồi quy tuyến tính

---

# PHẦN I. KHOẢNG TIN CẬY

## 1.1 Khái niệm chung

[!def] Khoảng tin cậy mức $1-\alpha$
Với tham số tổng thể $\theta$ chưa biết, khoảng tin cậy $(L,U)$ mức $1-\alpha$ là khoảng ngẫu nhiên (phụ thuộc mẫu) sao cho:

$$P(L \le \theta \le U) = 1-\alpha$$

Dạng chung nhất: $\hat\theta \pm (\text{giá trị tới hạn}) \times \widehat{se}(\hat\theta)$.

[!obs] Ý nghĩa tần suất
Diễn giải đúng: nếu lặp lại việc lấy mẫu nhiều lần và tính khoảng tin cậy mỗi lần, khoảng $95\%$ trong số đó chứa giá trị $\theta$ thật. **Không đúng** khi nói "xác suất $\theta$ nằm trong khoảng này là $95\%$" (vì $\theta$ là hằng số, không ngẫu nhiên) — dù trong đa số bài tập vẫn được chấp nhận diễn giải theo nghĩa thực hành.

## 1.2 Khoảng tin cậy cho trung bình một tổng thể

[!def] Trường hợp $\sigma$ chưa biết (thường gặp)
$$\bar x \pm t_{n-1,\,1-\alpha/2}\cdot\frac{s}{\sqrt n}$$

```r
ci_mean_t <- function(x, conf = 0.95) {
  n <- length(x); xbar <- mean(x); s <- sd(x)
  alpha <- 1 - conf
  tcrit <- qt(1 - alpha/2, df = n - 1)
  se <- s / sqrt(n)
  c(n=n, mean=xbar, sd=s, se=se,
    lower = xbar - tcrit*se, upper = xbar + tcrit*se)
}
t.test(x, conf.level = 0.95)$conf.int   # kiem tra bang ham dung san
```

[!def] Trường hợp $\sigma$ đã biết (ít gặp trong thực hành)
$$\bar x \pm z_{1-\alpha/2}\cdot\frac{\sigma}{\sqrt n}$$

```r
ci <- xbar + c(-1,1) * qnorm(1-alpha/2) * sigma/sqrt(n)
```

[!tip] Mẹo
Mặc định luôn dùng `qt()` trừ khi đề nói rõ "$\sigma$ đã biết" hoặc cho sẵn giá trị $\sigma$ của tổng thể. Khi $n$ lớn ($n>100$), $t_{n-1}\approx z$ nên hai cách cho kết quả gần như nhau.

## 1.3 Khoảng tin cậy cho tỷ lệ một tổng thể

[!def] Khoảng Wald
$$\hat p \pm z_{1-\alpha/2}\sqrt{\frac{\hat p(1-\hat p)}{n}}$$

```r
ci_prop_wald <- function(x, n, conf = 0.95) {
  phat <- x/n
  zcrit <- qnorm(1 - (1-conf)/2)
  se <- sqrt(phat*(1-phat)/n)
  c(phat=phat, se=se, lower=phat-zcrit*se, upper=phat+zcrit*se)
}
prop.test(x, n, conf.level = 0.95, correct = FALSE)$conf.int  # Wilson, khac Wald mot chut
```

[!warn] Lưu ý
Khoảng Wald chỉ đáng tin khi $n\hat p\ge 5$ và $n(1-\hat p)\ge 5$; có thể vượt ra ngoài $[0,1]$ khi $\hat p$ gần biên hoặc $n$ nhỏ — khi đó nên chặn bằng `pmax(0,pmin(1,ci))` hoặc dùng `prop.test()` (khoảng Wilson, ổn định hơn). Kết quả `prop.test()` và công thức Wald tay thường **không trùng khớp tuyệt đối** vì thuật toán khác nhau — đừng ngạc nhiên khi thấy lệch nhẹ.

## 1.4 Khoảng tin cậy cho phương sai một tổng thể

[!def] Giả định mẫu lấy từ tổng thể chuẩn
$$\left(\frac{(n-1)s^2}{\chi^2_{1-\alpha/2,\,n-1}},\; \frac{(n-1)s^2}{\chi^2_{\alpha/2,\,n-1}}\right)$$

```r
ci_var <- function(x, conf = 0.95){
  n <- length(x); s2 <- var(x); alpha <- 1-conf
  chi_lower <- qchisq(alpha/2, df = n-1)
  chi_upper <- qchisq(1 - alpha/2, df = n-1)
  c(lower = (n-1)*s2/chi_upper, upper = (n-1)*s2/chi_lower)
}
```

[!warn] Lưu ý
Khoảng này **không đối xứng** quanh $s^2$ (vì $\chi^2$ lệch phải); dễ nhầm chiều — cận **dưới** dùng $\chi^2$ ở phân vị **cao**, cận **trên** dùng $\chi^2$ ở phân vị **thấp** (ngược trực giác thông thường). Khoảng cho độ lệch chuẩn $\sigma$: lấy căn bậc hai hai đầu mút.

## 1.5 Khoảng tin cậy cho hiệu hai trung bình

[!def] Hai mẫu độc lập — pooled (giả định $\sigma_x^2=\sigma_y^2$)
$$s_p^2=\frac{(n-1)s_x^2+(m-1)s_y^2}{n+m-2},\qquad (\bar x-\bar y)\pm t_{n+m-2,\,1-\alpha/2}\cdot s_p\sqrt{\frac1n+\frac1m}$$

```r
ci_two_mean_pooled <- function(x, y, conf = 0.95) {
  n <- length(x); m <- length(y)
  sp2 <- ((n-1)*var(x)+(m-1)*var(y))/(n+m-2)
  sp <- sqrt(sp2)
  diff <- mean(x)-mean(y)
  se <- sp*sqrt(1/n+1/m)
  tcrit <- qt(1-(1-conf)/2, df = n+m-2)
  c(diff=diff, se=se, df=n+m-2, lower=diff-tcrit*se, upper=diff+tcrit*se)
}
```

[!def] Hai mẫu độc lập — Welch (không giả định phương sai bằng nhau)
$$se=\sqrt{\frac{s_x^2}{n}+\frac{s_y^2}{m}},\qquad df=\frac{\left(\frac{s_x^2}{n}+\frac{s_y^2}{m}\right)^2}{\frac{(s_x^2/n)^2}{n-1}+\frac{(s_y^2/m)^2}{m-1}}$$

```r
ci_two_mean_welch <- function(x, y, conf = 0.95) {
  n <- length(x); m <- length(y)
  sx2 <- var(x); sy2 <- var(y)
  diff <- mean(x)-mean(y)
  se <- sqrt(sx2/n+sy2/m)
  df <- (sx2/n+sy2/m)^2 / ((sx2/n)^2/(n-1)+(sy2/m)^2/(m-1))
  tcrit <- qt(1-(1-conf)/2, df=df)
  c(diff=diff, se=se, df=df, lower=diff-tcrit*se, upper=diff+tcrit*se)
}
t.test(x, y, var.equal = TRUE)$conf.int    # pooled
t.test(x, y, var.equal = FALSE)$conf.int   # Welch
```

[!def] Hai mẫu bắt cặp (paired)
Quy về khoảng tin cậy một mẫu cho hiệu số $d_i = x_i - y_i$:

$$\bar d \pm t_{n-1,\,1-\alpha/2}\cdot\frac{s_d}{\sqrt n}$$

```r
d <- x - y
ci_mean_t(d, conf = 0.95)
t.test(x, y, paired = TRUE)$conf.int
```

[!tip] Mẹo chọn pooled/Welch/paired
Hỏi ba câu: (1) Hai mẫu có đo trên cùng đối tượng không → có thì **paired**. (2) Nếu độc lập, có giả định/kiểm tra được phương sai bằng nhau không (`var.test`) → có thì **pooled**, không thì **Welch**. (3) Không chắc → dùng Welch làm lựa chọn an toàn mặc định.

## 1.6 Khoảng tin cậy cho hiệu hai tỷ lệ

$$(\hat p_1-\hat p_2)\pm z_{1-\alpha/2}\sqrt{\frac{\hat p_1(1-\hat p_1)}{n_1}+\frac{\hat p_2(1-\hat p_2)}{n_2}}$$

```r
ci_two_prop <- function(x1, n1, x2, n2, conf = 0.95){
  p1 <- x1/n1; p2 <- x2/n2
  se <- sqrt(p1*(1-p1)/n1 + p2*(1-p2)/n2)
  zcrit <- qnorm(1-(1-conf)/2)
  diff <- p1-p2
  c(diff=diff, lower=diff-zcrit*se, upper=diff+zcrit*se)
}
prop.test(x=c(x1,x2), n=c(n1,n2), conf.level=0.95, correct=FALSE)$conf.int
```

## 1.7 Khoảng tin cậy cho tỷ số hai phương sai

[!def] Dựa trên phân phối $F$
$$\left(\frac{s_x^2}{s_y^2}\cdot\frac{1}{F_{n-1,m-1,\,1-\alpha/2}},\; \frac{s_x^2}{s_y^2}\cdot F_{m-1,n-1,\,1-\alpha/2}\right)$$

```r
var.test(x, y, conf.level = 0.95)$conf.int   # R tinh san khoang nay
```

[!obs] Ít khi phải tính tay khoảng này; chủ yếu dùng `var.test()` trực tiếp, nhưng cần hiểu bản chất là khoảng cho **tỷ số** $\sigma_x^2/\sigma_y^2$, không phải hiệu số.

## 1.8 Bảng tổng hợp và lưu ý chốt cho khoảng tin cậy

| Tham số | Phân phối tới hạn | Hàm R |
|---|---|---|
| $\mu$, $\sigma$ chưa biết | $t(n-1)$ | `qt`, `t.test` |
| $p$ | $N(0,1)$ (Wald) | `qnorm`, `prop.test` |
| $\sigma^2$ | $\chi^2(n-1)$ | `qchisq` |
| $\mu_x-\mu_y$ pooled | $t(n+m-2)$ | `qt`, `t.test(var.equal=TRUE)` |
| $\mu_x-\mu_y$ Welch | $t(df)$ xấp xỉ | `qt`, `t.test(var.equal=FALSE)` |
| $\mu_d$ (paired) | $t(n-1)$ | `t.test(paired=TRUE)` |
| $p_1-p_2$ | $N(0,1)$ | `prop.test(x=c(),n=c())` |
| $\sigma_x^2/\sigma_y^2$ | $F(n-1,m-1)$ | `var.test` |

[!warn] Lưu ý chốt
Độ rộng khoảng tin cậy **tăng** khi mức tin cậy tăng (99% rộng hơn 95%) và **giảm** khi $n$ tăng. Tăng cỡ mẫu là cách duy nhất vừa tăng độ tin cậy vừa giữ khoảng hẹp.

---

# PHẦN II. KIỂM ĐỊNH GIẢ THUYẾT

## 2.1 Khung tổng quát

[!def] Các thành phần của một kiểm định
- Giả thuyết không $H_0$ (trạng thái mặc định, thường có dấu "=").
- Đối thuyết $H_1$ (điều muốn tìm bằng chứng ủng hộ).
- Mức ý nghĩa $\alpha$ (xác suất sai lầm loại I chấp nhận được, thường $0.05$).
- Thống kê kiểm định — một đại lượng tính từ mẫu, có phân phối đã biết dưới $H_0$.
- $p$-value — xác suất quan sát được kết quả cực đoan bằng hoặc hơn kết quả thực tế, **với điều kiện $H_0$ đúng**.

[!def] Quy tắc quyết định
$$p\text{-value} \le \alpha \;\Rightarrow\; \text{bác bỏ } H_0, \qquad p\text{-value} > \alpha \;\Rightarrow\; \text{không đủ cơ sở bác bỏ } H_0$$

[!def] Sai lầm loại I và loại II
| | $H_0$ đúng | $H_0$ sai |
|---|---|---|
| Bác bỏ $H_0$ | Sai lầm loại I (xác suất $\alpha$) | Quyết định đúng (power $=1-\beta$) |
| Không bác bỏ $H_0$ | Quyết định đúng | Sai lầm loại II (xác suất $\beta$) |

[!tip] Mẹo
Không bác bỏ $H_0$ **không đồng nghĩa** $H_0$ đúng — chỉ là chưa đủ bằng chứng thống kê để bác bỏ (có thể do cỡ mẫu nhỏ, power thấp). Đây là lỗi diễn giải bị hỏi thường xuyên nhất trong đề thi.

[!def] Tương đương giữa khoảng tin cậy và kiểm định hai phía
Nếu $\theta_0$ nằm ngoài khoảng tin cậy $1-\alpha$ cho $\theta$ thì bác bỏ $H_0:\theta=\theta_0$ ở mức $\alpha$ (kiểm định hai phía), và ngược lại.

## 2.2 Kiểm định trung bình một mẫu

$$t_{obs}=\frac{\bar x-\mu_0}{s/\sqrt n}\sim t(n-1) \text{ dưới } H_0$$

```r
pvalue_mean_t <- function(x, mu0, alternative = "greater") {
  n <- length(x); df <- n-1
  t_obs <- (mean(x)-mu0)/(sd(x)/sqrt(n))
  pval <- switch(alternative,
    "two.sided" = 2*(1-pt(abs(t_obs), df=df)),
    "less"      = pt(t_obs, df=df),
    "greater"   = 1-pt(t_obs, df=df))
  c(t_obs=t_obs, df=df, p_value=pval)
}
t.test(x, mu = mu0, alternative = "greater")
```

## 2.3 Kiểm định tỷ lệ một mẫu

$$z_{obs}=\frac{\hat p-p_0}{\sqrt{p_0(1-p_0)/n}}\sim N(0,1) \text{ dưới } H_0$$

```r
pvalue_prop_z <- function(x, n, p0, alternative = "greater") {
  phat <- x/n
  se0 <- sqrt(p0*(1-p0)/n)
  z_obs <- (phat-p0)/se0
  pval <- switch(alternative,
    "two.sided" = 2*(1-pnorm(abs(z_obs))),
    "less"      = pnorm(z_obs),
    "greater"   = 1-pnorm(z_obs))
  c(z_obs=z_obs, p_value=pval)
}
prop.test(x, n, p = p0, alternative = "greater", correct = FALSE)
```

[!warn] Lưu ý
`prop.test()` mặc định `correct=TRUE` (hiệu chỉnh liên tục Yates), trong khi công thức tay `pvalue_prop_z` không hiệu chỉnh — luôn đặt `correct=FALSE` nếu muốn kết quả khớp công thức z chuẩn.

## 2.4 Kiểm định phương sai một mẫu

$$Q_{obs}=\frac{(n-1)s^2}{\sigma_0^2}\sim\chi^2(n-1) \text{ dưới } H_0$$

```r
variance_test_one_sample <- function(x, sigma2_0, alternative = "greater"){
  n <- length(x); df <- n-1
  q_obs <- (n-1)*var(x)/sigma2_0
  pval <- switch(alternative,
    "greater"   = 1-pchisq(q_obs, df=df),
    "less"      = pchisq(q_obs, df=df),
    "two.sided" = 2*min(pchisq(q_obs,df=df), 1-pchisq(q_obs,df=df)))
  c(q_obs=q_obs, df=df, p_value=pval)
}
EnvStats::varTest(x, sigma.squared = sigma2_0, alternative = "greater")
```

## 2.5 Kiểm định hiệu hai trung bình

```r
# Hai mau doc lap, gia dinh phuong sai bang nhau
t.test(x, y, alternative = "greater", var.equal = TRUE)
# Hai mau doc lap, khong gia dinh phuong sai bang nhau
t.test(x, y, alternative = "greater", var.equal = FALSE)
# Hai mau bat cap
t.test(x, y, paired = TRUE, alternative = "greater")
```

Công thức thủ công (pooled):

```r
pvalue_two_mean_pooled <- function(x, y, alternative = "greater") {
  n <- length(x); m <- length(y)
  sp2 <- ((n-1)*var(x)+(m-1)*var(y))/(n+m-2)
  se <- sqrt(sp2)*sqrt(1/n+1/m)
  t_obs <- (mean(x)-mean(y))/se
  df <- n+m-2
  pval <- switch(alternative,
    "two.sided" = 2*(1-pt(abs(t_obs), df=df)),
    "less"      = pt(t_obs, df=df),
    "greater"   = 1-pt(t_obs, df=df))
  c(t_obs=t_obs, df=df, p_value=pval)
}
```

## 2.6 Kiểm định hai tỷ lệ

```r
prop.test(x = c(x1, x2), n = c(n1, n2), alternative = "two.sided", correct = FALSE)
```

Thống kê $z$ tương đương (dùng tỷ lệ gộp $\hat p = (x_1+x_2)/(n_1+n_2)$):

$$z_{obs} = \frac{\hat p_1-\hat p_2}{\sqrt{\hat p(1-\hat p)\left(\frac1{n_1}+\frac1{n_2}\right)}}$$

## 2.7 Kiểm định hai phương sai

$$F_{obs}=\frac{s_x^2}{s_y^2}\sim F(n-1,m-1) \text{ dưới } H_0$$

```r
var.test(x, y, alternative = "two.sided", conf.level = 0.95)
```

[!warn] Lưu ý
`var.test()` giả định **cả hai** mẫu đến từ tổng thể chuẩn — kiểm định này khá nhạy với vi phạm giả định chuẩn, nên chỉ dùng khi có cơ sở dữ liệu gần chuẩn (kiểm tra bằng histogram/QQ-plot trước).

## 2.8 Kiểm định chi-bình phương (tóm lược)

```r
# (1) Su phu hop
chisq.test(observed, p = prob, correct = FALSE)
# (2) So sanh nhieu mau theo cung nhom
chisq.test(tab, correct = FALSE)
# (3) Tinh doc lap hai bien dinh tinh
chisq.test(table(A, B), correct = FALSE)
```

Thống kê kiểm định chung: $\chi^2_{obs}=\sum \dfrac{(O-E)^2}{E} \sim \chi^2(df)$, với $df$ tùy theo loại kiểm định (số nhóm $-1$ cho phù hợp; $(r-1)(c-1)$ cho độc lập/so sánh nhóm với bảng $r\times c$).

## 2.9 Bảng tổng hợp thống kê kiểm định

| Bài toán | Thống kê | Phân phối $H_0$ | Hàm R |
|---|---|---|---|
| Trung bình 1 mẫu | $t=(\bar x-\mu_0)/(s/\sqrt n)$ | $t(n-1)$ | `t.test` |
| Tỷ lệ 1 mẫu | $z=(\hat p-p_0)/\sqrt{p_0(1-p_0)/n}$ | $N(0,1)$ | `prop.test` |
| Phương sai 1 mẫu | $Q=(n-1)s^2/\sigma_0^2$ | $\chi^2(n-1)$ | `EnvStats::varTest` |
| Hiệu 2 TB, pooled | $t=(\bar x-\bar y)/(s_p\sqrt{1/n+1/m})$ | $t(n+m-2)$ | `t.test(var.equal=TRUE)` |
| Hiệu 2 TB, Welch | tương tự, $se$ không gộp | $t(df)$ Welch | `t.test(var.equal=FALSE)` |
| Hiệu 2 TB, bắt cặp | $t=\bar d/(s_d/\sqrt n)$ | $t(n-1)$ | `t.test(paired=TRUE)` |
| Hai tỷ lệ | $z$ dùng $\hat p$ gộp | $N(0,1)$ | `prop.test(x=c(),n=c())` |
| Hai phương sai | $F=s_x^2/s_y^2$ | $F(n-1,m-1)$ | `var.test` |
| Phù hợp/độc lập | $\sum(O-E)^2/E$ | $\chi^2(df)$ | `chisq.test` |

---

# PHẦN III. HỒI QUY TUYẾN TÍNH ĐƠN

## 3.1 Mô hình và giả định

[!def] Mô hình
$$Y_i=\beta_0+\beta_1 x_i+\varepsilon_i,\qquad \varepsilon_i\overset{iid}{\sim}N(0,\sigma^2)$$

[!def] Bốn giả định cần kiểm tra (viết tắt L-I-N-E)
- **L**inearity: quan hệ giữa $x$ và $E[Y]$ là tuyến tính.
- **I**ndependence: các sai số $\varepsilon_i$ độc lập nhau.
- **N**ormality: sai số có phân phối chuẩn.
- **E**qual variance (homoscedasticity): phương sai sai số không đổi theo $x$.

## 3.2 Ước lượng bình phương tối thiểu (OLS)

$$\hat\beta_1=\frac{\sum(x_i-\bar x)(y_i-\bar y)}{\sum(x_i-\bar x)^2}=r\cdot\frac{s_y}{s_x},\qquad \hat\beta_0=\bar y-\hat\beta_1\bar x$$

```r
fit <- lm(y ~ x)
coef(fit)          # c(beta0_hat, beta1_hat)
plot(x, y); abline(fit, col = "red", lwd = 2)
```

## 3.3 Kiểm định hệ số hồi quy

$$H_0:\beta_1=0 \quad\text{vs}\quad H_1:\beta_1\ne 0, \qquad t_{obs}=\frac{\hat\beta_1}{se(\hat\beta_1)}\sim t(n-2)$$

```r
summary(fit)                       # xem toan bo bang he so
summary(fit)$coefficients          # chi lay bang he so (Estimate, Std.Error, t, p-value)
```

[!tip] Mẹo đọc `summary(lm())`
Dòng thứ hai của bảng hệ số (tên biến $x$) chứa $\hat\beta_1$, sai số chuẩn, giá trị $t$, và `Pr(>|t|)` chính là $p$-value cho $H_0:\beta_1=0$. `F-statistic` ở cuối output kiểm định **cùng giả thuyết** $H_0:\beta_1=0$ theo cách khác (ANOVA); trong hồi quy đơn, $p$-value của `F-statistic` và của $t$ ở dòng $x$ luôn **bằng nhau tuyệt đối**.

## 3.4 Khoảng tin cậy cho hệ số hồi quy

```r
confint(fit, level = 0.95)
```

Công thức tương đương: $\hat\beta_1 \pm t_{n-2,\,0.975}\cdot se(\hat\beta_1)$.

## 3.5 Hệ số xác định $R^2$ và hệ số tương quan

$$R^2=1-\frac{\sum(y_i-\hat y_i)^2}{\sum(y_i-\bar y)^2}=r_{xy}^2 \quad\text{(trong hồi quy đơn)}$$

```r
summary(fit)$r.squared
cor(x, y)^2                        # phai bang r.squared o tren
```

[!obs] $R^2$ đo tỷ lệ biến thiên của $Y$ được giải thích bởi $X$ qua mô hình tuyến tính; **không** đo độ chính xác dự đoán tuyệt đối và không hàm ý quan hệ nhân quả.

## 3.6 Dự đoán: khoảng tin cậy vs khoảng dự đoán

```r
predict(fit, newdata = data.frame(x = x0))                                  # gia tri diem
predict(fit, newdata = data.frame(x = x0), interval = "confidence")         # CI cho E[Y|X=x0]
predict(fit, newdata = data.frame(x = x0), interval = "prediction")         # PI cho mot quan sat moi
```

[!warn] Lưu ý
Khoảng dự đoán (`prediction`) luôn **rộng hơn** khoảng tin cậy (`confidence`) tại cùng $x_0$ vì phải cộng thêm phương sai của sai số ngẫu nhiên $\varepsilon$ của quan sát mới, ngoài phương sai ước lượng tham số. Tên cột trong `newdata` phải khớp **chính xác** tên biến độc lập trong công thức `lm()`.

## 3.7 Phân tích phần dư để kiểm tra giả định

```r
plot(fitted(fit), resid(fit),
     xlab = "Gia tri du doan", ylab = "Phan du")
abline(h = 0, col = "red", lty = 2)

qqnorm(resid(fit)); qqline(resid(fit), col = "red")   # kiem tra tinh chuan cua sai so
```

[!obs] Nếu đồ thị phần dư theo giá trị dự đoán cho thấy hình dạng phễu (phương sai tăng/giảm theo $x$) → vi phạm giả định phương sai không đổi. Nếu các điểm trên QQ-plot lệch mạnh khỏi đường thẳng → vi phạm giả định chuẩn của sai số.

## 3.8 Kiểm định F tổng quát cho mô hình (bổ sung)

Trong hồi quy đơn, `F-statistic` trong `summary(fit)` kiểm định $H_0$: mô hình không giải thích được gì cho $Y$ (tương đương $H_0:\beta_1=0$). Với hồi quy đơn, đây là thông tin trùng lặp với kiểm định $t$ của $\hat\beta_1$, nhưng khi mở rộng sang hồi quy bội, kiểm định $F$ là kiểm định tổng thể còn kiểm định $t$ là cho từng hệ số riêng lẻ.

## 3.9 Mẹo và lưu ý tổng hợp cho hồi quy

- Bậc tự do trong hồi quy đơn luôn là $n-2$ (ước lượng 2 tham số $\beta_0,\beta_1$) — khác với $n-1$ khi chỉ ước lượng một tham số như trung bình.
- `coef(fit)[1]` là $\hat\beta_0$ (hệ số chặn), `coef(fit)[2]` là $\hat\beta_1$ (hệ số góc) — đúng theo thứ tự xuất hiện trong công thức `y ~ x`.
- $\hat\beta_1$ có ý nghĩa thống kê ($p$ nhỏ) không đảm bảo mô hình có $R^2$ cao — hai chỉ số trả lời hai câu hỏi khác nhau (có quan hệ hay không vs quan hệ đó giải thích được bao nhiêu biến thiên).
- `abline(fit)` chỉ vẽ đúng khi đối tượng truyền vào là kết quả của `lm()`, không truyền được hệ số dạng vector trực tiếp trừ khi dùng `abline(a=, b=)`.

---

# PHẦN IV. CÂU HỎI MINH HỌA CÓ LỜI GIẢI CHI TIẾT

## Bài 1 — CI cho trung bình một tổng thể

**Đề bài.** Đo độ ẩm (%) của $12$ mẫu gỗ: `4.9, 5.2, 4.7, 5.5, 5.0, 4.8, 5.3, 5.1, 4.6, 5.4, 5.0, 4.9`. Tính khoảng tin cậy 95% cho độ ẩm trung bình của lô gỗ.

**Lời giải.**

```r
do_am <- c(4.9,5.2,4.7,5.5,5.0,4.8,5.3,5.1,4.6,5.4,5.0,4.9)
n <- length(do_am); xbar <- mean(do_am); s <- sd(do_am)
tcrit <- qt(0.975, df = n-1)
se <- s/sqrt(n)
ci <- xbar + c(-1,1)*tcrit*se
c(xbar = xbar, s = s, lower = ci[1], upper = ci[2])
```

Kết quả: $\bar x \approx 5.033$, $s\approx 0.28$, khoảng tin cậy $95\%$ xấp xỉ $(4.85,\,5.21)$. Vì $\sigma$ tổng thể chưa biết và $n=12$ nhỏ, bắt buộc dùng phân phối $t_{11}$ thay vì $z$.

## Bài 2 — CI cho tỷ lệ

**Đề bài.** Khảo sát $200$ khách hàng, có $54$ người hài lòng với dịch vụ. Tính khoảng tin cậy 90% cho tỷ lệ hài lòng thật của tổng thể.

**Lời giải.**

```r
x <- 54; n <- 200; conf <- 0.90
phat <- x/n
zcrit <- qnorm(1-(1-conf)/2)
se <- sqrt(phat*(1-phat)/n)
ci <- phat + c(-1,1)*zcrit*se
c(phat=phat, lower=ci[1], upper=ci[2])
```

$\hat p = 0.27$, khoảng tin cậy $90\%$ xấp xỉ $(0.217,\,0.323)$. Điều kiện $n\hat p=54\ge5$ và $n(1-\hat p)=146\ge5$ đều thỏa nên khoảng Wald đáng tin cậy.

## Bài 3 — CI cho phương sai

**Đề bài.** Với dữ liệu Bài 1 (`do_am`), tính khoảng tin cậy 95% cho phương sai và độ lệch chuẩn của độ ẩm.

**Lời giải.**

```r
n <- length(do_am); s2 <- var(do_am)
chi_lower <- qchisq(0.025, df = n-1)
chi_upper <- qchisq(0.975, df = n-1)
ci_var <- c((n-1)*s2/chi_upper, (n-1)*s2/chi_lower)
ci_sd <- sqrt(ci_var)
c(var_lower=ci_var[1], var_upper=ci_var[2], sd_lower=ci_sd[1], sd_upper=ci_sd[2])
```

Lưu ý cận dưới của khoảng phương sai dùng $\chi^2_{0.975,11}$ (phân vị cao) ở mẫu số, cận trên dùng $\chi^2_{0.025,11}$ (phân vị thấp).

## Bài 4 — CI hiệu hai trung bình, kiểm tra pooled/Welch

**Đề bài.** So sánh điểm kiểm tra của hai lớp A (`n=15`) và B (`n=18`): `A <- c(7.2,6.8,7.5,8.0,6.9,7.1,7.8,7.3,6.5,7.6,7.4,7.0,7.9,6.7,7.2)`, `B <- c(6.5,6.9,7.0,6.2,6.8,7.1,6.4,6.7,6.9,7.2,6.3,6.6,6.8,7.0,6.5,6.9,6.7,6.4)`. Kiểm tra giả định phương sai bằng nhau, sau đó tính khoảng tin cậy 95% cho hiệu hai trung bình phù hợp.

**Lời giải.**

```r
A <- c(7.2,6.8,7.5,8.0,6.9,7.1,7.8,7.3,6.5,7.6,7.4,7.0,7.9,6.7,7.2)
B <- c(6.5,6.9,7.0,6.2,6.8,7.1,6.4,6.7,6.9,7.2,6.3,6.6,6.8,7.0,6.5,6.9,6.7,6.4)

var.test(A, B)   # kiem dinh H0: phuong sai bang nhau truoc

t.test(A, B, var.equal = TRUE)$conf.int    # neu var.test khong bac bo H0
t.test(A, B, var.equal = FALSE)$conf.int   # phuong an an toan neu con nghi ngo
```

Nếu `var.test()` cho $p$-value $>0.05$, có cơ sở dùng khoảng tin cậy pooled; ngược lại nên báo cáo khoảng Welch.

## Bài 5 — Kiểm định trung bình một mẫu, một phía

**Đề bài.** Nhà sản xuất tuyên bố tuổi thọ trung bình bóng đèn là $\ge 1000$ giờ. Mẫu $20$ bóng có $\bar x = 985$, $s=40$. Với mức ý nghĩa $5\%$, có đủ bằng chứng bác bỏ tuyên bố của nhà sản xuất không?

**Lời giải.** $H_0:\mu\ge1000$ (tương đương $H_0:\mu=1000$ ở biên), $H_1:\mu<1000$.

```r
n <- 20; xbar <- 985; s <- 40; mu0 <- 1000
t_obs <- (xbar - mu0)/(s/sqrt(n))
df <- n - 1
p_value <- pt(t_obs, df = df)
c(t_obs = t_obs, p_value = p_value)
```

$t_{obs}\approx -1.677$, $p\text{-value}\approx 0.055$. Vì $p>0.05$, **không đủ cơ sở bác bỏ** $H_0$ ở mức $5\%$ — chưa đủ bằng chứng thống kê để nói tuổi thọ trung bình thấp hơn $1000$ giờ (dù giá trị mẫu thấp hơn, sự khác biệt chưa đạt ý nghĩa thống kê).

## Bài 6 — Kiểm định tỷ lệ một mẫu

**Đề bài.** Một nhà thuốc tuyên bố tỷ lệ khách hàng quay lại mua thuốc là $60\%$. Khảo sát $150$ khách có $80$ người quay lại. Kiểm định hai phía ở mức $5\%$.

**Lời giải.**

```r
x <- 80; n <- 150; p0 <- 0.6
prop.test(x, n, p = p0, alternative = "two.sided", correct = FALSE)
```

$\hat p = 0.533$, $p\text{-value}$ tính được so với $0.05$ để quyết định. Nếu $p>0.05$: không đủ cơ sở bác bỏ tỷ lệ $60\%$ mà nhà thuốc tuyên bố.

## Bài 7 — Kiểm định hai mẫu bắt cặp

**Đề bài.** Đo huyết áp tâm thu của $10$ bệnh nhân trước và sau khi dùng thuốc: `truoc <- c(145,150,138,160,155,148,152,142,158,149)`, `sau <- c(138,142,135,150,148,140,145,138,150,143)`. Kiểm định thuốc có làm giảm huyết áp không, mức ý nghĩa $5\%$.

**Lời giải.** $H_0:\mu_d=0$ ($d=\text{trước}-\text{sau}$), $H_1:\mu_d>0$ (trước cao hơn sau, tức thuốc có tác dụng giảm).

```r
truoc <- c(145,150,138,160,155,148,152,142,158,149)
sau   <- c(138,142,135,150,148,140,145,138,150,143)

t.test(truoc, sau, paired = TRUE, alternative = "greater")
```

Nếu $p\text{-value}\le 0.05$: đủ bằng chứng kết luận thuốc có tác dụng làm giảm huyết áp tâm thu.

## Bài 8 — Kiểm định hai phương sai

**Đề bài.** Với dữ liệu Bài 4 (`A`, `B`), kiểm định chính thức $H_0:\sigma_A^2=\sigma_B^2$ ở mức $5\%$.

**Lời giải.**

```r
var.test(A, B, alternative = "two.sided", conf.level = 0.95)
```

Đọc `p-value` trong output: nếu $>0.05$, không đủ cơ sở bác bỏ giả thuyết hai phương sai bằng nhau — hợp lý để dùng `var.equal=TRUE` trong `t.test()` ở các bài toán liên quan.

## Bài 9 — Kiểm định phương sai một mẫu

**Đề bài.** Quy trình sản xuất yêu cầu độ lệch chuẩn đường kính trục không vượt quá $0.05$ mm. Đo $15$ trục cho $s=0.062$. Kiểm định $H_1:\sigma>0.05$ ở mức $5\%$.

**Lời giải.**

```r
n <- 15; s <- 0.062; sigma0 <- 0.05
q_obs <- (n-1)*s^2/sigma0^2
df <- n-1
p_value <- 1 - pchisq(q_obs, df = df)
c(q_obs = q_obs, p_value = p_value)
```

Nếu $p\text{-value}\le 0.05$: đủ bằng chứng cho thấy độ lệch chuẩn thực tế vượt tiêu chuẩn cho phép, quy trình cần được kiểm tra lại.

## Bài 10 — Kiểm định hai tỷ lệ

**Đề bài.** Tỷ lệ chuyển đổi (mua hàng) của hai phiên bản landing page: A có $45/500$, B có $62/520$. Kiểm định hai phía xem hai phiên bản có khác biệt về tỷ lệ chuyển đổi không.

**Lời giải.**

```r
prop.test(x = c(45, 62), n = c(500, 520), alternative = "two.sided", correct = FALSE)
```

Đọc $p$-value: nếu $\le0.05$, kết luận có sự khác biệt có ý nghĩa thống kê về tỷ lệ chuyển đổi giữa hai phiên bản.

## Bài 11 — Hồi quy tuyến tính đơn đầy đủ

**Đề bài.** Dữ liệu số giờ học (`gio_hoc`) và điểm thi (`diem`) của $10$ sinh viên:

```r
gio_hoc <- c(2,4,3,6,5,7,1,8,4,6)
diem    <- c(5.0,6.2,5.8,7.5,7.0,8.2,4.5,8.8,6.5,7.8)
```

a) Ước lượng mô hình hồi quy `diem ~ gio_hoc`. b) Kiểm định $H_0:\beta_1=0$. c) Tính $R^2$. d) Dự đoán điểm thi cho sinh viên học $5.5$ giờ kèm khoảng dự đoán $95\%$. e) Kiểm tra giả định qua đồ thị phần dư.

**Lời giải.**

```r
gio_hoc <- c(2,4,3,6,5,7,1,8,4,6)
diem    <- c(5.0,6.2,5.8,7.5,7.0,8.2,4.5,8.8,6.5,7.8)

fit <- lm(diem ~ gio_hoc)
summary(fit)                 # a, b: he so va p-value cho beta1

# c
summary(fit)$r.squared
cor(gio_hoc, diem)^2         # doi chieu

# d
predict(fit, newdata = data.frame(gio_hoc = 5.5),
        interval = "prediction", level = 0.95)

# e
plot(fitted(fit), resid(fit), xlab="Gia tri du doan", ylab="Phan du")
abline(h = 0, col = "red", lty = 2)
qqnorm(resid(fit)); qqline(resid(fit), col = "red")
```

Diễn giải: hệ số góc $\hat\beta_1$ dương và có `Pr(>|t|)` nhỏ cho thấy số giờ học có quan hệ tuyến tính thuận và có ý nghĩa thống kê với điểm thi; $R^2$ cao (thường $>0.85$ với dữ liệu tuyến tính rõ như trên) cho thấy phần lớn biến thiên điểm thi được giải thích bởi số giờ học. Khoảng dự đoán tại `gio_hoc=5.5` rộng hơn khoảng tin cậy tương ứng vì phải tính thêm phương sai của một quan sát mới.

## Bài 12 — Phân biệt khoảng tin cậy và khoảng dự đoán trong hồi quy

**Đề bài.** Với mô hình Bài 11, so sánh độ rộng của khoảng tin cậy và khoảng dự đoán tại `gio_hoc = 5.5`.

**Lời giải.**

```r
ci <- predict(fit, newdata = data.frame(gio_hoc = 5.5), interval = "confidence")
pi <- predict(fit, newdata = data.frame(gio_hoc = 5.5), interval = "prediction")
rbind(confidence = ci, prediction = pi)
```

Khoảng `prediction` luôn rộng hơn khoảng `confidence` ở cùng giá trị $x_0$ — đây là điểm cần nhấn mạnh khi đối chiếu kết quả trong bài thi.

## Bài 13 — Tổng hợp: từ khoảng tin cậy suy ra kết luận kiểm định

**Đề bài.** Với dữ liệu Bài 1 (`do_am`), khoảng tin cậy $95\%$ cho trung bình đã tính là $(4.85, 5.21)$. Không tính lại kiểm định, hãy cho biết: kiểm định hai phía $H_0:\mu=5.3$ ở mức $5\%$ có bị bác bỏ hay không? Vì sao?

**Lời giải.** Vì $5.3$ nằm **ngoài** khoảng tin cậy $95\%$ đã tính $(4.85,\,5.21)$, theo tính tương đương giữa khoảng tin cậy và kiểm định hai phía, ta bác bỏ $H_0:\mu=5.3$ ở mức ý nghĩa $5\%$ mà không cần tính lại thống kê $t$ hay $p$-value.

```r
# Kiem tra lai bang tinh truc tiep
t.test(do_am, mu = 5.3, alternative = "two.sided")
```
