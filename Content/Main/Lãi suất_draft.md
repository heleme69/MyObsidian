
# Giá trị thời gian của tiền và Hàm tích lũy

Giá trị thời gian của tiền (TVM - Time Value of Money) phản ánh nguyên lý một khoản tiền trong hiện tại luôn có giá trị lớn hơn chính nó trong tương lai do chi phí cơ hội của vốn, lạm phát bào mòn sức mua và rủi ro thanh khoản. Mối liên hệ cốt lõi là dòng tiền (CF - Cash Flow) phát sinh tại thời điểm càng xa thì giá trị chiết khấu quy đổi về hiện tại càng nhỏ.

Thị trường sử dụng các quy tắc tính ngày để xác định phân số thời gian $t$ trong năm. Quy tắc ngân hàng (Actual/360) chia số ngày thực tế cho 360 ngày, mang lại lợi nhuận cao nhất cho bên cho vay vì mẫu số nhỏ hơn quy tắc chính xác (Actual/365).

> [!def] Hàm số lượng (Amount Function)
> Cho khoản vốn gốc ban đầu $k > 0$ đầu tư tại thời điểm $t = 0$. Hàm số lượng $A(t)$ xác định tổng giá trị thị trường của khoản đầu tư tích lũy đến thời điểm $t \ge 0$, thỏa mãn điều kiện biên ban đầu $A(0) = k$.

> [!def] Hàm tích lũy (Accumulation Function)
> Hàm tích lũy $a(t)$ ghi nhận giá trị tích lũy tại thời điểm $t \ge 0$ của đúng một đơn vị tiền tệ được đầu tư tại gốc thời gian $t = 0$. Mối quan hệ giữa hàm số lượng và hàm tích lũy được định nghĩa bởi:
> $$a(t) = \frac{A(t)}{A(0)} = \frac{A(t)}{k}$$
> Các tính chất giải tích của $a(t)$:
> 1. Chuẩn hóa tại gốc tọa độ: $a(0) = \frac{A(0)}{A(0)} = 1$.
> 2. Tính đơn điệu: $a(t)$ là hàm không giảm theo thời gian $t \ge 0$ trong môi trường lãi suất không âm.
> 3. Tính liên tục: $a(t)$ liên tục trên $[0, \infty)$ nếu quá trình tích lũy lãi diễn ra liên tục.

> [!exm] Bài toán tích lũy phi tuyến và chuyển dịch thời điểm gửi vốn
> Một quỹ đầu tư vận hành với hàm tích lũy phi tuyến $a(t) = (1,10)^t + 0,041 t^2$. Nhà đầu tư gửi số tiền $100$ USD vào thời điểm $t = 1$. Xác định số dư tài khoản thu được tại thời điểm $t = 12$.
> 
> Giải pháp:
> Hệ số tăng trưởng từ mốc thời gian $t_1 = 1$ đến $t_2 = 12$ là tỷ số $\frac{a(12)}{a(1)}$.
> Ta tính các giá trị tích lũy:
> $a(1) = (1,10)^1 + 0,041(1)^2 = 1,1410$
> $a(12) = (1,10)^{12} + 0,041(12)^2 \approx 3,13843 + 5,90400 = 9,04243$
> Số dư tài khoản tích lũy tại thời điểm $t = 12$ là:
> $$A(12) = 100 \times \frac{a(12)}{a(1)} = 100 \times \frac{9,04243}{1,1410} \approx 792,50 \text{ USD}$$

> [!def] Lãi suất thực tế (Effective Rate of Interest)
> Lãi suất thực tế của kỳ thứ $n$, ký hiệu là $i_n$, là tỷ số giữa lượng tiền lãi thu được trong kỳ thứ $n$ trên tổng giá trị tích lũy hiện diện ở đầu kỳ đó (thời điểm $n-1$):
> $$i_n = \frac{A(n) - A(n-1)}{A(n-1)} = \frac{a(n) - a(n-1)}{a(n-1)}$$
> Ý nghĩa kinh tế của $i_n$ là đo lường hiệu suất sinh lời cục bộ của riêng kỳ hạn thứ $n$ dựa trên cơ sở quy mô vốn khả dụng tại thời điểm bắt đầu kỳ đó.

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

> [!exm] Bài toán phân tích tỷ suất thực tế theo lãi đơn
> Một hợp đồng cho vay tính lãi đơn với mức lãi suất công bố $i = 8\%$/năm. Xác định tỷ suất sinh lời thực tế của người cho vay trong năm hoạt động thứ 5 và chứng minh sự suy giảm hiệu quả so với năm đầu tiên.
> 
> Giải pháp:
> Áp dụng công thức suy giảm lãi suất thực tế:
> Năm thứ 1 ($n=1$): $i_1 = \frac{0,08}{1 + 0,08(0)} = 8,00\%$
> Năm thứ 5 ($n=5$): $i_5 = \frac{0,08}{1 + 0,08(5 - 1)} = \frac{0,08}{1 + 0,32} = \frac{0,08}{1,32} \approx 6,06\%$
> Lãi suất thực tế của kỳ thứ 5 đã sụt giảm $1,94\%$ so với ban đầu vì quy mô vốn gốc được hưởng lãi không tự động cộng dồn phần lãi đã phát sinh trước đó.

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
> $$(1+i)^t = 1 + it + \frac{t(t-1)}{2!}i^2 + \sum_{k=3}^\infty \binom{t}{k} i^k$$
> Xét dấu của số hạng bậc hai chi phối $\frac{t(t-1)}{2}i^2$ khi $i > 0$:
> Khi $0 < t < 1$, ta có $t > 0$ và $t - 1 < 0$, dẫn đến tích $t(t-1) < 0$. Do đó số hạng này âm, kéo theo $f(t) < 0$, nghĩa là $(1+i)^t < 1+it$.
> Khi $t > 1$, ta có $t - 1 > 0$, dẫn đến tích $t(t-1) > 0$. Lấy đạo hàm cấp hai của hàm mũ:
> $$\frac{d^2}{dt^2}(1+i)^t = [\ln(1+i)]^2 (1+i)^t > 0 \quad \forall t \ge 0$$
> Hàm $(1+i)^t$ lồi nghiêm ngặt trên $[0, \infty)$. Đường thẳng cát tuyến $y = 1+it$ nối $(0, 1)$ và $(1, 1+i)$ nằm phía trên đồ thị trên khoảng $(0, 1)$ và nằm phía dưới đồ thị khi $t > 1$, suy ra $(1+i)^t > 1+it$ với mọi $t > 1$.

> [!exm] Bài toán xác định mức lãi vượt trội của cơ chế ghép lãi
> Nhà đầu tư dự định gửi $10.000$ USD trong kỳ hạn $3$ năm với mức lãi suất $9\%$/năm. Tính toán chênh lệch số dư tích lũy giữa phương án tái đầu tư toàn bộ tiền lãi (lãi kép) so với phương án chỉ nhận lãi đơn.
> 
> Giải pháp:
> Số dư tích lũy theo lãi đơn sau 3 năm:
> $A_{\text{đơn}}(3) = 10.000 \times [1 + 0,09(3)] = 10.000 \times 1,27 = 12.700 \text{ USD}$
> Số dư tích lũy theo lãi kép sau 3 năm:
> $A_{\text{kép}}(3) = 10.000 \times (1 + 0,09)^3 = 10.000 \times 1,295029 = 12.950,29 \text{ USD}$
> Chênh lệch tài sản tích lũy: $12.950,29 - 12.700 = 250,29$ USD, minh họa cho phần tăng trưởng bậc mũ vượt trội khi $t > 1$.

