
# Thị trường Tiền tệ và Công cụ Chiết khấu Ngắn hạn

Thị trường tiền tệ là thị trường tài chính bán buôn dành cho các công cụ nợ ngắn hạn có thời gian đáo hạn không quá một năm. Các công cụ này có tính thanh khoản cao, rủi ro vỡ nợ thấp và chủ yếu giao dịch dưới hình thức chiết khấu thay vì thanh toán lãi định kỳ.

> [!def] Tín phiếu Kho bạc và Phương pháp Chiết khấu Ngân hàng
> Tín phiếu Kho bạc (T-bills) và Thương phiếu (Commercial Paper) là các công cụ vay nợ ngắn hạn không trả lãi coupon. Nhà đầu tư mua với giá chiết khấu $P$ thấp hơn mệnh giá $F$ và nhận lại toàn bộ mệnh giá khi đáo hạn sau $n$ ngày.
> 1. Lãi suất chiết khấu hàng năm ($y_d$):
> $$y_d = \frac{F - P}{F} \times \frac{360}{n}$$
> Giá mua tương ứng theo tỷ lệ chiết khấu:
> $$P = F \times \left( 1 - y_d \times \frac{n}{360} \right)$$
> 2. Lãi suất đầu tư hàng năm tương đương trái phiếu ($y_i$ / $BEY$):
> $$y_i = \frac{F - P}{P} \times \frac{365}{n}$$
> Mệnh giá thu hồi tương ứng theo lãi suất đầu tư:
> $$F = P \times \left( 1 + y_i \times \frac{n}{365} \right)$$

> [!def] Cơ chế Đấu thầu Tín phiếu Kho bạc
> Đợt phát hành sơ cấp của Kho bạc sử dụng cơ chế đấu giá đồng giá (Single-Price Dutch Auction):
> 1. Thầu không cạnh tranh (Noncompetitive bids): Được ưu tiên đáp ứng trọn vẹn 100% khối lượng yêu cầu trước khi phân bổ thầu cạnh tranh.
> 2. Thầu cạnh tranh (Competitive bids): Được sắp xếp theo thứ tự ưu tiên giảm dần của giá đặt mua (hoặc tăng dần của lợi suất yêu cầu). Kho bạc cộng dồn khối lượng từ giá cao nhất xuống giá thấp hơn cho đến khi đáp ứng đủ hạn ngạch còn lại.
> 3. Giá chốt thầu (Stop-out price): Mức giá trúng thầu thấp nhất được chấp nhận để khớp đủ tổng lượng chào bán. Tất cả các bên trúng thầu (cả cạnh tranh và không cạnh tranh) đều mua tại mức giá chốt thầu này.

> [!exm] Dạng 1: Xác định Lãi suất Chiết khấu và Lãi suất Đầu tư
> Một nhà đầu tư mua một tín phiếu Kho bạc kỳ hạn 182 ngày với giá 4.925 USD, mệnh giá nhận lại khi đáo hạn là 5.000 USD. Hãy tính tỷ lệ chiết khấu hàng năm và tỷ lệ đầu tư hàng năm của tín phiếu này.
> Giải pháp:
> Tham số đề bài: $F = 5.000$, $P = 4.925$, $n = 182$.
> 4. Lãi suất chiết khấu hàng năm:
> $$y_d = \frac{5.000 - 4.925}{5.000} \times \frac{360}{182} = \frac{75}{5.000} \times \frac{360}{182} \approx 2,967\%$$
> 5. Lãi suất đầu tư hàng năm:
> $$y_i = \frac{5.000 - 4.925}{4.925} \times \frac{365}{182} = \frac{75}{4.925} \times \frac{365}{182} \approx 3,054\%$$

> [!exm] Dạng 2: Xác định Giá mua Tối đa theo Lãi suất Chiết khấu Yêu cầu
> Nhà đầu tư yêu cầu mức sinh lời theo tỷ lệ chiết khấu hàng năm là 3,5% đối với tín phiếu Kho bạc kỳ hạn 91 ngày, mệnh giá 5.000 USD. Xác định mức giá tối đa nhà đầu tư chấp nhận chi trả.
> Giải pháp:
> Tham số đề bài: $F = 5.000$, $n = 91$, $y_d = 3,5\% = 0,035$.
> Áp dụng công thức chiết khấu:
> $$P = F \times \left( 1 - y_d \times \frac{n}{360} \right) = 5.000 \times \left( 1 - 0,035 \times \frac{91}{360} \right)$$
> $$P = 5.000 \times (1 - 0,0088472) = 5.000 \times 0,9911528 \approx 4.955,76 \text{ USD}$$

