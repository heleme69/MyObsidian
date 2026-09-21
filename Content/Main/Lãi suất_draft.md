
# Giá trị thời gian của tiền và Hàm tích lũy

Giá trị thời gian của tiền (TVM - Time Value of Money) là nguyên lý nền tảng xác định rằng một đơn vị tiền tệ ở hiện tại luôn có giá trị kinh tế cao hơn đơn vị tiền tệ đó trong tương lai do chi phí cơ hội của vốn, lạm phát bào mòn sức mua và rủi ro tín dụng. Dòng tiền (CF - Cash Flow) phát sinh tại thời điểm càng xa thì giá trị chiết khấu quy đổi về hiện tại càng nhỏ.

> [!def] Hàm số lượng (Amount Function)
> Cho khoản vốn gốc ban đầu $k > 0$ đầu tư tại thời điểm $t = 0$. Hàm số lượng $A(t)$ xác định tổng giá trị thị trường của khoản đầu tư tích lũy đến thời điểm $t \ge 0$, thỏa mãn điều kiện biên ban đầu $A(0) = k$.

> [!exm]
> Giả sử gửi số tiền ban đầu $k = 1.000$ USD vào một tài khoản. Nếu sau $t = 3$ năm số dư tài khoản tăng lên thành $1.250$ USD thì giá trị của hàm số lượng tại các thời điểm tương ứng là $A(0) = 1.000$ USD và $A(3) = 1.250$ USD.

> [!def] Hàm tích lũy (Accumulation Function)
> Hàm tích lũy $a(t)$ ghi nhận giá trị tích lũy tại thời điểm $t \ge 0$ của đúng một đơn vị tiền tệ được đầu tư tại gốc thời gian $t = 0$. Mối quan hệ giữa hàm số lượng và hàm tích lũy được định nghĩa bởi:
> $$a(t) = \frac{A(t)}{A(0)} = \frac{A(t)}{k}$$
> Các tính chất giải tích của $a(t)$:
> 1. Chuẩn hóa tại gốc tọa độ: $a(0) = \frac{A(0)}{A(0)} = 1$.
> 2. Tính đơn điệu: $a(t)$ là hàm không giảm theo thời gian $t \ge 0$ trong môi trường lãi suất không âm.
> 3. Tính liên tục: $a(t)$ liên tục trên $[0, \infty)$ nếu quá trình tích lũy lãi diễn ra liên tục.

> [!exm]
> Một khoản tiền gửi ban đầu $A(0) = 500$ USD tăng trưởng theo hàm số lượng $A(t) = 500(1 + 0,08t)$. Hàm tích lũy tương ứng là $a(t) = \frac{500(1 + 0,08t)}{500} = 1 + 0,08t$. Tại $t = 5$ năm, giá trị tích lũy của một đơn vị tiền là $a(5) = 1 + 0,08(5) = 1,40$ USD, và giá trị số lượng tương ứng là $A(5) = 500 \times 1,40 = 700$ USD.

> [!def] Lãi suất thực tế (Effective Rate of Interest)
> Lãi suất thực tế của kỳ thứ $n$, ký hiệu là $i_n$, là tỷ số giữa lượng tiền lãi thu được trong kỳ thứ $n$ trên tổng giá trị tích lũy hiện diện ở đầu kỳ đó (thời điểm $n-1$):
> $$i_n = \frac{A(n) - A(n-1)}{A(n-1)} = \frac{a(n) - a(n-1)}{a(n-1)}$$
> Ý nghĩa kinh tế của $i_n$ là đo lường hiệu suất sinh lời cục bộ của riêng kỳ hạn thứ $n$ dựa trên cơ sở quy mô vốn khả dụng tại thời điểm bắt đầu kỳ đó.

> [!exm]
> Xét quỹ đầu tư có giá trị tài sản qua ba năm lần lượt là $A(0) = 100$ USD, $A(1) = 110$ USD, và $A(2) = 132$ USD. Lãi suất thực tế của năm thứ nhất là $i_1 = \frac{110 - 100}{100} = 10\%$, và lãi suất thực tế của năm thứ hai là $i_2 = \frac{132 - 110}{110} = \frac{22}{110} = 20\%$.

> [!thm] Quy luật suy giảm của lãi suất thực tế theo cơ chế lãi suất đơn
> Nếu một khoản đầu tư tăng trưởng theo cơ chế lãi suất đơn với lãi suất danh nghĩa cố định $i > 0$, tức $a(t) = 1 + it$, thì lãi suất thực tế $i_n$ giảm nghiêm ngặt theo chỉ số kỳ hạn $n$ và hội tụ về 0 khi thời gian tiến ra vô cùng:
> $$i_n = \frac{i}{1 + i(n-1)}, \quad \lim_{n \to \infty} i_n = 0$$

> [!prf]
> Ta áp dụng định nghĩa lãi suất thực tế cho kỳ $n$:
> $$i_n = \frac{a(n) - a(n-1)}{a(n-1)}$$
> Thay hàm tích lũy lãi đơn $a(t) = 1 + it$ vào biểu thức:
> $$a(n) = 1 + in$$
> $$a(n-1) = 1 + i(n-1)$$
> Tử số biểu diễn tiền lãi thu được trong kỳ $n$:
> $$a(n) - a(n-1) = (1 + in) - (1 + i(n-1)) = in - in + i = i$$
> Mẫu số là giá trị tích lũy đầu kỳ $n$:
> $$a(n-1) = 1 + i(n-1)$$
> Lập tỷ số ta thu được biểu thức giải tích:
> $$i_n = \frac{i}{1 + i(n-1)}$$
> Vì $i > 0$, mẫu số $1 + i(n-1)$ là hàm bậc nhất tăng nghiêm ngặt theo $n$. Khi $n \to \infty$, mẫu số tiến đến vô cực, kéo theo phân số tiến về 0:
> $$\lim_{n \to \infty} i_n = \lim_{n \to \infty} \frac{i}{1 + i(n-1)} = 0$$

> [!exm]
> Với khoản vay tính lãi đơn $i = 10\%$/năm. Ở năm thứ nhất, $i_1 = \frac{0,10}{1 + 0,10(0)} = 10\%$. Ở năm thứ hai, $i_2 = \frac{0,10}{1 + 0,10(1)} = \frac{0,10}{1,10} \approx 9,09\%$. Đến năm thứ 11, tỷ suất này chỉ còn $i_{11} = \frac{0,10}{1 + 0,10(10)} = \frac{0,10}{2,00} = 5\%$.

> [!thm] Định lý so sánh quỹ đạo tích lũy giữa lãi suất đơn và lãi suất kép
> Với mọi mức lãi suất $i > 0$ và thời gian $t \ge 0$, tương quan thứ tự giữa hàm tích lũy lãi kép $a_{\text{kép}}(t) = (1+i)^t$ và hàm tích lũy lãi đơn $a_{\text{đơn}}(t) = 1 + it$ thỏa mãn:
> 4. $(1+i)^t < 1+it$ khi $0 < t < 1$.
> 5. $(1+i)^t = 1+it$ khi $t = 0$ hoặc $t = 1$.
> 6. $(1+i)^t > 1+it$ khi $t > 1$.