> [!def] Quy tắc tính ngày trên thị trường tiền tệ (Day Count Conventions)
> Để xác định phân số thời gian $t = \frac{\text{Số ngày tính lãi}}{\text{Số ngày trong một năm chuẩn}}$, thị trường thu nhập cố định sử dụng ba quy chuẩn tính ngày:
> 7. Quy tắc đơn chính xác (Actual/Actual): Đếm chính xác số ngày lịch giữa hai mốc giao dịch và chia cho số ngày thực tế của năm (365 hoặc 366 ngày).
> 8. Quy tắc đơn thông thường (30/360): Giả định mỗi tháng chuẩn hóa có đúng 30 ngày và một năm có 360 ngày.
> 9. Quy tắc ngân hàng (Actual/360): Đếm chính xác số ngày lịch phát sinh nhưng quy đổi trên cơ sở năm ước định 360 ngày.

> [!prp] Tính bất đẳng thức của Quy tắc ngân hàng
> Do số ngày lịch thực tế luôn lớn hơn số ngày quy ước 30 ngày đối với các tháng có 31 ngày, và mẫu số $360 < 365$, phân số thời gian tính theo quy tắc ngân hàng luôn lớn hơn quy tắc đơn chính xác trên cùng một khoảng thời gian lịch:
> $$t_{\text{Banker}} = \frac{\text{Actual Days}}{360} > \frac{\text{Actual Days}}{365} = t_{\text{Exact}}$$
> Hệ quả là Quy tắc ngân hàng luôn mang lại số tiền lãi thực nhận cao nhất cho bên cho vay.

> [!exm] Bài toán chênh lệch lợi nhuận từ các quy tắc tính ngày
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
> $$\int_0^t \delta_r \, dr = \int_0^t \frac{d}{dr}\ln a(r) \, dr = \left[ \ln a(r) \right]_0^t = \ln a(t) - \ln a(0)$$
> Theo tiên đề chuẩn hóa của hàm tích lũy, $a(0) = 1$, suy ra $\ln a(0) = 0$:
> $$\int_0^t \delta_r \, dr = \ln a(t)$$
> Lấy hàm số mũ cơ số tự nhiên $e$ cho cả hai vế:
> $$a(t) = \exp\left(\int_0^t \delta_r \, dr\right)$$
> Trường hợp lực lãi suất là hằng số $\delta_t = \delta$:
> $$a(t) = e^{\delta t} = (1+i)^t \iff \delta = \ln(1+i)$$

> [!exm] Bài toán xác định số dư với lực lãi suất biến đổi theo thời gian
> Một tài khoản tiết kiệm áp dụng lực lãi suất biến thiên liên tục theo quy luật $\delta_t = \frac{0,05}{1 + 0,05t}$. Nếu gửi ban đầu số tiền $2.000$ USD, hãy tính số tiền nhận được sau $t = 10$ năm.
> 
> Giải pháp:
> Tích phân hàm lực lãi suất từ $0$ đến $10$:
> $\int_0^{10} \delta_r \, dr = \int_0^{10} \frac{0,05}{1 + 0,05r} \, dr = \left[ \ln(1 + 0,05r) \right]_0^{10} = \ln(1 + 0,5) - \ln(1) = \ln(1,5)$
> Khôi phục hàm tích lũy:
> $a(10) = \exp(\ln(1,5)) = 1,5$
> Số dư tài khoản tại thời điểm năm thứ 10:
> $A(10) = 2.000 \times 1,5 = 3.000 \text{ USD}$

# Lợi suất đến hạn và Các công cụ thị trường nợ

> [!def] Lợi suất đến hạn (YTM - Yield to Maturity)
> Lợi suất đến hạn (ký hiệu $i$) là nghiệm lãi suất chiết khấu duy nhất làm cân bằng giá trị thị trường hiện hành $P$ của một công cụ nợ với tổng giá trị hiện tại (PV - Present Value) của toàn bộ chuỗi dòng tiền tương lai (CF - Cash Flow) phát sinh từ công cụ đó:
> $$P = \sum_{t=1}^n \frac{CF_t}{(1+i)^t}$$
> Về bản chất giải tích tài chính, YTM chính là tỷ suất hoàn vốn nội bộ (IRR - Internal Rate of Return) của cấu trúc nợ khi nhà đầu tư nắm giữ chứng khoán đến ngày đáo hạn.

Bốn công cụ nợ cơ bản trên thị trường tài chính được chuẩn hóa theo hệ thống ký hiệu dòng tiền:
* $LV$ (Loan Value): Quy mô vốn giải ngân ban đầu của hợp đồng vay.
* $CF_t$ (Cash Flow): Dòng tiền thanh toán chuyển giao tại mốc thời gian $t$.
* $FP$ (Fixed Payment): Khoản thanh toán định kỳ cố định (bao gồm hoàn trả gốc và lãi).
* $C$ (Coupon Payment): Khoản tiền trả lãi coupon định kỳ của trái phiếu, xác định qua tích của lãi suất coupon $c$ với mệnh giá $F$ ($C = F \cdot c$).
* $F$ (Face Value / Par Value): Mệnh giá hay giá trị danh nghĩa hoàn trả khi công cụ nợ đáo hạn.
* $P$ (Price): Giá thị trường hiện tại của công cụ nợ.