> [!exm] Dạng 3: Xác định Mệnh giá Đáo hạn theo Lãi suất Đầu tư
> Một thương phiếu kỳ hạn 182 ngày đang được giao dịch tại mức giá 7.840 USD. Nếu mức sinh lời theo tỷ lệ đầu tư hàng năm của công cụ này là 4,093%, xác định số tiền công cụ sẽ thanh toán khi đáo hạn.
> Giải pháp:
> Tham số đề bài: $P = 7.840$, $n = 182$, $y_i = 4,093\% = 0,04093$.
> Áp dụng công thức hoàn vốn đầu tư:
> $$F = P \times \left( 1 + y_i \times \frac{n}{365} \right) = 7.840 \times \left( 1 + 0,04093 \times \frac{182}{365} \right)$$
> $$F = 7.840 \times (1 + 0,020409) = 7.840 \times 1,020409 \approx 8.000,00 \text{ USD}$$

> [!exm] Dạng 4: Xác định Số ngày Đáo hạn của Công cụ Chiết khấu
> Một thương phiếu có mệnh giá 8.000 USD đang được bán với giá 7.930 USD. 
> 6. Nếu tỷ lệ chiết khấu hàng năm là 4%, xác định số ngày còn lại đến khi đáo hạn.
> 7. Nếu tỷ lệ đầu tư hàng năm là 4%, xác định số ngày còn lại đến khi đáo hạn.
> Giải pháp:
> Mức chiết khấu bằng tiền: $F - P = 8.000 - 7.930 = 70$ USD.
> 8. Theo tỷ lệ chiết khấu ($y_d = 0,04$):
> $$n = \frac{F - P}{F \times y_d} \times 360 = \frac{70}{8.000 \times 0,04} \times 360 = \frac{70}{320} \times 360 = 78,75 \approx 79 \text{ ngày}$$
> 9. Theo tỷ lệ đầu tư ($y_i = 0,04$):
> $$n = \frac{F - P}{P \times y_i} \times 365 = \frac{70}{7.930 \times 0,04} \times 365 = \frac{70}{317,2} \times 365 = 80,55 \approx 81 \text{ ngày}$$

> [!exm] Dạng 5: Thuật toán Phân bổ trong Phiên Đấu thầu Tín phiếu Kho bạc
> Kho bạc chào bán 2,1 tỷ USD tín phiếu kỳ hạn 91 ngày. Phiên đấu thầu nhận được 750 triệu USD thầu không cạnh tranh và danh sách các thầu cạnh tranh gồm:
> - Người 1: 500 triệu USD tại giá 0,9940 USD
> - Người 2: 750 triệu USD tại giá 0,9901 USD
> - Người 3: 1,5 triệu USD tại giá 0,9925 USD
> - Người 4: 1,0 triệu USD tại giá 0,9936 USD
> - Người 5: 600 triệu USD tại giá 0,9939 USD
> Hãy xác định các đối tượng được phân bổ, khối lượng nhận được và mức giá thanh toán.
> Giải pháp:
> Bước 1: Phân bổ trọn vẹn 750 triệu USD cho khối thầu không cạnh tranh.
> Khối lượng còn lại cho thầu cạnh tranh: $2.100 - 750 = 1.350$ triệu USD.
> Bước 2: Sắp xếp các lệnh thầu cạnh tranh theo thứ tự giá giảm dần và cộng dồn:
> 1. Người 1: Đặt giá 0,9940 USD; nhận trọn vẹn 500 triệu USD; hạn ngạch còn 850 triệu USD.
> 2. Người 5: Đặt giá 0,9939 USD; nhận trọn vẹn 600 triệu USD; hạn ngạch còn 250 triệu USD.
> 3. Người 4: Đặt giá 0,9936 USD; nhận trọn vẹn 1 triệu USD; hạn ngạch còn 249 triệu USD.
> 4. Người 3: Đặt giá 0,9925 USD; nhận trọn vẹn 1,5 triệu USD; hạn ngạch còn 247,5 triệu USD.
> 5. Người 2: Đặt giá 0,9901 USD; yêu cầu 750 triệu USD nhưng chỉ được phân bổ phần còn lại là 247,5 triệu USD.
> Bước 3: Xác định giá thanh toán. Mức giá trúng thầu thấp nhất được chấp nhận là 0,9901 USD. Toàn bộ các bên trúng thầu (kể cả khối không cạnh tranh) đều mua với mức giá 0,9901 USD cho mỗi đơn vị mệnh giá.

# Thị trường Trái phiếu và Định giá Thu nhập Cố định

Trái phiếu là chứng khoán nợ trung và dài hạn do chính phủ, chính quyền địa phương hoặc doanh nghiệp phát hành. Trái phiếu cam kết chi trả thu nhập định kỳ và hoàn trả vốn khi đáo hạn.