> [!prf]
> Xét hàm hiệu số $f(t) = (1+i)^t - (1+it)$ xác định trên $[0, \infty)$ với tham số cố định $i > 0$.
> Tại các mút kỳ hạn nguyên cơ sở:
> $$f(0) = (1+i)^0 - (1+0) = 1 - 1 = 0$$
> $$f(1) = (1+i)^1 - (1+i) = 0$$
> Khai triển Taylor của hàm khả vi bậc hai $(1+i)^t = e^{t \ln(1+i)}$ theo biến $t$ quanh lân cận $t = 0$ có dạng:
> $$(1+i)^t = 1 + t \ln(1+i) + \frac{t^2}{2} [\ln(1+i)]^2 + \dots$$
> Hoặc khai triển nhị thức tổng quát:
> $$(1+i)^t = 1 + it + \frac{t(t-1)}{2}i^2 + R_2(t)$$
> Biểu diễn lại hàm sai phân:
> $$f(t) = \frac{t(t-1)}{2}i^2 + \sum_{k=3}^\infty \binom{t}{k} i^k$$
> Xét dấu của số hạng bậc hai chi phối $\frac{t(t-1)}{2}i^2$ khi $i > 0$:
> Khi $0 < t < 1$, ta có $t > 0$ và $t - 1 < 0$, dẫn đến tích $t(t-1) < 0$. Do đó số hạng này âm, kéo theo $f(t) < 0$, nghĩa là $(1+i)^t < 1+it$.
> Khi $t > 1$, ta có $t - 1 > 0$, dẫn đến tích $t(t-1) > 0$. Mặt khác, lấy đạo hàm cấp hai của $(1+i)^t$ theo biến $t$:
> $$\frac{d^2}{dt^2}(1+i)^t = [\ln(1+i)]^2 (1+i)^t > 0 \quad \forall t \ge 0$$
> Hàm $(1+i)^t$ là hàm lồi nghiêm ngặt trên $[0, \infty)$. Đường thẳng $y = 1+it$ là cát tuyến đi qua hai điểm $(0, 1)$ và $(1, 1+i)$ của đồ thị hàm lồi. Theo tính chất hình học của hàm lồi, đồ thị hàm số nằm hoàn toàn phía dưới cát tuyến trên khoảng phân kỳ $(0, 1)$, và nằm hoàn toàn phía trên cát tuyến khi vượt ra ngoài khoảng $[0, 1]$, tức $(1+i)^t > 1+it$ với mọi $t > 1$.

> [!exm]
> Cho lãi suất hàng năm $i = 12\% = 0,12$.
> Tại $t = 0,5$ năm: lãi đơn cho $a(0,5) = 1 + 0,12(0,5) = 1,0600$, trong khi lãi kép cho $a(0,5) = (1,12)^{0,5} \approx 1,0583$ (lãi đơn sinh lợi nhiều hơn).
> Tại $t = 2$ năm: lãi đơn cho $a(2) = 1 + 0,12(2) = 1,2400$, trong khi lãi kép cho $a(2) = (1,12)^2 = 1,2544$ (lãi kép sinh lợi vượt trội).

> [!def] Quy tắc tính ngày trên thị trường tiền tệ (Day Count Conventions)
> Để xác định phân số thời gian $t = \frac{\text{Số ngày tính lãi}}{\text{Số ngày trong một năm chuẩn}}$, thị trường thu nhập cố định sử dụng ba quy chuẩn tính ngày:
> 7. Quy tắc đơn chính xác (Actual/Actual): Đếm chính xác số ngày lịch giữa hai mốc giao dịch và chia cho số ngày thực tế của năm (365 hoặc 366 ngày).
> 8. Quy tắc đơn thông thường (30/360): Giả định mỗi tháng chuẩn hóa có đúng 30 ngày và một năm có 360 ngày.
> 9. Quy tắc ngân hàng (Actual/360): Đếm chính xác số ngày lịch phát sinh nhưng quy đổi trên cơ sở năm ước định 360 ngày.

> [!prp] Tính bất đẳng thức của Quy tắc ngân hàng
> Do số ngày lịch thực tế luôn lớn hơn số ngày quy ước 30 ngày đối với các tháng có 31 ngày, và mẫu số $360 < 365$, phân số thời gian tính theo quy tắc ngân hàng luôn lớn hơn quy tắc đơn chính xác trên cùng một khoảng thời gian lịch:
> $$t_{\text{Banker}} = \frac{\text{Actual Days}}{360} > \frac{\text{Actual Days}}{365} = t_{\text{Exact}}$$
> Hệ quả là Quy tắc ngân hàng luôn mang lại số tiền lãi thực nhận cao nhất cho bên cho vay.

> [!exm]
> Khoản tiền gửi $2.500.000$ USD với lãi suất đơn $5\%$/năm từ ngày 8 tháng 3 đến ngày 3 tháng 10 trong năm không nhuận (khoảng cách thực tế là 209 ngày lịch, khoảng cách theo quy ước 30/360 là 205 ngày):
> Quy tắc Actual/Actual: Tiền lãi thu được là $2.500.000 \times 0,05 \times \frac{209}{365} = 71.575,34$ USD.
> Quy tắc 30/360: Tiền lãi thu được là $2.500.000 \times 0,05 \times \frac{205}{360} = 71.180,56$ USD.
> Quy tắc Actual/360: Tiền lãi thu được là $2.500.000 \times 0,05 \times \frac{209}{360} = 72.569,44$ USD (mang lại mức lãi lớn nhất).