> [!exm] Bài toán cân bằng dòng tiền và giải phương trình hiện giá (SOA 11/90 #4)
> Với cùng một mức lãi suất hiệu dụng năm $i > 0$, ba phương án nhận tiền sau đây có giá trị hiện tại tương đương nhau:
> (i) Nhận $10.000$ USD vào cuối năm thứ 6.
> (ii) Nhận $6.000$ USD vào cuối năm thứ $t$ và $56.000$ USD vào cuối năm thứ $2t$.
> (iii) Nhận ngay $5.000$ USD tại thời điểm hiện tại.
> Tính giá trị hiện tại của một khoản thanh toán trị giá $8.000$ USD thực hiện vào cuối năm thứ $t + 3$.
> 
> Giải pháp:
> Đặt hệ số chiết khấu $v = \frac{1}{1+i}$. Từ điều kiện cân bằng hiện giá:
> Bước 1: Từ (i) và (iii):
> $10.000 \cdot v^6 = 5.000 \implies v^6 = 0,5 \implies v^3 = \sqrt{0,5}$
> Bước 2: Từ (ii) và (iii):
> $6.000 \cdot v^t + 56.000 \cdot v^{2t} = 5.000$
> Chia hai vế cho $1.000$ và đặt $x = v^t > 0$:
> $56x^2 + 6x - 5 = 0 \implies x = \frac{-3 + \sqrt{9 + 280}}{56} = \frac{-3 + 17}{56} = \frac{14}{56} = 0,25 \implies v^t = 0,25$
> Bước 3: Giá trị hiện tại của khoản nhận $8.000$ USD tại $t+3$:
> $PV = 8.000 \cdot v^{t+3} = 8.000 \cdot v^t \cdot v^3 = 8.000 \times 0,25 \times \sqrt{0,5} = 2.000 \times \frac{\sqrt{2}}{2} = 1.000\sqrt{2} \approx 1.414,21 \text{ USD}$
> Làm tròn đến hàng đơn vị gần nhất: $1.415$ USD.

> [!def] Khoản cho vay đơn giản (Simple Loan)
> Công cụ nợ trong đó bên cho vay cung cấp số vốn $LV$ tại $t=0$, bên vay cam kết thanh toán duy nhất một dòng tiền $CF_n$ bao gồm toàn bộ vốn gốc và lãi tích lũy tại ngày đáo hạn $t=n$:
> $$LV = \frac{CF_n}{(1+i)^n} \iff CF_n = LV(1+i)^n$$

> [!exm] Bài toán định giá và xác định lợi suất khoản vay đơn giản
> Doanh nghiệp vay một khoản vay đơn giản $LV = 10.000.000$ USD trong thời hạn $n = 3$ năm với thỏa thuận lãi suất $i = 6\%$/năm.
> Dòng tiền phải thanh toán duy nhất khi đáo hạn là:
> $$CF_3 = 10.000.000 \times (1 + 0,06)^3 = 11.910.160 \text{ USD}$$
> Ngược lại, nếu khoản vay 1 năm giải ngân $100$ USD và nhận về $110$ USD vào cuối kỳ, lợi suất đến hạn bằng đúng lãi suất đơn: $i = \frac{110 - 100}{100} = 10\%$.

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
> Biểu thức trong ngoặc đơn là tổng của một cấp số nhân hữu hạn gồm $n$ số hạng, với số hạng đầu tiên $u_1 = v$ và công bội $q = v < 1$:
> $$S_n = u_1 \frac{1 - q^n}{1 - q} = v \frac{1 - v^n}{1 - v}$$
> Biến đổi mẫu số bằng biểu thức của $v$:
> $$1 - v = 1 - \frac{1}{1+i} = \frac{i}{1+i} = i \cdot v$$
> Thay vào ta thu được:
> $$S_n = v \frac{1 - v^n}{i \cdot v} = \frac{1 - (1+i)^{-n}}{i} = a_{\overline{n}|i}$$
> Từ đó suy ra công thức nghiệm đóng:
> $$LV = FP \cdot \left[ \frac{1 - (1+i)^{-n}}{i} \right] \iff FP = LV \cdot \left[ \frac{i}{1 - (1+i)^{-n}} \right]$$

> [!exm] Bài toán lập lịch trả nợ và bóc tách cấu trúc gốc - lãi (Amortization Schedule)
> Một doanh nghiệp vay ngân hàng số tiền $LV = 100.000$ USD theo phương thức thanh toán cố định, kỳ hạn $n = 20$ năm, lãi suất cố định $i = 7\%$/năm.
> 1. Tính số tiền trả góp hàng năm $FP$.
> 2. Phân tách số tiền trả lãi ($I$) và số tiền hoàn trả vốn gốc ($P$) tại Năm thứ 1 so với Năm thứ 20.
> 
> Giải pháp:
> 1. Khoản thanh toán cố định hàng năm:
> $$FP = 100.000 \cdot \left[ \frac{0,07}{1 - (1,07)^{-20}} \right] = 100.000 \cdot \left[ \frac{0,07}{0,741581} \right] \approx 9.439,29 \text{ USD}$$
> 2. Phân rã cấu trúc Năm thứ 1:
> Tiền lãi phát sinh: $I_1 = B_0 \cdot i = 100.000 \times 7\% = 7.000,00$ USD.
> Tiền gốc hoàn trả: $P_1 = FP - I_1 = 9.439,29 - 7.000,00 = 2.439,29$ USD.
> Số dư nợ còn lại cuối năm 1: $B_1 = 100.000 - 2.439,29 = 97.560,71$ USD.
> 3. Phân rã cấu trúc Năm thứ 20:
> Dư nợ đầu năm thứ 20 chính là hiện giá của khoản trả cuối cùng:
> $$B_{19} = \frac{FP}{1+i} = \frac{9.439,29}{1,07} \approx 8.821,77 \text{ USD}$$
> Tiền lãi phát sinh: $I_{20} = B_{19} \cdot i = 8.821,77 \times 7\% = 617,52$ USD.
> Tiền gốc hoàn trả: $P_{20} = FP - I_{20} = 9.439,29 - 617,52 = 8.821,77$ USD.
> Kết quả chứng minh quy luật: Tiền lãi giảm mạnh từ $7.000$ USD xuống $617,52$ USD, trong khi phần hoàn gốc tăng từ $2.439,29$ USD lên chiếm ưu thế tuyệt đối $8.821,77$ USD.

> [!exm] Bài toán tổng tiền lãi và chi phí của khoản vay thế chấp 
> Một khoản vay mua nhà trị giá $LV = 150.000$ USD được thỏa thuận hoàn trả bằng các kỳ trả góp hàng tháng cố định $FP = 1.158$ USD liên tục trong thời gian $25$ năm. Xác định tổng số tiền lãi và chi phí tài chính mà người đi vay phải thanh toán cho ngân hàng trong toàn bộ chu kỳ vay.
> 
> Giải pháp:
> Quy đổi tổng số kỳ thanh toán hàng tháng:
> $n = 25 \text{ năm} \times 12 \text{ tháng/năm} = 300 \text{ kỳ}$
> Tổng số tiền người vay thực tế chuyển trả cho ngân hàng:
> $\text{Tổng trả} = FP \times n = 1.158 \times 300 = 347.400 \text{ USD}$
> Tổng tiền lãi và chi phí tích lũy phát sinh:
> $\text{Tổng lãi và phí} = \text{Tổng trả} - \text{Gốc vay ban đầu} = 347.400 - 150.000 = 197.400 \text{ USD}$

> [!def] Giá trị tương lai của Niên kim thông thường (Ordinary Annuity Future Value)
> Giá trị tương lai $FV$ tại thời điểm $n$ của một chuỗi $n$ khoản thanh toán định kỳ bằng nhau, mỗi khoản trị giá $C$, thực hiện vào cuối mỗi giai đoạn với mức lãi suất kỳ $r$:
> $$FV = C \cdot s_{\overline{n}|r} = C \cdot \left[ \frac{(1 + r)^n - 1}{r} \right]$$

> [!exm] Bài toán tính giá trị tương lai niên kim đa kỳ hạn 
> 4. Tính giá trị tương lai tích lũy của một chuỗi đóng góp $5.000$ USD mỗi năm trong thời hạn $6$ năm với lãi suất $7\%$/năm.
> 5. Một cá nhân đầu tư định kỳ $2.000$ USD vào cuối mỗi quý trong thời gian $2$ năm với lãi suất $8\%$/năm, tính lãi theo quý. Xác định tổng số tiền có được khi kết thúc kỳ hạn.
> 
> Giải pháp:
> Trường hợp 1: $C = 5.000$, $n = 6$, $r = 7\% = 0,07$:
> $$FV = 5.000 \times \left[ \frac{(1,07)^6 - 1}{0,07} \right] = 5.000 \times \left[ \frac{1,500730 - 1}{0,07} \right] = 5.000 \times 7,15329 \approx 35.766,45 \text{ USD}$$
> Trường hợp 2: Thanh toán theo quý $\implies$ số kỳ $n = 2 \times 4 = 8$ quý. Lãi suất quý $r = \frac{8\%}{4} = 2\% = 0,02$:
> $$FV = 2.000 \times \left[ \frac{(1,02)^8 - 1}{0,02} \right] = 2.000 \times \left[ \frac{1,171659 - 1}{0,02} \right] = 2.000 \times 8,58297 \approx 17.165,94 \text{ USD}$$
> Kết quả làm tròn tương ứng là $35.766$ USD và $17.166$ USD.

> [!exm] Bài toán xác định mức đóng góp niên kim định kỳ tích lũy vốn 
> Để tích lũy được số tiền mục tiêu $FV = 20.000$ USD sau $8$ năm nhằm phục vụ việc mở rộng kinh doanh, nhà đầu tư phải gửi vào quỹ tiết kiệm một khoản tiền bằng nhau $C$ vào cuối mỗi năm. Cho biết quỹ cam kết lãi suất sinh lời ổn định $6\%$/năm. Tính mức tiền $C$ cần trích lập mỗi năm.
> 
> Giải pháp:
> Áp dụng công thức suy biến từ giá trị tương lai niên kim:
> $$C = \frac{FV \cdot i}{(1 + i)^n - 1}$$
> Thay các số liệu $FV = 20.000$, $i = 0,06$, $n = 8$:
> $$C = \frac{20.000 \times 0,06}{(1,06)^8 - 1} = \frac{1.200}{1,593848 - 1} = \frac{1.200}{0,593848} \approx 2.020,72 \text{ USD}$$
> Mức thanh toán định kỳ làm tròn đến hàng đơn vị là $2.021$ USD.

> [!exm] Bài toán quy đổi tương đương giữa Giá trị hiện tại và Giá trị tương lai 
> Một chuỗi niên kim có tổng giá trị tương lai đạt mức $FV = 15.000$ USD tại thời điểm $n = 3$ năm với mức lãi suất chiết khấu $8\%$/năm. Xác định giá trị hiện tại tương đương ($PV$) của toàn bộ dòng niên kim này tại thời điểm ban đầu.
> 
> Giải pháp:
> Mối quan hệ chiết khấu tổng quát giữa $PV$ và $FV$ của cùng một dòng tiền là phép chiết khấu một lần theo lũy thừa thời gian:
> $$PV = \frac{FV}{(1 + i)^n} = FV \cdot (1 + i)^{-n}$$
> Thay các thông số:
> $$PV = \frac{15.000}{(1 + 0,08)^3} = \frac{15.000}{(1,08)^3} = \frac{15.000}{1,259712} \approx 11.907,48 \text{ USD}$$
> Làm tròn đến hàng đơn vị là $11.907$ USD.

> [!def] Trái phiếu coupon (Coupon Bond)
> Chứng khoán nợ cam kết chi trả các khoản tiền lãi coupon định kỳ $C = F \cdot c$ cho đến ngày đáo hạn $n$, tại đó nhà phát hành thanh toán khoản coupon cuối cùng kèm theo hoàn trả nguyên vẹn giá trị danh nghĩa $F$:
> $$P = \sum_{t=1}^n \frac{C}{(1+i)^t} + \frac{F}{(1+i)^n} = C \cdot \left[ \frac{1-(1+i)^{-n}}{i} \right] + F(1+i)^{-n}$$

> [!prp] Phân loại trái phiếu theo vị thế thị giá và mệnh giá
> Dựa trên mối quan hệ so sánh giữa lãi suất coupon cam kết $c$ và lợi suất đến hạn thị trường $i$:
> 6. Trái phiếu ngang giá (Par Bond): $c = i \iff P = F$. Nhà đầu tư không phát sinh lãi hay lỗ vốn khi đáo hạn.
> 7. Trái phiếu chiết khấu (Discount Bond): $c < i \iff P < F$. Nhà đầu tư nhận khoản lãi vốn $F - P > 0$ khi đáo hạn để bù đắp cho mức coupon thấp hơn thị trường.
> 8. Trái phiếu phần bù (Premium Bond): $c > i \iff P > F$. Dòng coupon cao hơn thị trường được bù trừ bởi khoản lỗ vốn $F - P < 0$ khi đáo hạn.

> [!exm] Bài toán định giá trái phiếu coupon và tương quan giá - lợi suất
> Trái phiếu mệnh giá $F = 1.000$ USD, kỳ hạn $n = 10$ năm, coupon $c = 8\%$/năm ($C = 80$ USD).
> Nếu thị trường yêu cầu $i = 8\%$: $P = 80 \cdot a_{\overline{10}|8\%} + 1.000(1,08)^{-10} = 1.000$ USD (ngang giá).
> Nếu thị trường yêu cầu $i = 10\%$: $P = 80 \cdot a_{\overline{10}|10\%} + 1.000(1,10)^{-10} = 491,57 + 385,54 = 877,11$ USD (chiết khấu).
> Nếu thị trường yêu cầu $i = 6\%$: $P = 80 \cdot a_{\overline{10}|6\%} + 1.000(1,06)^{-10} = 588,81 + 558,39 = 1.147,20$ USD (phần bù).

> [!def] Trái phiếu chiết khấu (Discount / Zero-Coupon Bond)
> Trái phiếu không thanh toán bất kỳ dòng tiền coupon trung gian nào ($C = 0$). Trái phiếu được bán tại mức thị giá $P < F$ và hoàn trả một lần mệnh giá $F$ tại ngày đáo hạn:
> $$P = \frac{F}{(1+i)^n} \iff i = \left( \frac{F}{P} \right)^{1/n} - 1$$

> [!exm] Bài toán tính YTM của trái phiếu zero-coupon
> Trái phiếu zero-coupon kỳ hạn $n = 5$ năm, mệnh giá $F = 1.000$ USD, giao dịch ở mức giá $P = 680,58$ USD. Lợi suất đến hạn xác định bởi:
> $$i = \left( \frac{1.000}{680,58} \right)^{1/5} - 1 = (1,4693)^0,2 - 1 = 8,00\%/\text{năm}$$

> [!def] Trái phiếu vĩnh viễn (Consol / Perpetuity)
> Công cụ nợ có kỳ hạn vô hạn ($n \to \infty$) và không hoàn trả vốn gốc, chỉ cam kết chi trả dòng tiền coupon cố định $C$ định kỳ vĩnh viễn.

> [!thm] Định lý định giá Trái phiếu vĩnh viễn
> Thị giá $P_c$ của một trái phiếu vĩnh viễn với dòng tiền trả $C$ mỗi kỳ và lợi suất chiết khấu $i_c > 0$ bằng tỷ số giữa dòng coupon và lợi suất:
> $$P_c = \frac{C}{i_c} \iff i_c = \frac{C}{P_c}$$

> [!prf]
> Mô hình định giá trái phiếu vĩnh viễn là giới hạn của chuỗi chiết khấu khi số kỳ hạn tiến ra vô cực:
> $$P_c = \lim_{n \to \infty} \sum_{t=1}^n \frac{C}{(1+i_c)^t} = \sum_{t=1}^\infty C(1+i_c)^{-t}$$
> Đặt công bội $x = \frac{1}{1+i_c}$. Vì $i_c > 0$ nên $0 < x < 1$, chuỗi lũy thừa hội tụ tuyệt đối:
> $$P_c = C \sum_{t=1}^\infty x^t = C \left( x + x^2 + x^3 + \dots \right) = C \cdot \frac{x}{1 - x}$$
> Thay ngược giá trị $x = \frac{1}{1+i_c}$ vào phân thức:
> $$P_c = C \cdot \frac{\frac{1}{1+i_c}}{1 - \frac{1}{1+i_c}} = C \cdot \frac{\frac{1}{1+i_c}}{\frac{(1+i_c) - 1}{1+i_c}} = C \cdot \frac{\frac{1}{1+i_c}}{\frac{i_c}{1+i_c}} = \frac{C}{i_c}$$

> [!exm] Bài toán định giá trái phiếu vĩnh viễn trước biến động lợi suất
> Một trái phiếu chính phủ vĩnh viễn cam kết trả dòng tiền lãi cố định hàng năm $C = 100$ GBP. Xác định mức giá thị trường của trái phiếu khi lợi suất yêu cầu lần lượt là $5\%$, $10\%$ và $20\%$.
> 
> Giải pháp:
> Áp dụng công thức consol:
> Tại $i_c = 5\%$: $P_c = \frac{100}{0,05} = 2.000$ GBP.
> Tại $i_c = 10\%$: $P_c = \frac{100}{0,10} = 1.000$ GBP.
> Tại $i_c = 20\%$: $P_c = \frac{100}{0,20} = 500$ GBP.
> Kết quả minh chứng cho mối quan hệ nghịch đảo phi tuyến giữa lãi suất và thị giá công cụ nợ.

> [!def] Lợi suất hiện hành (Current Yield)
> Lợi suất hiện hành $i_c$ là tỷ số giữa dòng tiền lãi coupon danh nghĩa hàng năm $C$ trên thị giá hiện tại $P$ của trái phiếu:
> $$i_c = \frac{C}{P}$$
> Về mặt giải tích, $i_c$ đóng vai trò xấp xỉ bậc một cho YTM khi trái phiếu có kỳ hạn rất dài ($n \ge 20$ năm, do phần giá trị hiện tại của mệnh giá $\frac{F}{(1+i)^n} \approx 0$) hoặc khi thị giá giao dịch tiệm cận mệnh giá ($P \approx F$).

> [!exm] Bài toán so sánh độ lệch giữa Lợi suất hiện hành và YTM
> Một trái phiếu kỳ hạn 30 năm có lãi suất coupon $10\%$, mệnh giá $1.000$ USD đang giao dịch ở mức giá $P = 1.200$ USD.
> Lợi suất hiện hành là:
> $$i_c = \frac{100}{1.200} \approx 8,33\%$$
> Trong khi đó, YTM thực tế giải từ phương trình hiện giá chỉ đạt $7,13\%$. Mức $i_c$ cao hơn YTM vì nó bỏ qua khoản lỗ vốn lũy kế $200$ USD khi giá hội tụ dần về mệnh giá lúc đáo hạn.

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

> [!exm] Bài toán chuyển đổi lợi suất tín phiếu thực tế
> Một tín phiếu Kho bạc Mỹ kỳ hạn $D = 91$ ngày, mệnh giá $F = 10.000$ USD được chào bán với mức lợi suất chiết khấu niêm yết $i_{db} = 6,0\%$. Xác định giá mua thực tế và lợi suất đến hạn thực tế quy đổi theo năm ($i_{ytm}$).
> 
> Giải pháp:
> Mức chiết khấu bằng tiền:
> $F - P = 10.000 \times 0,06 \times \frac{91}{360} \approx 151,67 \text{ USD}$
> Giá mua thực tế của tín phiếu:
> $P = 10.000 - 151,67 = 9.848,33 \text{ USD}$
> Chuyển đổi sang YTM:
> $$i_{ytm} = \frac{365 \times 0,06}{360 - (0,06 \times 91)} = \frac{21,90}{360 - 5,46} = \frac{21,90}{354,54} \approx 6,177\% \approx 6,18\%$$
> Mức niêm yết $i_{db}$ đã đánh giá thấp lợi suất thực tế $18$ điểm cơ bản ($6,18\% - 6,00\% = 0,18\%$).

> [!def] Lãi suất danh nghĩa âm và Ranh giới dưới bằng 0 (ZLB - Zero Lower Bound)
> Trạng thái bất thường lãi suất âm ($i < 0$) xảy ra khi thị giá giao dịch của công cụ nợ cao hơn mệnh giá nhận về khi đáo hạn ($P > F$). Các tổ chức tài chính chấp nhận mức lỗ danh nghĩa này do chi phí lưu giữ tiền mặt vật chất an toàn quá lớn và do yêu cầu bắt buộc phải duy trì tài sản có tính thanh khoản cao (LCR) phục vụ thanh toán bù trừ liên ngân hàng.

> [!exm] Bài toán định lượng chi phí nắm giữ tài sản trong điều kiện lợi suất âm
> Một ngân hàng thương mại đầu tư $50.000.000$ EUR vào tín phiếu chính phủ kỳ hạn $6$ tháng ($0,5$ năm) với mức lợi suất danh nghĩa âm $i = -0,40\%$/năm. Xác định số tiền lỗ danh nghĩa và phân tích vì sao phương án này vẫn được chấp nhận nếu chi phí thuê kho bãi, bảo hiểm tiền mặt vật chất là $0,65\%$/năm.
> 
> Giải pháp:
> Giá trị thu hồi khi đáo hạn theo cơ chế chiết khấu âm:
> $P_1 = 50.000.000 \times [1 + (-0,004 \times 0,5)] = 50.000.000 \times 0,998 = 49.900.000 \text{ EUR}$
> Mức lỗ vốn danh nghĩa khi nắm giữ tín phiếu:
> $50.000.000 - 49.900.000 = 100.000 \text{ EUR}$
> Nếu lưu trữ tiền mặt vật chất, chi phí quản lý kho bãi là:
> $50.000.000 \times 0,0065 \times 0,5 = 162.500 \text{ EUR}$
> Mức tiết kiệm ròng từ việc nắm giữ tín phiếu lợi suất âm thay vì tiền mặt là:
> $162.500 - 100.000 = 62.500 \text{ EUR}$

# Lãi suất thực, Lạm phát và Méo mó do Thuế

> [!def] Lãi suất danh nghĩa và Lãi suất thực
> Lãi suất danh nghĩa $i$ (Nominal Interest Rate) đo lường tốc độ gia tăng thuần túy về mặt số lượng đơn vị tiền tệ danh nghĩa của một khoản đầu tư.
> Lãi suất thực $i_r$ (Real Interest Rate) đo lường tốc độ gia tăng về khối lượng hàng hóa, dịch vụ vật chất thực tế có thể mua được, phản ánh sự thay đổi sức mua của khoản đầu tư sau khi đã hiệu chỉnh theo biến động giá cả.

> [!def] Lãi suất thực Ex-ante và Ex-post
> 1. Lãi suất thực Ex-ante ($i_r^e$): Xác định tại thời điểm bắt đầu hợp đồng dựa trên tỷ lệ lạm phát kỳ vọng $\pi^e$, chi phối quyết định cấp tín dụng:
>    $$i_r^e \approx i - \pi^e$$
> 2. Lãi suất thực Ex-post ($i_r^{\text{actual}}$): Xác định khi hợp đồng đáo hạn dựa trên tỷ lệ lạm phát thực tế $\pi$, chi phối sự dịch chuyển tài sản ròng thực tế giữa người vay và người cho vay:
>    $$i_r^{\text{actual}} \approx i - \pi$$
> Với cú sốc lạm phát bất ngờ $\epsilon = \pi - \pi^e$, ta có $i_r^{\text{actual}} = i_r^e - \epsilon$. Khi $\epsilon > 0$ (lạm phát thực tế cao hơn dự kiến), bên cho vay chịu thiệt hại sức mua còn bên đi vay được giảm bớt gánh nặng nợ thực tế.

> [!thm] Phương trình Fisher về cấu trúc Lãi suất và Lạm phát
> Giữa lãi suất danh nghĩa $i$, lãi suất thực $i_r$ và tỷ lệ lạm phát kỳ vọng $\pi^e$ tồn tại đồng nhất thức hoàn giá kép:
> $$1 + i = (1 + i_r)(1 + \pi^e)$$
> Khi các biến số tương đối nhỏ ($\le 10\%$), phương trình được xấp xỉ tuyến tính:
> $$i \approx i_r + \pi^e \iff i_r \approx i - \pi^e$$

> [!prf]
> Xét tại thời điểm $t = 0$, vốn $M_0$ mua được số lượng rổ hàng hóa là $Q_0 = \frac{M_0}{P_0}$.
> Tại $t = 1$, vốn danh nghĩa tăng lên $M_1 = M_0(1 + i)$, đồng thời mức giá chung tăng lên $P_1 = P_0(1 + \pi^e)$.
> Khối lượng hàng hóa mua được thực tế lúc này:
> $$Q_1 = \frac{M_1}{P_1} = \frac{M_0(1 + i)}{P_0(1 + \pi^e)} = Q_0 \left[ \frac{1 + i}{1 + \pi^e} \right]$$
> Theo định nghĩa, tốc độ tăng trưởng sức mua thực tế là $\frac{Q_1}{Q_0} = 1 + i_r$:
> $$1 + i_r = \frac{1 + i}{1 + \pi^e} \iff 1 + i = (1 + i_r)(1 + \pi^e)$$
> Khai triển vế phải: $1 + i = 1 + i_r + \pi^e + i_r \cdot \pi^e$.
> Khi $i_r \cdot \pi^e \approx 0$, ta thu được xấp xỉ tuyến tính: $i \approx i_r + \pi^e$.

> [!exm] Bài toán phân tích sai số lạm phát tác động lên sức mua ròng
> Một tổ chức tài chính cho vay $5.000.000$ USD kỳ hạn $1$ năm với mức lãi suất danh nghĩa $i = 8,5\%$. Dự báo lạm phát kỳ vọng ban đầu là $\pi^e = 3,5\%$. Khi đáo hạn, lạm phát thực tế tăng vọt lên mức $\pi = 7,0\%$. Định lượng mức tổn thất sức mua thực tế của bên cho vay so với dự kiến.
> 
> Giải pháp:
> Lợi suất thực kỳ vọng ex-ante (theo công thức chính xác):
> $1 + i_r^e = \frac{1 + 0,085}{1 + 0,035} = \frac{1,085}{1,035} \approx 1,04831 \implies i_r^e \approx 4,831\%$
> Giá trị thặng dư sức mua kỳ vọng: $5.000.000 \times 4,831\% = 241.550$ USD.
> Lợi suất thực tế nhận được ex-post:
> $1 + i_r^{\text{actual}} = \frac{1 + 0,085}{1 + 0,070} = \frac{1,085}{1,070} \approx 1,01402 \implies i_r^{\text{actual}} \approx 1,402\%$
> Giá trị thặng dư sức mua thực tế: $5.000.000 \times 1,402\% = 70.100$ USD.
> Mức tổn thất sức mua chuyển giao sang phía người đi vay do cú sốc lạm phát bất ngờ là:
> $241.550 - 70.100 = 171.450 \text{ USD}$

> [!thm] Tác động méo mó của thuế thu nhập lên Lãi suất thực sau thuế
> Khi hệ thống thuế thu nhập đánh thuế trên toàn bộ phần lợi nhuận danh nghĩa với thuế suất biên $\tau \in [0, 1)$, lãi suất thực sau thuế $i_{r,at}$ của nhà đầu tư bị suy giảm theo công thức:
> $$i_{r,at} = i_r(1 - \tau) - \tau \cdot \pi^e$$

> [!prf]
> Thuế được tính toán trực tiếp trên lãi suất danh nghĩa: $i_{at} = i(1 - \tau)$.
> Lãi suất thực sau thuế là sức mua còn lại: $i_{r,at} = i_{at} - \pi^e = i(1 - \tau) - \pi^e$.
> Thay xấp xỉ Fisher $i = i_r + \pi^e$ vào biểu thức:
> $$i_{r,at} = (i_r + \pi^e)(1 - \tau) - \pi^e = i_r(1 - \tau) + \pi^e(1 - \tau) - \pi^e = i_r(1 - \tau) - \tau \cdot \pi^e$$

> [!def] Chứng khoán bảo vệ khỏi lạm phát (TIPS - Treasury Inflation-Protected Securities)
> Công cụ nợ có cấu trúc bảo toàn sức mua tuyệt đối bằng cách neo giá trị vốn gốc danh nghĩa $F_t$ điều chỉnh liên tục theo Chỉ số giá tiêu dùng (CPI - Consumer Price Index):
> $$F_t = F_0 \times \frac{CPI_t}{CPI_0}$$
> Tiền lãi coupon định kỳ được tính bằng tích của tỷ lệ coupon thực không đổi $c_r$ với giá trị vốn gốc đã điều chỉnh $F_t$: $C_t = c_r \cdot F_t$. Do cả gốc lẫn lãi đều tăng tỷ lệ thuận với lạm phát, YTM của TIPS phản ánh trực tiếp lãi suất thực thuần túy trên thị trường cân bằng.

> [!exm] Bài toán điều chỉnh dòng tiền lạm phát và định giá trái phiếu TIPS
> Nhà đầu tư mua trái phiếu TIPS kỳ hạn 10 năm với mệnh giá ban đầu $F_0 = 1.000$ USD, lãi suất coupon thực cố định $c_r = 2,0\%$/năm. Giả sử tỷ lệ lạm phát năm thứ nhất là $\pi_1 = 5,0\%$ và năm thứ hai là $\pi_2 = 3,0\%$.
> 1. Tính giá trị vốn gốc đã điều chỉnh ($F_1, F_2$) và tiền lãi coupon thực nhận ($C_1, C_2$) ở hai năm đầu.
> 2. Nếu lạm phát trung bình duy trì $4\%$/năm trong khi lợi suất thực TIPS là $2,5\%$, xác định mức lạm phát hòa vốn (Breakeven Inflation Rate) so với trái phiếu chính phủ danh nghĩa cùng kỳ hạn đang có lợi suất $6,6\%$.
> 
> Giải pháp:
> 1. Điều chỉnh vốn gốc và dòng coupon:
> Năm thứ 1:
> $F_1 = F_0(1 + \pi_1) = 1.000 \times 1,05 = 1.050 \text{ USD}$
> Tiền coupon thực nhận: $C_1 = F_1 \cdot c_r = 1.050 \times 2\% = 21,00 \text{ USD}$
> Năm thứ 2:
> $F_2 = F_1(1 + \pi_2) = 1.050 \times 1,03 = 1.081,50 \text{ USD}$
> Tiền coupon thực nhận: $C_2 = F_2 \cdot c_r = 1.081,50 \times 2\% = 21,63 \text{ USD}$
> 2. Mức lạm phát hòa vốn:
> $$\text{Breakeven Inflation} = i_{\text{Danh nghĩa}} - i_{r,\text{TIPS}} = 6,6\% - 2,5\% = 4,1\%$$
> Nếu nhà đầu tư kỳ vọng lạm phát thực tế bình quân cao hơn $4,1\%$, việc nắm giữ trái phiếu TIPS sẽ mang lại mức sinh lời thực vượt trội hơn trái phiếu danh nghĩa thông thường.

> [!exm] Bài toán so sánh hiệu quả sau thuế giữa Trái phiếu thường và TIPS
> Một nhà đầu tư cá nhân có mức thuế suất biên $\tau = 30\%$, dự kiến lạm phát trong kỳ là $\pi = 4\%$. Đưa ra sự lựa chọn giữa hai tài sản:
> Phương án A: Trái phiếu thường có lợi suất danh nghĩa $i = 7,0\%$.
> Phương án B: Trái phiếu TIPS có lợi suất thực được bảo đảm là $i_r = 2,5\%$.
> Tính toán lãi suất thực sau thuế của từng phương án để đưa ra quyết định tối ưu.
> 
> Giải pháp:
> Với Trái phiếu thường:
> Lãi suất danh nghĩa sau thuế: $i_{at} = 7\% \times (1 - 0,30) = 4,90\%$
> Lãi suất thực sau thuế: $i_{r,at} = 4,90\% - 4,00\% = 0,90\%$
> Với Trái phiếu TIPS:
> Lợi suất danh nghĩa quy đổi: $1 + i_{\text{TIPS}} = (1 + 0,025)(1 + 0,04) = 1,066 \implies i_{\text{TIPS}} = 6,60\%$
> Lãi suất danh nghĩa sau thuế: $6,60\% \times (1 - 0,30) = 4,62\%$
> Lãi suất thực sau thuế: $4,62\% - 4,00\% = 0,62\%$
> Nhà đầu tư lựa chọn Phương án A vì mức sinh lời thực sau thuế cao hơn ($0,90\% > 0,62\%$).

# Độ nhạy cảm giá, Thời lượng và Miễn dịch danh mục

> [!def] Tỷ suất sinh lời trong kỳ nắm giữ (Rate of Return)
> Tỷ suất sinh lời $R$ của một công cụ nợ trong giai đoạn nắm giữ từ thời điểm $t$ đến $t+1$ phản ánh toàn bộ thu nhập từ dòng tiền và biến động giá trị vốn thị trường, tính theo phần trăm của giá mua ban đầu $P_t$:
> $$R = \frac{C + (P_{t+1} - P_t)}{P_t} = \frac{C}{P_t} + \frac{P_{t+1} - P_t}{P_t} = i_c + g$$
> trong đó $i_c = \frac{C}{P_t}$ là lợi suất hiện hành (thành phần thu nhập), và $g = \frac{P_{t+1} - P_t}{P_t}$ là tỷ lệ lãi/lỗ vốn (thành phần giá).

> [!thm] Định lý điều kiện đồng nhất giữa Tỷ suất sinh lời và YTM
> Tỷ suất sinh lời thực nhận $R$ của trái phiếu chỉ bằng đúng lợi suất đến hạn ban đầu $i$ khi và chỉ khi kỳ hạn nắm giữ của nhà đầu tư trùng khớp hoàn toàn với ngày đáo hạn của công cụ ($t = n$).

> [!exm] Bài toán rủi ro giá của trái phiếu dài hạn trong kỳ đầu tư ngắn
> Nhà đầu tư mua một trái phiếu kỳ hạn 10 năm, mệnh giá $F = 1.000$ USD, coupon hàng năm $c = 8\%$ tại đúng mệnh giá ($P_0 = 1.000$ USD, YTM ban đầu $i = 8\%$). Sau đúng 1 năm nắm giữ, lãi suất thị trường bất ngờ tăng vọt lên $10\%$. Hãy tính giá bán trái phiếu lúc này và tỷ suất sinh lời thực tế của nhà đầu tư trong năm đó.
> 
> Giải pháp:
> Tại thời điểm $t = 1$, trái phiếu còn lại kỳ hạn $n = 9$ năm và được định giá theo YTM mới $i = 10\%$:
> $$P_1 = 80 \cdot \left[ \frac{1 - (1,10)^{-9}}{0,10} \right] + 1.000(1,10)^{-9} = 80 \times 5,759024 + 1.000 \times 0,424098 = 460,72 + 424,10 = 884,82 \text{ USD}$$
> Tỷ lệ lỗ vốn: $g = \frac{884,82 - 1.000}{1.000} = -11,518\%$
> Lợi suất hiện hành nhận được: $i_c = \frac{80}{1.000} = 8,00\%$
> Tổng tỷ suất sinh lời thực tế nhận được trong kỳ:
> $$R = i_c + g = 8,00\% - 11,518\% = -3,518\%$$
> Nhà đầu tư bị lỗ vốn dù trái phiếu có mức lãi coupon cao.

> [!exm] Bài toán so sánh độ co giãn giá theo mức lãi suất Coupon (Zero-coupon vs Coupon Bond)
> Cho hai trái phiếu A và B cùng có kỳ hạn $n = 10$ năm, cùng mệnh giá $1.000$ USD, ban đầu giao dịch ngang giá với lợi suất $i = 8\%$/năm:
> Trái phiếu A: Coupon $c_A = 0\%$ (trái phiếu zero-coupon, giá ban đầu $P_A = 463,19$ USD).
> Trái phiếu B: Coupon $c_B = 8\%$/năm (trả hàng năm, giá ban đầu $P_B = 1.000$ USD).
> Khi lãi suất thị trường tăng $200$ bps từ $8\%$ lên $10\%$, hãy tính phần trăm sụt giảm giá của từng trái phiếu và giải thích nguyên nhân.
> 
> Giải pháp:
> Tại mức lợi suất mới $i = 10\%$:
> 1. Định giá lại Trái phiếu A:
> $$P_{A,\text{mới}} = \frac{1.000}{(1,10)^{10}} \approx 385,54 \text{ USD}$$
> Mức thay đổi giá tương đối:
> $$\%\Delta P_A = \frac{385,54 - 463,19}{463,19} = \frac{-77,65}{463,19} \approx -16,76\%$$
> 2. Định giá lại Trái phiếu B:
> $$P_{B,\text{mới}} = 80 \cdot \left[ \frac{1 - (1,10)^{-10}}{0,10} \right] + \frac{1.000}{(1,10)^{10}} = 491,57 + 385,54 = 877,11 \text{ USD}$$
> Mức thay đổi giá tương đối:
> $$\%\Delta P_B = \frac{877,11 - 1.000}{1.000} = -12,29\%$$
> Trái phiếu coupon $0\%$ có độ sụt giảm giá mạnh hơn đáng kể ($-16,76\%$ so với $-12,29\%$). Dòng tiền coupon trung gian của Trái phiếu B hoạt động như một lớp đệm phòng vệ rủi ro, làm giảm thời lượng thu hồi vốn bình quân ($DUR$).

> [!def] Thời lượng Macaulay (Macaulay Duration)
> Thời lượng Macaulay (ký hiệu $DUR$) là số đo thời gian bình quân gia quyền cho đến khi nhận được toàn bộ các dòng tiền kỳ vọng của công cụ nợ, trong đó trọng số $w_t$ gán cho mỗi mốc thời gian $t$ chính là tỷ trọng giá trị hiện tại của dòng tiền $CF_t$ so với tổng thị giá trái phiếu $P$:
> $$DUR = \sum_{t=1}^n t \cdot w_t = \frac{\sum_{t=1}^n t \cdot \frac{CF_t}{(1+i)^t}}{\sum_{t=1}^n \frac{CF_t}{(1+i)^t}} = \frac{1}{P} \sum_{t=1}^n t \cdot \frac{CF_t}{(1+i)^t}$$

> [!prp] Các đặc tính cấu trúc của Thời lượng Macaulay
> 1. Đối với trái phiếu zero-coupon, $DUR = n$ vì toàn bộ trọng số dòng tiền tập trung duy nhất tại thời điểm đáo hạn ($w_n = 1$).
> 2. Giữ nguyên các yếu tố khác, khi kỳ hạn danh nghĩa $n$ tăng thì $DUR$ tăng.
> 3. Giữ nguyên kỳ hạn, khi lãi suất coupon $c$ tăng thì $DUR$ giảm (do dòng tiền thanh toán sớm nhận tỷ trọng chiết khấu lớn hơn).
> 4. Giữ nguyên các yếu tố khác, khi lợi suất $i$ tăng thì $DUR$ giảm (do các dòng tiền ở xa trong tương lai bị chiết khấu mạnh hơn).

> [!exm] Bài toán tính thời lượng Macaulay tường minh
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
> $$\frac{dP}{di} = \sum_{t=1}^n (-t) CF_t (1+i)^{-t-1} = -\frac{1}{1+i} \sum_{t=1}^n t \frac{CF_t}{(1+i)^t} = -\frac{P \cdot DUR}{1+i}$$
> Chia hai vế cho $P$, ta thu được độ nhạy giá bậc nhất:
> $$\frac{1}{P}\frac{dP}{di} = -\frac{DUR}{1+i} = -DUR^*$$
> Lấy tiếp đạo hàm bậc hai:
> $$\frac{d^2P}{di^2} = \frac{1}{(1+i)^2} \sum_{t=1}^n \frac{t(t+1)CF_t}{(1+i)^t}$$
> Chia hai vế cho $P$ ta có công thức độ lồi $CX = \frac{1}{P}\frac{d^2P}{di^2}$.
> Khai triển chuỗi Taylor cho $\Delta P$:
> $$\Delta P \approx \frac{dP}{di}\Delta i + \frac{1}{2}\frac{d^2P}{di^2}(\Delta i)^2$$
> Chia cả hai vế cho $P$ ta có công thức xấp xỉ hoàn thiện:
> $$\frac{\Delta P}{P} \approx -DUR^* \cdot \Delta i + \frac{1}{2} CX (\Delta i)^2$$

> [!exm] Bài toán định lượng cú sốc lãi suất bất đối xứng qua độ lồi
> Một trái phiếu kỳ hạn 10 năm có mệnh giá $1.000$ USD, coupon $8\%$ đang giao dịch ngang giá tại mức YTM $i = 8\%$, với thời lượng hiệu chỉnh $DUR^* = 6,71$ năm và độ lồi $CX = 58,4$. Hãy ước lượng biến động giá phần trăm khi:
> 1. Lãi suất thị trường tăng $200$ điểm cơ bản ($\Delta i = +0,02$).
> 2. Lãi suất thị trường giảm $200$ điểm cơ bản ($\Delta i = -0,02$).
> 
> Giải pháp:
> Trường hợp 1 ($\Delta i = +0,02$):
> $\frac{\Delta P}{P} \approx -(6,71 \times 0,02) + \frac{1}{2}(58,4 \times 0,0004) = -0,1342 + 0,01168 = -12,252\%$
> (Giá trái phiếu giảm còn khoảng $877,48$ USD).
> Trường hợp 2 ($\Delta i = -0,02$):
> $\frac{\Delta P}{P} \approx -(6,71 \times (-0,02)) + \frac{1}{2}(58,4 \times 0,0004) = +0,1342 + 0,01168 = +14,588\%$
> (Giá trái phiếu tăng lên khoảng $1.145,88$ USD).
> Do thành phần độ lồi $\frac{1}{2}CX(\Delta i)^2 > 0$ luôn hỗ trợ giá trị, mức tăng giá khi lãi suất giảm luôn lớn hơn mức giảm giá khi lãi suất tăng cùng một biên độ.

> [!thm] Tính cộng gộp tuyến tính của Thời lượng danh mục và Miễn dịch Redington
> Thời lượng của một danh mục đầu tư gồm $m$ trái phiếu thành phần bằng tổng bình quân gia quyền theo giá trị thị trường của thời lượng từng chứng khoán:
> $$DUR_p = \sum_{j=1}^m w_j \cdot DUR_j, \quad \text{với } w_j = \frac{V_j}{V_p}, \sum_{j=1}^m w_j = 1$$
> Để miễn dịch hóa (Immunization) bảng cân đối kế toán hoặc quỹ tài trợ trước các cú sốc lãi suất song song, nhà quản lý danh mục thiết lập điều kiện cân bằng thời lượng Redington:
> $$DUR_{\text{Tài sản}} = DUR_{\text{Nợ phải trả}}$$

> [!prf]
> Xét giá trị thặng dư ròng $S(i) = A(i) - L(i)$.
> Điều kiện cần bậc nhất để thặng dư bất biến trước sự dịch chuyển lãi suất là $\frac{dS}{di} = 0$:
> $$\frac{dA}{di} - \frac{dL}{di} = 0 \iff A \left( \frac{1}{A}\frac{dA}{di} \right) = L \left( \frac{1}{L}\frac{dL}{di} \right)$$
> Áp dụng định nghĩa thời lượng hiệu chỉnh:
> $$A \left( -DUR_A^* \right) = L \left( -DUR_L^* \right) \iff A \cdot \frac{DUR_A}{1+i} = L \cdot \frac{DUR_L}{1+i}$$
> Triệt tiêu $\frac{1}{1+i}$ ở cả hai vế:
> $$A \cdot DUR_A = L \cdot DUR_L$$
> Khi danh mục được tài trợ cân bằng về quy mô thị giá ban đầu ($A = L$), điều kiện trở thành:
> $$DUR_A = DUR_L$$

> [!exm] Bài toán phân bổ cấu trúc miễn dịch danh mục nợ
> Một quỹ hưu trí có nghĩa vụ thanh toán tiền trợ cấp dự kiến là $100.000.000$ USD sau đúng $8$ năm ($DUR_L = 8,0$ năm). Quỹ dự định phân bổ tài sản vào hai loại trái phiếu:
> Trái phiếu X: Trái phiếu zero-coupon kỳ hạn 3 năm ($DUR_X = 3,0$ năm).
> Trái phiếu Y: Trái phiếu coupon kỳ hạn 10 năm ($DUR_Y = 8,5$ năm).
> Xác định tỷ trọng vốn đầu tư vào từng trái phiếu để hoàn tất cấu trúc miễn dịch Redington.
> 
> Giải pháp:
> Gọi $w_X$ là tỷ trọng đầu tư vào Trái phiếu X, tỷ trọng vào Trái phiếu Y là $1 - w_X$.
> Thiết lập phương trình cân bằng thời lượng:
> $$w_X \cdot DUR_X + (1 - w_X) \cdot DUR_Y = DUR_L$$
> $$3,0 w_X + 8,5(1 - w_X) = 8,0$$
> $$3,0 w_X + 8,5 - 8,5 w_X = 8,0 \implies 5,5 w_X = 0,5 \implies w_X = \frac{0,5}{5,5} \approx 9,09\%$$
> Tỷ trọng Trái phiếu Y: $w_Y = 1 - 0,0909 = 90,91\%$.
> Phân bổ vốn: Mua $9,09$ triệu USD Trái phiếu X và $90,91$ triệu USD Trái phiếu B để hoàn tất cấu trúc miễn dịch.