> [!def] Trái phiếu Trả lãi Định kỳ và Cấu trúc Thuế
> 1. Dòng tiền coupon định kỳ: Với mệnh giá $F$ và tỷ lệ coupon kỳ hạn $r$, khoản tiền lãi nhận mỗi kỳ là $C = F \cdot r$.
> 2. Định giá trái phiếu trả lãi nửa năm (Semi-annual coupon bond):
> $$P = \frac{C}{2} \cdot \left[ \frac{1 - \left(1 + \frac{i}{2}\right)^{-2n}}{\frac{i}{2}} \right] + K \cdot \left(1 + \frac{i}{2}\right)^{-2n}$$
> trong đó $K$ là giá trị chuộc lại khi đáo hạn ($K = F$ nếu hoàn trả ngang mệnh giá), $i$ là lợi suất danh nghĩa năm, và $2n$ là tổng số kỳ nửa năm.
> 3. Hiệu chỉnh thuế đối với trái phiếu đô thị: Do trái phiếu đô thị được miễn thuế thu nhập, lợi suất tương đương sau thuế của trái phiếu chịu thuế có cùng mức rủi ro được xác định bởi:
> $$i_{\text{tax-free}} = i_{\text{taxable}} \times (1 - \tau)$$
> trong đó $\tau$ là thuế suất thu nhập biên của nhà đầu tư.

> [!exm] Dạng 1: Định giá Trái phiếu Cấu trúc Tỷ số Coupon trên Lợi suất
> Nhà đầu tư xem xét hai trái phiếu có cùng mức lợi suất yêu cầu nửa năm $i$:
> - Trái phiếu X: Kỳ hạn $n$ năm, trả coupon nửa năm, mệnh giá $F = 1.000$, giá trị chuộc lại khi đáo hạn là $C_X$. Tỷ số giữa tỷ lệ coupon nửa năm và lợi suất nửa năm $\frac{r}{i} = 1,03125$. Giá trị hiện tại của khoản hoàn vốn khi đáo hạn là 381,50 USD.
> - Trái phiếu Y: Trái phiếu tích lũy (không có coupon), đáo hạn sau $\frac{n}{2}$ năm với cùng giá trị chuộc lại $C_X$. Giá thị trường hiện tại của Y là 647,80 USD.
> Hãy xác định giá thị trường của Trái phiếu X.
> Giải pháp:
> Gọi $m = 2n$ là số chu kỳ nửa năm của Trái phiếu X. Chu kỳ của Trái phiếu Y là $\frac{m}{2} = n$ kỳ nửa năm.
> Bước 1: Khai thác phương trình hiện giá hoàn vốn của hai trái phiếu:
> Hiện giá hoàn vốn của Trái phiếu X: $C_X \cdot (1+i)^{-2n} = 381,50$.
> Giá thị trường của Trái phiếu Y: $C_X \cdot (1+i)^{-n} = 647,80$.
> Lập tỷ số để tìm hệ số chiết khấu:
> $$(1+i)^{-n} = \frac{C_X \cdot (1+i)^{-2n}}{C_X \cdot (1+i)^{-n}} = \frac{381,50}{647,80} \approx 0,588916$$
> Suy ra hệ số chiết khấu cho toàn bộ kỳ hạn của X:
> $$(1+i)^{-2n} = \left[ (1+i)^{-n} \right]^2 = (0,588916)^2 \approx 0,346822$$
> Bước 2: Định giá Trái phiếu X theo tỷ số $\frac{r}{i}$:
> $$P_X = F \cdot \left(\frac{r}{i}\right) \cdot [1 - (1+i)^{-2n}] + C_X \cdot (1+i)^{-2n}$$
> Thay các giá trị đã biết:
> $$P_X = 1.000 \times 1,03125 \times (1 - 0,346822) + 381,50$$
> $$P_X = 1.031,25 \times 0,653178 + 381,50 = 673,59 + 381,50 = 1.055,09 \text{ USD}$$