> [!def] Lực lãi suất (Force of Interest)
> Lực lãi suất $\delta_t$ tại thời điểm $t$ là thước đo tốc độ tăng trưởng tức thời theo tỷ lệ của quỹ đầu tư, được tính bằng đạo hàm bậc nhất của hàm tích lũy chia cho chính giá trị tích lũy hiện hành tại thời điểm đó:
> $$\delta_t = \lim_{h \to 0^+} \frac{a(t+h) - a(t)}{h \cdot a(t)} = \frac{a'(t)}{a(t)} = \frac{d}{dt}\ln a(t)$$
> Ý nghĩa toán tài chính của $\delta_t$ tương đương với lãi suất ghép lãi liên tục tại thời điểm cục bộ $t$.

> [!thm] Định lý khôi phục hàm tích lũy từ lực lãi suất
> Cho hàm lực lãi suất $\delta_t$ khả tích trên đoạn $[0, t]$. Hàm tích lũy tổng quát $a(t)$ được khôi phục duy nhất bởi công thức hàm mũ tích phân:
> $$a(t) = \exp\left(\int_0^t \delta_r \, dr\right)$$

> [!prf]
> Từ định nghĩa giải tích của lực lãi suất:
> $$\delta_r = \frac{a'(r)}{a(r)} = \frac{d}{dr}\ln a(r)$$
> Lấy tích phân định hướng hai vế theo biến thời gian $r$ từ cận dưới $0$ đến cận trên $t$:
> $$\int_0^t \delta_r \, dr = \int_0^t \frac{d}{dr}\ln a(r) \, dr$$
> Áp dụng định lý cơ bản của giải tích vi tích phân:
> $$\int_0^t \delta_r \, dr = \left[ \ln a(r) \right]_0^t = \ln a(t) - \ln a(0)$$
> Theo tiên đề chuẩn hóa của hàm tích lũy, ta luôn có $a(0) = 1$, suy ra $\ln a(0) = \ln(1) = 0$:
> $$\int_0^t \delta_r \, dr = \ln a(t)$$
> Lấy hàm số mũ cơ số tự nhiên $e$ cho cả hai vế:
> $$e^{\ln a(t)} = \exp\left(\int_0^t \delta_r \, dr\right)$$
> Do hàm mũ và hàm logarit tự nhiên là hai ánh xạ ngược nhau, ta thu được phương trình nghiệm tổng quát:
> $$a(t) = \exp\left(\int_0^t \delta_r \, dr\right)$$
> Trường hợp lực lãi suất là một hằng số không phụ thuộc thời gian $\delta_t = \delta$:
> $$a(t) = \exp\left(\int_0^t \delta \, dr\right) = e^{\delta t}$$
> Đồng nhất biểu thức trên với cơ chế lãi suất kép $a(t) = (1+i)^t$, ta suy ra hệ thức chuyển đổi cơ bản:
> $$e^{\delta t} = (1+i)^t \iff e^\delta = 1+i \iff \delta = \ln(1+i)$$

> [!exm]
> Một khoản đầu tư vận hành với lực lãi suất biến đổi theo hàm số thời gian $\delta_t = 0,02t$ với $t \ge 0$.
> Hàm tích lũy tương ứng tại thời điểm $t = 4$ năm là:
> $$a(4) = \exp\left(\int_0^4 0,02r \, dr\right) = \exp\left( \left[ 0,01r^2 \right]_0^4 \right) = e^{0,01 \times 16} = e^{0,16} \approx 1,1735$$
> Nếu đầu tư ban đầu $1.000$ USD, giá trị thu được sau $4$ năm là $1.000 \times 1,1735 = 1.173,51$ USD.

# Lợi suất đến hạn và Các công cụ thị trường nợ

> [!def] Lợi suất đến hạn (YTM - Yield to Maturity)
> Lợi suất đến hạn (ký hiệu $i$) là nghiệm lãi suất chiết khấu duy nhất làm cân bằng giá trị thị trường hiện hành $P$ của một công cụ nợ với tổng giá trị hiện tại (PV - Present Value) của toàn bộ chuỗi dòng tiền tương lai (CF - Cash Flow) phát sinh từ công cụ đó:
> $$P = \sum_{t=1}^n \frac{CF_t}{(1+i)^t}$$
> Về bản chất giải tích tài chính, YTM chính là tỷ suất hoàn vốn nội bộ (IRR - Internal Rate of Return) của cấu trúc nợ khi nhà đầu tư nắm giữ chứng khoán đến ngày đáo hạn.

> [!exm]
> Một tín phiếu kỳ hạn 1 năm mệnh giá $1.000$ USD hiện được bán trên thị trường với giá $P = 925,93$ USD. Lợi suất đến hạn $i$ là nghiệm của phương trình $925,93 = \frac{1.000}{1+i}$, suy ra $1+i = \frac{1.000}{925,93} \approx 1,08$, tức YTM đạt mức $8,00\%$/năm.

Bốn công cụ nợ cơ bản trên thị trường tài chính được chuẩn hóa theo hệ thống ký hiệu dòng tiền:
* $LV$ (Loan Value): Quy mô vốn giải ngân ban đầu của hợp đồng vay.
* $CF_t$ (Cash Flow): Dòng tiền thanh toán chuyển giao tại mốc thời gian $t$.
* $FP$ (Fixed Payment): Khoản thanh toán định kỳ cố định (bao gồm hoàn trả gốc và lãi).
* $C$ (Coupon Payment): Khoản tiền trả lãi coupon định kỳ của trái phiếu, xác định qua tích của lãi suất coupon $c$ với mệnh giá $F$ ($C = F \cdot c$).
* $F$ (Face Value / Par Value): Mệnh giá hay giá trị danh nghĩa hoàn trả khi công cụ nợ đáo hạn.
* $P$ (Price): Giá thị trường hiện tại của công cụ nợ.

> [!def] Khoản cho vay đơn giản (Simple Loan)
> Công cụ nợ trong đó bên cho vay cung cấp số vốn $LV$ tại $t=0$, bên vay cam kết thanh toán duy nhất một dòng tiền $CF_n$ bao gồm toàn bộ vốn gốc và lãi tích lũy tại ngày đáo hạn $t=n$:
> $$LV = \frac{CF_n}{(1+i)^n} \iff CF_n = LV(1+i)^n$$

> [!exm]
> Doanh nghiệp vay một khoản vay đơn giản $LV = 10.000.000$ USD trong thời hạn $n = 3$ năm với thỏa thuận lãi suất $i = 6\%$/năm. Dòng tiền phải thanh toán khi đáo hạn là $CF_3 = 10.000.000 \times (1 + 0,06)^3 = 11.910.160$ USD.

> [!def] Khoản cho vay thanh toán cố định (Fixed-Payment Loan)
> Hợp đồng tín dụng trong đó bên đi vay nhận số tiền $LV$ ban đầu và hoàn trả dần bằng các khoản thanh toán bằng nhau $FP$ định kỳ qua $n$ giai đoạn liên tiếp:
> $$LV = \sum_{t=1}^n \frac{FP}{(1+i)^t}$$

> [!thm] Công thức nghiệm đóng của Niên kim cho khoản vay thanh toán cố định
> Khoản thanh toán định kỳ $FP$ của khoản vay giá trị $LV$, kỳ hạn $n$ kỳ, lãi suất mỗi kỳ $i > 0$ được xác định qua công thức giá trị hiện tại của niên kim thông thường $a_{\overline{n}|i}$:
> $$LV = FP \cdot a_{\overline{n}|i} = FP \cdot \left[ \frac{1 - (1+i)^{-n}}{i} \right] \iff FP = LV \cdot \left[ \frac{i}{1 - (1+i)^{-n}} \right]$$

> [!prf]
> Triển khai tổng giá trị hiện tại của chuỗi dòng tiền thanh toán đều:
> $$LV = \frac{FP}{1+i} + \frac{FP}{(1+i)^2} + \dots + \frac{FP}{(1+i)^n}$$
> Đặt thừa số chung $FP$ và ký hiệu hệ số chiết khấu kỳ hạn là $v = \frac{1}{1+i}$:
> $$LV = FP \left( v + v^2 + v^3 + \dots + v^n \right)$$
> Biểu thức trong ngoặc đơn là tổng của một cấp số nhân hữu hạn gồm $n$ số hạng, với số hạng đầu tiên $u_1 = v$ và công bội $q = v$. Vì $i > 0$ nên $v < 1$. Áp dụng công thức tính tổng cấp số nhân:
> $$S_n = u_1 \frac{1 - q^n}{1 - q} = v \frac{1 - v^n}{1 - v}$$
> Biến đổi mẫu số bằng cách thay $v = \frac{1}{1+i}$:
> $$1 - v = 1 - \frac{1}{1+i} = \frac{(1+i) - 1}{1+i} = \frac{i}{1+i} = i \cdot v$$
> Thay lại vào biểu thức tổng $S_n$:
> $$S_n = v \frac{1 - v^n}{i \cdot v} = \frac{1 - v^n}{i} = \frac{1 - (1+i)^{-n}}{i} = a_{\overline{n}|i}$$
> Nhân lại với khoản thanh toán định kỳ $FP$, ta có điều phải chứng minh:
> $$LV = FP \cdot \left[ \frac{1 - (1+i)^{-n}}{i} \right]$$
> Lấy nghịch đảo biểu thức hệ số niên kim, ta suy ra giá trị cần tính của $FP$:
> $$FP = LV \cdot \left[ \frac{i}{1 - (1+i)^{-n}} \right]$$

> [!exm]
> Một khoản thế chấp mua nhà trị giá $LV = 100.000$ USD kỳ hạn $n = 20$ năm với lãi suất cố định $i = 7\%$/năm. Khoản thanh toán hàng năm là:
> $$FP = 100.000 \cdot \left[ \frac{0,07}{1 - (1,07)^{-20}} \right] = 100.000 \cdot \left[ \frac{0,07}{1 - 0,258419} \right] = \frac{7.000}{0,741581} \approx 9.439,29 \text{ USD}$$

> [!def] Trái phiếu coupon (Coupon Bond)
> Chứng khoán nợ cam kết chi trả các khoản tiền lãi coupon định kỳ $C = F \cdot c$ cho đến ngày đáo hạn $n$, tại đó nhà phát hành thanh toán khoản coupon cuối cùng kèm theo hoàn trả nguyên vẹn giá trị danh nghĩa $F$:
> $$P = \sum_{t=1}^n \frac{C}{(1+i)^t} + \frac{F}{(1+i)^n} = C \cdot \left[ \frac{1-(1+i)^{-n}}{i} \right] + F(1+i)^{-n}$$

> [!prp] Phân loại trái phiếu theo vị thế thị giá và mệnh giá
> Dựa trên mối quan hệ so sánh giữa lãi suất coupon cam kết $c$ và lợi suất đến hạn thị trường $i$:
> 1. Trái phiếu ngang giá (Par Bond): $c = i \iff P = F$. Nhà đầu tư không phát sinh lãi hay lỗ vốn khi đáo hạn.
> 2. Trái phiếu chiết khấu (Discount Bond): $c < i \iff P < F$. Nhà đầu tư nhận khoản lãi vốn $F - P > 0$ khi đáo hạn để bù đắp cho mức coupon thấp hơn thị trường.
> 3. Trái phiếu phần bù (Premium Bond): $c > i \iff P > F$. Dòng coupon cao hơn thị trường được bù trừ bởi khoản lỗ vốn $F - P < 0$ khi đáo hạn.

> [!exm]
> Trái phiếu mệnh giá $F = 1.000$ USD, kỳ hạn $n = 10$ năm, coupon $c = 8\%$/năm ($C = 80$ USD).
> Nếu thị trường yêu cầu $i = 8\%$: $P = 80 \cdot a_{\overline{10}|8\%} + 1.000(1,08)^{-10} = 1.000$ USD (ngang giá).
> Nếu thị trường yêu cầu $i = 10\%$: $P = 80 \cdot a_{\overline{10}|10\%} + 1.000(1,10)^{-10} = 491,57 + 385,54 = 877,11$ USD (chiết khấu).
> Nếu thị trường yêu cầu $i = 6\%$: $P = 80 \cdot a_{\overline{10}|6\%} + 1.000(1,06)^{-10} = 588,81 + 558,39 = 1.147,20$ USD (phần bù).

> [!def] Trái phiếu chiết khấu (Discount / Zero-Coupon Bond)
> Trái phiếu không thanh toán bất kỳ dòng tiền coupon trung gian nào ($C = 0$). Trái phiếu được bán tại mức thị giá $P < F$ và hoàn trả một lần mệnh giá $F$ tại ngày đáo hạn:
> $$P = \frac{F}{(1+i)^n} \iff i = \left( \frac{F}{P} \right)^{1/n} - 1$$

> [!exm]
> Trái phiếu zero-coupon kỳ hạn $n = 5$ năm, mệnh giá $F = 1.000$ USD, giao dịch ở mức giá $P = 680,58$ USD. Lợi suất đến hạn xác định bởi $i = \left( \frac{1.000}{680,58} \right)^{1/5} - 1 = (1,4693)^0,2 - 1 = 8,00\%$/năm.

> [!def] Trái phiếu vĩnh viễn (Consol / Perpetuity)
> Công cụ nợ có kỳ hạn vô hạn ($n \to \infty$) và không hoàn trả vốn gốc, chỉ cam kết chi trả dòng tiền coupon cố định $C$ định kỳ vĩnh viễn.

> [!thm] Định lý định giá Trái phiếu vĩnh viễn
> Thị giá $P_c$ của một trái phiếu vĩnh viễn với dòng tiền trả $C$ mỗi kỳ và lợi suất chiết khấu $i_c > 0$ bằng tỷ số giữa dòng coupon và lợi suất:
> $$P_c = \frac{C}{i_c} \iff i_c = \frac{C}{P_c}$$

> [!prf]
> Mô hình định giá trái phiếu vĩnh viễn là giới hạn của chuỗi chiết khấu khi số kỳ hạn tiến ra vô cực:
> $$P_c = \lim_{n \to \infty} \sum_{t=1}^n \frac{C}{(1+i_c)^t} = \sum_{t=1}^\infty C(1+i_c)^{-t}$$
> Đặt công bội $x = \frac{1}{1+i_c}$. Vì $i_c > 0$ nên $0 < x < 1$, chuỗi lũy thừa hội tụ tuyệt đối:
> $$P_c = C \sum_{t=1}^\infty x^t = C \left( x + x^2 + x^3 + \dots \right)$$
> Áp dụng định lý tổng cấp số nhân lùi vô hạn với số hạng đầu $u_1 = x$:
> $$P_c = C \cdot \frac{x}{1 - x}$$
> Thay ngược giá trị $x = \frac{1}{1+i_c}$ vào phân thức:
> $$P_c = C \cdot \frac{\frac{1}{1+i_c}}{1 - \frac{1}{1+i_c}} = C \cdot \frac{\frac{1}{1+i_c}}{\frac{(1+i_c) - 1}{1+i_c}} = C \cdot \frac{\frac{1}{1+i_c}}{\frac{i_c}{1+i_c}}$$
> Triệt tiêu mẫu số chung $1+i_c$ ở cả tử và mẫu:
> $$P_c = \frac{C}{i_c}$$

> [!exm]
> Trái phiếu vĩnh viễn War Loans của chính phủ Anh cam kết chi trả cố định $C = 3,50$ GBP hàng năm trên mỗi 100 GBP mệnh giá. Khi lợi suất thị trường giảm sâu xuống $i_c = 1,50\%$, giá trị thị trường lý thuyết của trái phiếu tăng vọt lên mức $P_c = \frac{3,50}{0,0150} = 233,33$ GBP.

> [!def] Lợi suất hiện hành (Current Yield)
> Lợi suất hiện hành $i_c$ là tỷ số giữa dòng tiền lãi coupon danh nghĩa hàng năm $C$ trên thị giá hiện tại $P$ của trái phiếu:
> $$i_c = \frac{C}{P}$$
> Về mặt giải tích, $i_c$ đóng vai trò xấp xỉ bậc một cho YTM khi trái phiếu có kỳ hạn rất dài ($n \ge 20$ năm, do phần giá trị hiện tại của mệnh giá $\frac{F}{(1+i)^n} \approx 0$) hoặc khi thị giá giao dịch tiệm cận mệnh giá ($P \approx F$).

> [!exm]
> Một trái phiếu kỳ hạn 30 năm có lãi suất coupon $10\%$, mệnh giá $1.000$ USD đang giao dịch ở mức giá $P = 1.200$ USD. Lợi suất hiện hành là $i_c = \frac{100}{1.200} \approx 8,33\%$. Mức này cao hơn YTM thực tế ($7,13\%$) vì lợi suất hiện hành bỏ qua khoản lỗ vốn khi giá hội tụ về mệnh giá lúc đáo hạn.

# Lợi suất chiết khấu và Bất thường thị trường

> [!def] Lợi suất trên cơ sở chiết khấu (Discount Basis Yield)
> Lợi suất trên cơ sở chiết khấu $i_{db}$ là chuẩn quy ước niêm yết giá trên thị trường tiền tệ đối với các công cụ ngắn hạn (như Tín phiếu Kho bạc Mỹ - Treasury Bills):
> $$i_{db} = \frac{F - P}{F} \times \frac{360}{D}$$
> trong đó $F$ là mệnh giá hoàn trả, $P$ là giá mua chiết khấu, và $D$ là số ngày lịch thực tế tính từ ngày thanh toán đến ngày đáo hạn.
> Các đặc điểm quy ước làm lệch bản chất của $i_{db}$ so với YTM:
> 1. Dùng mệnh giá tương lai $F$ làm cơ sở tính tỷ lệ sinh lời thay vì số vốn gốc đầu tư thực tế $P$.
> 2. Dùng quy ước năm tài chính gồm 360 ngày thay vì năm thực tế 365 ngày.
> 3. Áp dụng quy tắc tính lãi đơn tuyến tính, bỏ qua quá trình hoàn giá kép.

> [!thm] Công thức chuyển đổi từ Lợi suất chiết khấu sang Lợi suất đến hạn thực tế
> Lợi suất chiết khấu $i_{db}$ luôn đánh giá thấp một cách hệ thống so với lợi suất đến hạn quy đổi theo năm $i_{ytm}$. Mối quan hệ chuyển đổi chính xác được xác định bởi:
> $$i_{ytm} = \frac{365 \cdot i_{db}}{360 - (i_{db} \cdot D)}$$

> [!prf]
> Theo định nghĩa chuẩn hóa của YTM theo quy ước lãi đơn hàng năm trên cơ sở năm chuẩn 365 ngày:
> $$P = \frac{F}{1 + i_{ytm} \left( \frac{D}{365} \right)} \iff i_{ytm} = \frac{F - P}{P} \times \frac{365}{D}$$
> Từ công thức định nghĩa của lợi suất chiết khấu $i_{db}$:
> $$i_{db} = \frac{F - P}{F} \times \frac{360}{D}$$
> Biến đổi đại số để biểu diễn khoản chiết khấu tuyệt đối $F - P$ theo $F$ và $i_{db}$:
> $$F - P = F \cdot i_{db} \left( \frac{D}{360} \right)$$
> Từ đó suy ra giá mua $P$ phụ thuộc vào $F$:
> $$P = F - F \cdot i_{db} \left( \frac{D}{360} \right) = F \left[ 1 - i_{db} \left( \frac{D}{360} \right) \right]$$
> Thay trực tiếp các biểu thức của $F - P$ và $P$ vào công thức của $i_{ytm}$:
> $$i_{ytm} = \frac{F \cdot i_{db} \left( \frac{D}{360} \right)}{F \left[ 1 - i_{db} \left( \frac{D}{360} \right) \right]} \times \frac{365}{D}$$
> Triệt tiêu đại lượng mệnh giá $F$ ở tử số và mẫu số:
> $$i_{ytm} = \frac{i_{db} \left( \frac{D}{360} \right)}{1 - i_{db} \left( \frac{D}{360} \right)} \times \frac{365}{D} = \frac{i_{db} \cdot \frac{D}{360}}{\frac{360 - i_{db} \cdot D}{360}} \times \frac{365}{D}$$
> Rút gọn thừa số $\frac{D}{360}$ ở cả tử số và mẫu số:
> $$i_{ytm} = \frac{i_{db}}{360 - i_{db} \cdot D} \times 365 = \frac{365 \cdot i_{db}}{360 - (i_{db} \cdot D)}$$
> Vì $P < F$ dẫn đến $\frac{F-P}{F} < \frac{F-P}{P}$, đồng thời $\frac{360}{D} < \frac{365}{D}$, ta luôn có $i_{db} < i_{ytm}$ với mọi $i_{db} > 0$.

> [!exm]
> Một tín phiếu Kho bạc Mỹ kỳ hạn $D = 91$ ngày, mệnh giá $F = 10.000$ USD được niêm yết tại mức $i_{db} = 6,0\%$.
> Giá thị trường là $P = 10.000 \left[ 1 - 0,06 \left( \frac{91}{360} \right) \right] = 9.848,33$ USD.
> Lợi suất đến hạn thực tế quy đổi theo năm là:
> $$i_{ytm} = \frac{365 \times 0,06}{360 - (0,06 \times 91)} = \frac{21,9}{360 - 5,46} = \frac{21,9}{354,54} \approx 6,177\% \approx 6,18\%$$
> Mức niêm yết $i_{db}$ đã đánh giá thấp lợi suất thực tế $18$ điểm cơ bản ($6,18\% - 6,00\% = 0,18\%$).

> [!def] Lãi suất danh nghĩa âm và Ranh giới dưới bằng 0 (ZLB - Zero Lower Bound)
> Lý thuyết tiền tệ cổ điển cho rằng lãi suất danh nghĩa bị chặn dưới tại mức $0\%$ ($i \ge 0$) do sự tồn tại của tiền mặt vật chất có mức sinh lời danh nghĩa bằng $0\%$. Tuy nhiên, trạng thái bất thường lãi suất âm ($i < 0$) vẫn xảy ra trong thực tế khi thị giá chứng khoán vượt mệnh giá ($P > F$).
> Cơ chế kinh tế cho phép tồn tại mức sinh lời âm:
> 4. Chi phí lưu trữ, bảo quản an ninh và vận chuyển khối lượng lớn tiền mặt vật chất của các định chế vượt quá ngưỡng tổn thất âm (thường từ $0,25\%$ đến $0,50\%$).
> 5. Quy định an toàn vĩ mô buộc các ngân hàng phải nắm giữ tài sản có tính thanh khoản cao (LCR - Liquidity Coverage Ratio) và tài sản bảo đảm trong các giao dịch tái mua (Repo).

> [!exm]
> Trong cuộc khủng hoảng tài chính toàn cầu tháng 11/2008, tín phiếu Kho bạc Mỹ kỳ hạn 3 tháng từng giao dịch ở mức lợi suất âm do dòng vốn tháo chạy tìm nơi trú ẩn an toàn. Giai đoạn 2014–2021, Ngân hàng Trung ương Châu Âu (ECB) áp dụng lãi suất tiền gửi âm $-0,50\%$, khiến hàng nghìn tỷ EUR trái phiếu chính phủ giao dịch với thị giá cao hơn mệnh giá ($P > F$).

# Lãi suất thực, Lạm phát và Méo mó do Thuế

> [!def] Lãi suất danh nghĩa và Lãi suất thực
> Lãi suất danh nghĩa $i$ (Nominal Interest Rate) đo lường tốc độ gia tăng thuần túy về mặt số lượng đơn vị tiền tệ danh nghĩa của một khoản đầu tư.
> Lãi suất thực $i_r$ (Real Interest Rate) đo lường tốc độ gia tăng về khối lượng hàng hóa, dịch vụ vật chất thực tế có thể mua được, phản ánh sự thay đổi sức mua của khoản đầu tư sau khi đã hiệu chỉnh theo biến động giá cả.

> [!def] Lãi suất thực Ex-ante và Ex-post
> Do lạm phát trong tương lai là một biến số ngẫu nhiên, thị trường phân biệt hai trạng thái lãi suất thực:
> 1. Lãi suất thực Ex-ante ($i_r^e$): Xác định tại thời điểm bắt đầu hợp đồng dựa trên tỷ lệ lạm phát kỳ vọng $\pi^e$, chi phối quyết định cho vay và đầu tư:
>    $$i_r^e \approx i - \pi^e$$
> 2. Lãi suất thực Ex-post ($i_r^{\text{actual}}$): Xác định khi hợp đồng đáo hạn dựa trên tỷ lệ lạm phát thực tế $\pi$ diễn ra trong kỳ, quyết định sự phân phối lại sức mua ròng giữa bên vay và bên cho vay:
>    $$i_r^{\text{actual}} \approx i - \pi$$
> Với cú sốc lạm phát bất ngờ $\epsilon = \pi - \pi^e$, ta có $i_r^{\text{actual}} = i_r^e - \epsilon$. Khi $\epsilon > 0$ (lạm phát thực tế cao hơn dự kiến), bên cho vay chịu thiệt hại sức mua còn bên đi vay được giảm bớt gánh nặng nợ thực tế.

> [!exm]
> Cuối thập niên 1970 tại Mỹ, lãi suất danh nghĩa thế chấp ở mức cao kỷ lục từ $10\%$ đến $12\%$, tạo cảm giác tiền vay đắt đỏ. Tuy nhiên lạm phát thực tế chạm ngưỡng $13\%$ đến $14\%$, khiến lãi suất thực tế rơi xuống mức âm: $i_r \approx 11\% - 13\% = -2\%$. Chi phí đi vay thực tế âm đã kích thích làn sóng vay nợ để đầu cơ bất động sản.

> [!thm] Phương trình Fisher về cấu trúc Lãi suất và Lạm phát
> Giữa lãi suất danh nghĩa $i$, lãi suất thực $i_r$ và tỷ lệ lạm phát kỳ vọng $\pi^e$ tồn tại đồng nhất thức hoàn giá kép:
> $$1 + i = (1 + i_r)(1 + \pi^e)$$
> Khi các biến số $i_r$ và $\pi^e$ tương đối nhỏ ($\le 10\%$), phương trình được xấp xỉ tuyến tính bởi:
> $$i \approx i_r + \pi^e \iff i_r \approx i - \pi^e$$

> [!prf]
> Xét tại thời điểm $t = 0$, nhà đầu tư sử dụng khoản tiền $M_0$ để mua một rổ hàng hóa chuẩn có đơn giá thị trường là $P_0$. Số lượng hàng hóa thực mua được là:
> $$Q_0 = \frac{M_0}{P_0}$$
> Sau một chu kỳ đầu tư tại $t = 1$, số vốn tiền tệ tăng trưởng theo lãi suất danh nghĩa $i$ thành:
> $$M_1 = M_0(1 + i)$$
> Đồng thời, do tác động của lạm phát, đơn giá của rổ hàng hóa tăng lên thành:
> $$P_1 = P_0(1 + \pi^e)$$
> Số lượng rổ hàng hóa thực tế nhà đầu tư có thể mua được tại $t = 1$ là:
> $$Q_1 = \frac{M_1}{P_1} = \frac{M_0(1 + i)}{P_0(1 + \pi^e)} = Q_0 \left[ \frac{1 + i}{1 + \pi^e} \right]$$
> Tốc độ tăng trưởng sức mua thực tế chính là tỷ lệ biến thiên của khối lượng hàng hóa $Q$, theo định nghĩa tương đương với $1 + i_r$:
> $$\frac{Q_1}{Q_0} = 1 + i_r = \frac{1 + i}{1 + \pi^e}$$
> Nhân chéo mẫu số sang vế trái ta thu được đẳng thức Fisher chính xác:
> $$1 + i = (1 + i_r)(1 + \pi^e)$$
> Khai triển vế phải của phương trình:
> $$1 + i = 1 + i_r + \pi^e + i_r \cdot \pi^e$$
> Triệt tiêu số $1$ ở cả hai vế:
> $$i = i_r + \pi^e + i_r \cdot \pi^e$$
> Khi $i_r$ và $\pi^e$ có độ lớn nhỏ, tích chéo $i_r \cdot \pi^e \approx 0$, cho phép rút gọn thành xấp xỉ tuyến tính:
> $$i \approx i_r + \pi^e$$

> [!exm]
> Khoản cho vay có lãi suất danh nghĩa $i = 8,5\%$ và lạm phát kỳ vọng $\pi^e = 3,5\%$.
> Theo xấp xỉ tuyến tính: $i_r^e \approx 8,5\% - 3,5\% = 5,00\%$.
> Theo công thức Fisher chính xác: $1 + i_r^e = \frac{1 + 0,085}{1 + 0,035} = \frac{1,085}{1,035} \approx 1,0483 \implies i_r^e = 4,83\%$.

> [!thm] Tác động méo mó của thuế thu nhập lên Lãi suất thực sau thuế
> Khi hệ thống thuế thu nhập đánh thuế trên toàn bộ phần lợi nhuận danh nghĩa với thuế suất biên $\tau \in [0, 1)$, lãi suất thực sau thuế $i_{r,at}$ của nhà đầu tư bị suy giảm theo công thức:
> $$i_{r,at} = i_r(1 - \tau) - \tau \cdot \pi^e$$
> Mức độ xói mòn bổ sung $-\tau \cdot \pi^e$ xuất hiện do việc đánh thuế lấn sang phần bù lạm phát.

> [!prf]
> Thuế thu nhập được tính toán trực tiếp trên lãi suất danh nghĩa $i$. Lãi suất danh nghĩa sau thuế mà nhà đầu tư thực nhận là:
> $$i_{at} = i(1 - \tau)$$
> Lãi suất thực sau thuế là mức sinh lời sau thuế đã hiệu chỉnh trừ đi tỷ lệ lạm phát:
> $$i_{r,at} = i_{at} - \pi^e = i(1 - \tau) - \pi^e$$
> Áp dụng phương trình xấp xỉ Fisher $i = i_r + \pi^e$ thay thế vào biểu thức trên:
> $$i_{r,at} = (i_r + \pi^e)(1 - \tau) - \pi^e$$
> Phân phối thừa số $1 - \tau$ vào trong ngoặc đơn:
> $$i_{r,at} = i_r(1 - \tau) + \pi^e(1 - \tau) - \pi^e = i_r(1 - \tau) + \pi^e - \tau \cdot \pi^e - \pi^e$$
> Rút gọn hạng tử $\pi^e - \pi^e = 0$, ta thu được hệ thức:
> $$i_{r,at} = i_r(1 - \tau) - \tau \cdot \pi^e$$

> [!exm]
> Một danh mục đầu tư đạt lợi suất danh nghĩa $i = 7,0\%$ trong bối cảnh lạm phát $\pi^e = 4,0\%$ và thuế suất biên $\tau = 30\%$.
> Lãi suất thực trước thuế là $i_r \approx 7\% - 4\% = 3\%$.
> Lợi suất danh nghĩa sau thuế là $i_{at} = 7\% \times (1 - 0,30) = 4,90\%$.
> Lãi suất thực sau thuế còn lại là $i_{r,at} = 4,90\% - 4,00\% = 0,90\%$.
> Áp dụng công thức suy giảm: $i_{r,at} = 3\%(1 - 0,30) - (0,30 \times 4\%) = 2,1\% - 1,2\% = 0,9\%$, trong đó mức xói mòn thêm do thuế đánh vào lạm phát là $1,2\%$.

> [!def] Chứng khoán bảo vệ khỏi lạm phát (TIPS - Treasury Inflation-Protected Securities)
> Công cụ nợ có cấu trúc bảo toàn sức mua tuyệt đối bằng cách neo giá trị vốn gốc danh nghĩa $F_t$ điều chỉnh liên tục theo Chỉ số giá tiêu dùng (CPI - Consumer Price Index):
> $$F_t = F_0 \times \frac{CPI_t}{CPI_0}$$
> Tiền lãi coupon định kỳ được tính bằng tích của tỷ lệ coupon thực không đổi $c_r$ với giá trị vốn gốc đã điều chỉnh $F_t$: $C_t = c_r \cdot F_t$. Do cả gốc lẫn lãi đều tăng tỷ lệ thuận với lạm phát, YTM của TIPS phản ánh trực tiếp lãi suất thực thuần túy trên thị trường cân bằng.

> [!exm]
> Trái phiếu TIPS kỳ hạn 10 năm phát hành với vốn gốc $F_0 = 1.000$ USD và coupon thực cố định $c_r = 2,0\%$/năm. Nếu sau năm thứ nhất, tỷ lệ lạm phát đạt $5\%$ ($CPI_1 / CPI_0 = 1,05$), vốn gốc được ghi nhận tăng lên $F_1 = 1.000 \times 1,05 = 1.050$ USD. Tiền lãi coupon thực nhận là $C_1 = 2\% \times 1.050 = 21$ USD.

# Độ nhạy cảm giá, Thời lượng và Miễn dịch danh mục

> [!def] Tỷ suất sinh lời trong kỳ nắm giữ (Rate of Return)
> Tỷ suất sinh lời $R$ của một công cụ nợ trong giai đoạn nắm giữ từ thời điểm $t$ đến $t+1$ phản ánh toàn bộ thu nhập từ dòng tiền và biến động giá trị vốn thị trường, tính theo phần trăm của giá mua ban đầu $P_t$:
> $$R = \frac{C + (P_{t+1} - P_t)}{P_t} = \frac{C}{P_t} + \frac{P_{t+1} - P_t}{P_t} = i_c + g$$
> trong đó $i_c = \frac{C}{P_t}$ là lợi suất hiện hành (thành phần thu nhập), và $g = \frac{P_{t+1} - P_t}{P_t}$ là tỷ lệ lãi/lỗ vốn (thành phần giá).

> [!thm] Định lý điều kiện đồng nhất giữa Tỷ suất sinh lời và YTM
> Tỷ suất sinh lời thực nhận $R$ của trái phiếu chỉ bằng đúng lợi suất đến hạn ban đầu $i$ khi và chỉ khi kỳ hạn nắm giữ của nhà đầu tư trùng khớp hoàn toàn với ngày đáo hạn của công cụ ($t = n$).
> Nếu nhà đầu tư chuyển nhượng trái phiếu trước ngày đáo hạn:
> 1. Khi lãi suất thị trường tăng ($i \uparrow$), thị giá sụt giảm ($P_{t+1} < P_t$), tạo ra tỷ lệ lỗ vốn $g < 0$. Với các trái phiếu kỳ hạn dài, khoản lỗ vốn có thể vượt qua thu nhập coupon $i_c$, dẫn đến tỷ suất sinh lời âm ($R < 0$).
> 2. Sự đánh đổi rủi ro: Loại bỏ rủi ro giá bằng cách rút ngắn kỳ hạn sẽ làm tăng rủi ro tái đầu tư (phải tái đầu tư các dòng tiền nhận sớm tại mức lãi suất thấp hơn khi thị trường hạ nhiệt).

> [!exm]
> Một trái phiếu kỳ hạn 20 năm, mệnh giá $1.000$ USD, coupon $10\%$, được mua tại mệnh giá $P_0 = 1.000$ USD (YTM ban đầu $i = 10\%$). Sau 1 năm, lãi suất thị trường tăng lên $12\%$ khiến giá trái phiếu (khi đó còn 19 năm) giảm xuống còn $P_1 = 852,93$ USD.
> Tỷ lệ lỗ vốn là $g = \frac{852,93 - 1.000}{1.000} = -14,71\%$.
> Tổng tỷ suất sinh lời thực tế nhận được là $R = 10\% - 14,71\% = -4,71\%$ (lợi nhuận âm dù coupon cao).

> [!def] Thời lượng Macaulay (Macaulay Duration)
> Thời lượng Macaulay (ký hiệu $DUR$) là số đo thời gian bình quân gia quyền cho đến khi nhận được toàn bộ các dòng tiền kỳ vọng của công cụ nợ, trong đó trọng số $w_t$ gán cho mỗi mốc thời gian $t$ chính là tỷ trọng giá trị hiện tại của dòng tiền $CF_t$ so với tổng thị giá trái phiếu $P$:
> $$DUR = \sum_{t=1}^n t \cdot w_t = \frac{\sum_{t=1}^n t \cdot \frac{CF_t}{(1+i)^t}}{\sum_{t=1}^n \frac{CF_t}{(1+i)^t}} = \frac{1}{P} \sum_{t=1}^n t \cdot \frac{CF_t}{(1+i)^t}$$
> Do tổng các trọng số chuẩn hóa $\sum_{t=1}^n w_t = \frac{\sum PV(CF_t)}{P} = 1$, đơn vị đo lường của $DUR$ được tính bằng năm.

> [!prp] Các đặc tính cấu trúc của Thời lượng Macaulay
> 1. Đối với trái phiếu zero-coupon, $DUR = n$ vì toàn bộ trọng số dòng tiền tập trung duy nhất tại thời điểm đáo hạn ($w_n = 1$).
> 2. Giữ nguyên các yếu tố khác, khi kỳ hạn danh nghĩa $n$ tăng thì $DUR$ tăng.
> 3. Giữ nguyên kỳ hạn, khi lãi suất coupon $c$ tăng thì $DUR$ giảm (do dòng tiền thanh toán sớm nhận tỷ trọng chiết khấu lớn hơn).
> 4. Giữ nguyên các yếu tố khác, khi lợi suất $i$ tăng thì $DUR$ giảm (do các dòng tiền ở xa trong tương lai bị chiết khấu mạnh hơn).

> [!exm]
> Trái phiếu kỳ hạn 3 năm, mệnh giá $1.000$ USD, coupon $5\%$/năm, YTM $i = 5\%$, giá $P = 1.000$ USD.
> Các dòng tiền chiết khấu:
> Năm 1: $PV_1 = \frac{50}{1,05} = 47,62$ USD ($w_1 = 0,04762$)
> Năm 2: $PV_2 = \frac{50}{(1,05)^2} = 45,35$ USD ($w_2 = 0,04535$)
> Năm 3: $PV_3 = \frac{1.050}{(1,05)^3} = 907,03$ USD ($w_3 = 0,90703$)
> Thời lượng Macaulay:
> $DUR = 1(0,04762) + 2(0,04535) + 3(0,90703) = 0,04762 + 0,09070 + 2,72109 \approx 2,86 \text{ năm} < 3 \text{ năm}$.

> [!def] Thời lượng hiệu chỉnh (Modified Duration)
> Thời lượng hiệu chỉnh $DUR^*$ là thước đo độ nhạy co giãn giá của chứng khoán nợ trước sự dịch chuyển của lãi suất thị trường:
> $$DUR^* = \frac{DUR}{1+i}$$

> [!def] Độ lồi (Convexity)
> Độ lồi $CX$ là đạo hàm bậc hai chuẩn hóa của giá trái phiếu theo lợi suất đến hạn, phản ánh độ cong phi tuyến của đồ thị giá - lợi suất:
> $$CX = \frac{1}{P} \frac{d^2P}{di^2} = \frac{1}{P(1+i)^2} \sum_{t=1}^n \frac{t(t+1)CF_t}{(1+i)^t}$$

> [!thm] Xấp xỉ biến động giá trái phiếu bằng chuỗi Taylor bậc hai
> Biến động phần trăm giá trái phiếu $\frac{\Delta P}{P}$ trước một cú sốc thay đổi lãi suất $\Delta i$ được xác định bởi mô hình xấp xỉ Taylor bậc hai kết hợp giữa thời lượng hiệu chỉnh và độ lồi:
> $$\frac{\Delta P}{P} \approx -DUR^* \cdot \Delta i + \frac{1}{2} CX (\Delta i)^2$$

> [!prf]
> Hàm định giá trái phiếu theo lãi suất là $P(i) = \sum_{t=1}^n CF_t (1+i)^{-t}$.
> Lấy đạo hàm bậc nhất của $P(i)$ theo biến $i$:
> $$\frac{dP}{di} = \sum_{t=1}^n (-t) CF_t (1+i)^{-t-1} = -\frac{1}{1+i} \sum_{t=1}^n t \frac{CF_t}{(1+i)^t}$$
> Nhận diện biểu thức tổng phía sau chính là tử số của Thời lượng Macaulay: $\sum_{t=1}^n t \frac{CF_t}{(1+i)^t} = P \cdot DUR$. Thay thế vào ta có:
> $$\frac{dP}{di} = -\frac{1}{1+i} \cdot (P \cdot DUR)$$
> Chia hai vế cho $P$, ta thu được độ nhạy giá tương đối bậc một:
> $$\frac{1}{P}\frac{dP}{di} = -\frac{DUR}{1+i} = -DUR^*$$
> Lấy tiếp đạo hàm bậc hai của hàm giá $P(i)$ theo biến $i$:
> $$\frac{d^2P}{di^2} = \frac{d}{di}\left[ -\sum_{t=1}^n t CF_t (1+i)^{-t-1} \right] = \sum_{t=1}^n t(t+1) CF_t (1+i)^{-t-2} = \frac{1}{(1+i)^2} \sum_{t=1}^n \frac{t(t+1)CF_t}{(1+i)^t}$$
> Chuẩn hóa bằng cách chia cho $P$ ta thu được công thức định nghĩa độ lồi $CX$:
> $$CX = \frac{1}{P}\frac{d^2P}{di^2}$$
> Khai triển hàm $P(i + \Delta i)$ thành chuỗi Taylor vô hạn quanh điểm $i$:
> $$\Delta P = P(i + \Delta i) - P(i) = \frac{dP}{di}\Delta i + \frac{1}{2}\frac{d^2P}{di^2}(\Delta i)^2 + R_2$$
> Chia hai vế cho giá trị ban đầu $P$:
> $$\frac{\Delta P}{P} = \left( \frac{1}{P}\frac{dP}{di} \right)\Delta i + \frac{1}{2}\left( \frac{1}{P}\frac{d^2P}{di^2} \right)(\Delta i)^2 + \dots$$
> Thay các đại lượng $DUR^*$ và $CX$ đã chứng minh ở trên vào chuỗi Taylor:
> $$\frac{\Delta P}{P} \approx -DUR^* \cdot \Delta i + \frac{1}{2} CX (\Delta i)^2$$
> Vì $CF_t > 0$ và $t \ge 1$, ta luôn có $CX > 0$ với mọi trái phiếu thông thường. Do đó, số hạng điều chỉnh độ lồi $\frac{1}{2}CX(\Delta i)^2$ luôn mang giá trị dương, làm cho tỷ lệ tăng giá lớn hơn khi lãi suất giảm và làm giảm nhẹ mức tổn thất khi lãi suất tăng.

> [!exm]
> Trái phiếu có thời lượng hiệu chỉnh $DUR^* = 7,5$ năm và độ lồi $CX = 65$.
> Nếu lãi suất tăng $\Delta i = +2\% = +0,02$:
> Thành phần thời lượng: $-7,5 \times 0,02 = -15,00\%$.
> Thành phần độ lồi bù trừ: $+\frac{1}{2} \times 65 \times (0,02)^2 = +0,5 \times 65 \times 0,0004 = +1,30\%$.
> Ước lượng biến động giá thực tế: $\frac{\Delta P}{P} \approx -15,00\% + 1,30\% = -13,70\%$.

> [!thm] Tính cộng gộp tuyến tính của Thời lượng danh mục và Miễn dịch Redington
> Thời lượng của một danh mục đầu tư gồm $m$ trái phiếu thành phần bằng tổng bình quân gia quyền theo giá trị thị trường của thời lượng từng chứng khoán:
> $$DUR_p = \sum_{j=1}^m w_j \cdot DUR_j, \quad \text{với } w_j = \frac{V_j}{V_p}, \sum_{j=1}^m w_j = 1$$
> Để miễn dịch hóa (Immunization) bảng cân đối kế toán hoặc quỹ tài trợ trước các cú sốc lãi suất song song, nhà quản lý danh mục thiết lập điều kiện cân bằng thời lượng Redington:
> $$DUR_{\text{Tài sản}} = DUR_{\text{Nợ phải trả}}$$
> Chiến lược này khóa chặt thặng dư tài sản ròng mục tiêu thông qua việc triệt tiêu sự biến động của lãi/lỗ vốn với rủi ro tái đầu tư dòng tiền.

> [!prf]
> Xét giá trị thặng dư ròng của tổ chức tài chính $S(i) = A(i) - L(i)$, trong đó $A(i)$ là tổng thị giá tài sản và $L(i)$ là tổng thị giá nghĩa vụ nợ phải trả theo mức lãi suất cân bằng $i$.
> Để thặng dư không bị tổn hại trước cú sốc dịch chuyển lãi suất vi phân $di$, điều kiện cần bậc nhất là đạo hàm của thặng dư theo lãi suất bằng 0:
> $$\frac{dS}{di} = \frac{dA}{di} - \frac{dL}{di} = 0 \iff \frac{dA}{di} = \frac{dL}{di}$$
> Nhân và chia vế trái cho $A$, vế phải cho $L$:
> $$A \left( \frac{1}{A}\frac{dA}{di} \right) = L \left( \frac{1}{L}\frac{dL}{di} \right)$$
> Áp dụng mối liên hệ giữa đạo hàm giá và thời lượng hiệu chỉnh:
> $$A \left( -DUR_A^* \right) = L \left( -DUR_L^* \right) \iff A \cdot \frac{DUR_A}{1+i} = L \cdot \frac{DUR_L}{1+i}$$
> Triệt tiêu thừa số chung $\frac{1}{1+i}$ ở cả hai vế:
> $$A \cdot DUR_A = L \cdot DUR_L$$
> Tại trạng thái bảng cân đối ban đầu được tài trợ cân bằng ($A = L$), phương trình suy biến thành điều kiện miễn dịch thời lượng Redington:
> $$DUR_A = DUR_L$$

> [!exm]
> Một quỹ tài trợ có nghĩa vụ nợ $100$ triệu USD đáo hạn sau $8$ năm ($DUR_L = 8,0$ năm). Quỹ phân bổ nguồn vốn vào Trái phiếu A ($DUR_A = 3,0$ năm) và Trái phiếu B ($DUR_B = 8,5$ năm).
> Phương trình cân bằng thời lượng:
> $$w_A(3,0) + (1 - w_A)(8,5) = 8,0 \iff 3,0 w_A + 8,5 - 8,5 w_A = 8,0 \iff 5,5 w_A = 0,5 \implies w_A = 9,09\%$$
> Trọng số vào trái phiếu B là $w_B = 100\% - 9,09\% = 90,91\%$.
> Phân bổ vốn: Mua $9,09$ triệu USD Trái phiếu A và $90,91$ triệu USD Trái phiếu B để hoàn tất cấu trúc miễn dịch.