> [!exm] Dạng 2: Khôi phục Lãi suất Coupon và Định giá Trái phiếu Hoàn vốn Khác Mệnh giá
> Một trái phiếu kỳ hạn 10 năm trả lãi hàng năm, mệnh giá 1.000 USD, giá trị chuộc lại khi đáo hạn là 1.100 USD, lãi suất coupon hàng năm là $r$.
> Biết rằng:
> 1. Tại mức lợi suất $i = 4\%$, giá trái phiếu là $P$.
> 2. Tại mức lợi suất $i = 5\%$, giá trái phiếu là $P - 81,49$.
> Hãy xác định lãi suất coupon $r$ và tính giá trị $X$ của trái phiếu khi mức lợi suất bằng đúng lãi suất coupon ($i = r$).
> Giải pháp:
> Dòng coupon hàng năm là $C = 1.000r$. Giá trị thanh toán cuối kỳ là $K = 1.100$.
> Phương trình định giá tổng quát:
> $$\text{Giá} = 1.000r \cdot \left[ \frac{1 - (1+i)^{-10}}{i} \right] + 1.100(1+i)^{-10}$$
> Bước 1: Thiết lập hệ phương trình tại hai mức lợi suất:
> - Tại $i = 0,04$:
> $$a_{\overline{10}|4\%} = \frac{1 - (1,04)^{-10}}{0,04} \approx 8,110896; \quad 1.100(1,04)^{-10} \approx 743,1248$$
> $$P = 8.110,896r + 743,1248 \quad (1)$$
> - Tại $i = 0,05$:
> $$a_{\overline{10}|5\%} = \frac{1 - (1,05)^{-10}}{0,05} \approx 7,721735; \quad 1.100(1,05)^{-10} \approx 675,3044$$
> $$P - 81,49 = 7.721,735r + 675,3044 \quad (2)$$
> Bước 2: Tìm lãi suất coupon $r$:
> Lấy phương trình (1) trừ phương trình (2):
> $$81,49 = (8.110,896 - 7.721,735)r + (743,1248 - 675,3044)$$
> $$81,49 = 389,161r + 67,8204 \implies 389,161r = 13,6696 \implies r \approx 0,03512 \approx 3,5\%$$
> Bước 3: Tính giá trị $X$ khi $i = r = 3,5\%$:
> $$a_{\overline{10}|3,5\%} = \frac{1 - (1,035)^{-10}}{0,035} \approx 8,3166$$
> Hiện giá thu hồi: $1.100 \times (1,035)^{-10} \approx 779,796$ USD.
> Tiền coupon hàng năm: $C = 1.000 \times 0,035 = 35$ USD.
> $$X = 35 \times 8,3166 + 779,796 = 291,08 + 779,80 \approx 1.070,88 \text{ USD}$$

> [!exm] Dạng 3: Khôi phục Cấu trúc Kỳ hạn Lãi suất từ Thị giá Trái phiếu
> Tại thời điểm ngày 01/01/1987, có ba trái phiếu cùng mệnh giá 100 USD, cùng có lãi suất coupon hàng năm 6% và hoàn vốn 100 USD khi đáo hạn:
> - Trái phiếu 1: Đáo hạn 31/12/1987 (1 năm), giá thị trường 101,92 USD.
> - Trái phiếu 2: Đáo hạn 31/12/1988 (2 năm), giá thị trường 102,84 USD.
> - Trái phiếu 3: Đáo hạn 31/12/1989 (3 năm), giá thị trường 105,51 USD.
> Các mức giá này dựa trên lãi suất năm đơn lẻ $i$ cho năm 1987, $j$ cho năm 1988, và $k$ cho năm 1989. Xác định lãi suất $j$ của năm 1988.
> Giải pháp:
> Dòng tiền coupon mỗi năm là $100 \times 6\% = 6$ USD.
> Bước 1: Khai thác trái phiếu đáo hạn 1 năm để tìm hệ số chiết khấu năm 1987:
> Dòng tiền nhận được cuối năm 1987 là $6 + 100 = 106$ USD.
> $$101,92 = \frac{106}{1 + i} \implies \frac{1}{1 + i} = \frac{101,92}{106} \approx 0,961509 \implies i \approx 4,00\%$$
> Bước 2: Khai thác trái phiếu đáo hạn 2 năm để tìm lãi suất $j$:
> Dòng tiền gồm 6 USD cuối năm 1987 và 106 USD cuối năm 1988.
> Phương trình cân bằng hiện giá:
> $$102,84 = \frac{6}{1 + i} + \frac{106}{(1 + i)(1 + j)}$$
> Thay giá trị $\frac{1}{1 + i} = \frac{101,92}{106}$:
> $$\frac{6}{1 + i} = 6 \times \frac{101,92}{106} \approx 5,76906 \text{ USD}$$
> Thay vào phương trình:
> $$102,84 = 5,76906 + \frac{106}{(1 + i)(1 + j)} \implies \frac{106}{(1 + i)(1 + j)} = 102,84 - 5,76906 = 97,07094$$
> Vì $\frac{106}{1+i} = 101,92$, biểu thức trở thành:
> $$\frac{101,92}{1 + j} = 97,07094 \implies 1 + j = \frac{101,92}{97,07094} \approx 1,04995 \implies j \approx 5,00\%$$