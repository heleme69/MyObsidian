
# Thị trường Tiền tệ (Money Market)

## Đặc điểm và Thành phần tham gia

Thị trường tiền tệ là nơi giao dịch các công cụ nợ ngắn hạn có thời gian đáo hạn không quá một năm (thường dưới 120 ngày). Đặc tính cốt lõi của thị trường này là tính thanh khoản cực cao, rủi ro vỡ nợ thấp và chủ yếu giao dịch với quy mô bán buôn.

Thành phần tham gia chính bao gồm:
- Kho bạc Nhà nước (Treasury): Phát hành T-bills để tài trợ thâm hụt ngân sách ngắn hạn.
- Ngân hàng Trung ương (Fed/SBV): Thực thi nghiệp vụ thị trường mở (OMO), điều tiết cung tiền và thanh khoản hệ thống.
- Ngân hàng thương mại: Quản lý thanh khoản, mua bán chứng khoán ngắn hạn để đáp ứng dự trữ bắt buộc.
- Doanh nghiệp lớn: Phát hành thương phiếu (Commercial Paper) nhằm huy động vốn lưu động ngắn hạn thay thế vay ngân hàng.
- Nhà môi giới và Nhà tạo lập thị trường (Dealers/Brokers): Duy trì tính liên tục của thị trường thứ cấp.

## Các Công cụ Thị trường Tiền tệ

> [!def] Các Công cụ Chiết khấu và Trả lãi Ngắn hạn
> 1. Tín phiếu Kho bạc (Treasury Bills - T-bills): Công cụ nợ phi rủi ro do Chính phủ phát hành. Không trả lãi định kỳ, phát hành theo cơ chế chiết khấu.
> 2. Quỹ Liên bang (Federal Funds): Các khoản vay dự trữ qua đêm giữa các ngân hàng thương mại để đáp ứng quy định dự trữ bắt buộc.
> 3. Hợp đồng Mua lại (Repurchase Agreements - Repos): Giao dịch bán chứng khoán ngắn hạn kèm cam kết mua lại vào một ngày và mức giá xác định trong tương lai (thường từ 1 đến 14 ngày), thực chất là khoản vay có tài sản thế chấp.
> 4. Chứng chỉ Tiền gửi Có thể Thương lượng (Negotiable CDs): Tiền gửi ngân hàng có kỳ hạn và lãi suất thỏa thuận, được phát hành dưới hình thức vô danh và giao dịch tự do trên thị trường thứ cấp.
> 5. Thương phiếu (Commercial Paper - CP): Giấy nhận nợ ngắn hạn không có tài sản đảm bảo do các doanh nghiệp có uy tín tín dụng cao phát hành, kỳ hạn tối đa 270 ngày.
> 6. Chấp phiếu Ngân hàng (Banker's Acceptances): Lệnh trả tiền có kỳ hạn do doanh nghiệp ký phát và được ngân hàng xác nhận bảo lãnh chi trả, công cụ chủ đạo tài trợ ngoại thương.
> 7. Eurodollars: Các khoản tiền gửi bằng đồng USD tại các tổ chức tín dụng ngoài biên giới Hoa Kỳ, không chịu quy định dự trữ bắt buộc của Fed.

## Định giá và Đo lường Lợi suất Công cụ Chiết khấu

> [!def] Phương pháp Chiết khấu Ngân hàng và Lãi suất Tương đương
> Với các công cụ chiết khấu ngắn hạn (T-bills, CP), giá mua $P$ luôn nhỏ hơn mệnh giá đáo hạn $F$.
> 1. Lãi suất chiết khấu hàng năm ($y_d$ hoặc $i_{db}$):
> $$y_d = \frac{F - P}{F} \times \frac{360}{n}$$
> Giá mua tương ứng theo tỷ lệ chiết khấu:
> $$P = F \times \left( 1 - y_d \times \frac{n}{360} \right)$$
> 2. Lãi suất đầu tư hàng năm tương đương trái phiếu ($y_i$ hoặc $i_{ytm}$ / $BEY$):
> $$y_i = \frac{F - P}{P} \times \frac{365}{n}$$
> Mệnh giá thu hồi tương ứng theo lãi suất đầu tư:
> $$F = P \times \left( 1 + y_i \times \frac{n}{365} \right)$$
> 3. Hàm chuyển đổi chuẩn giữa hai hệ lợi suất:
> $$i_{ytm} = \frac{365 \times i_{db}}{360 - (i_{db} \times n)}$$

> [!def] Cơ chế Đấu thầu Tín phiếu Kho bạc (Dutch Auction)
> Kho bạc phân bổ T-bills sơ cấp định kỳ qua đấu giá đơn giá (Single-Price Dutch Auction):
> 4. Thầu không cạnh tranh (Noncompetitive bids): Được phân bổ trước 100% khối lượng yêu cầu.
> 5. Thầu cạnh tranh (Competitive bids): Được xếp thứ tự ưu tiên giảm dần theo giá mua (tăng dần theo lợi suất). Kho bạc cộng dồn khối lượng từ cao xuống thấp đến khi đủ hạn ngạch.
> 6. Giá chốt thầu (Stop-out price): Mức giá trúng thầu thấp nhất khớp hạn ngạch cuối cùng. Tất cả người trúng thầu đều mua tại mức giá chốt này.

## Các Dạng Bài Tập Tiêu Biểu Thị trường Tiền tệ

> [!obs] Dạng 1: Chuyển đổi qua lại giữa Lãi suất Chiết khấu và Đầu tư
> Xuất phát từ định nghĩa quy chuẩn:
> - Lợi suất chiết khấu dựa trên mệnh giá $F$ và quy ước năm 360 ngày: $y_d = \frac{F - P}{F} \frac{360}{n} \implies P = F \left( 1 - y_d \frac{n}{360} \right)$
> - Lợi suất đầu tư dựa trên vốn thực bỏ ra $P$ và quy ước năm 365 ngày: $y_i = \frac{F - P}{P} \frac{365}{n} \implies F = P \left( 1 + y_i \frac{n}{365} \right)$
> - Chuyển đổi trực tiếp không cần qua bước tính giá: $y_i = \frac{365 \cdot y_d}{360 - y_d \cdot n}$

> [!exm] Dạng 1: Xác định Lãi suất Chiết khấu, Lãi suất Đầu tư và Chuyển đổi Lợi suất
> Một tín phiếu Kho bạc kỳ hạn $n = 91$ ngày, mệnh giá $F = 10.000$ USD được chào bán với giá $P = 9.850$ USD.
> 1. Tính tỷ lệ chiết khấu hàng năm ($y_d$) và tỷ lệ đầu tư hàng năm ($y_i$).
> 2. Kiểm chứng lại $y_i$ thông qua công thức chuyển đổi trực tiếp từ $y_d$.
> Giải pháp:
> Mức chiết khấu bằng tiền: $F - P = 10.000 - 9.850 = 150$ USD.
> 3. Tính các mức lợi suất:
> $$y_d = \frac{150}{10.000} \times \frac{360}{91} \approx 5,934\%$$
> $$y_i = \frac{150}{9.850} \times \frac{365}{91} \approx 6,108\%$$
> 4. Kiểm chứng qua công thức chuyển đổi:
> $$y_i = \frac{365 \times 0,05934}{360 - (0,05934 \times 91)} = \frac{21,6591}{360 - 5,40} = \frac{21,6591}{354,60} \approx 6,108\%$$
> Lợi suất chiết khấu $y_d$ đánh giá thấp thực tế khoảng 17 điểm cơ bản do dùng mẫu số $F$ lớn hơn $P$ và quy ước 360 ngày.

> [!obs] Dạng 2: Khôi phục Mệnh giá, Giá mua và Thời hạn đáo hạn
> - Khi biết $y_d$, giá mua tối đa là: $P = F \left( 1 - y_d \frac{n}{360} \right)$
> - Khi biết $y_i$, mệnh giá đáo hạn là: $F = P \left( 1 + y_i \frac{n}{365} \right)$
> - Rút kỳ hạn đáo hạn: $n = \frac{F - P}{F \cdot y_d} \times 360$ hoặc $n = \frac{F - P}{P \cdot y_i} \times 365$

> [!exm] Dạng 2: Xác định Thời hạn Đáo hạn và Giá mua Công cụ Chiết khấu
> Một thương phiếu có mệnh giá $F = 8.000$ USD đang giao dịch ở giá $P = 7.930$ USD.
> 1. Nếu lãi suất chiết khấu là $4\%$/năm, tính số ngày còn lại đến khi đáo hạn.
> 2. Nếu nhà đầu tư yêu cầu lãi suất đầu tư $4,093\%$/năm cho một thương phiếu 182 ngày có giá $7.840$ USD, mệnh giá hoàn trả sẽ là bao nhiêu?
> Giải pháp:
> 3. Xác định số ngày đáo hạn với mức chênh lệch $F - P = 70$ USD:
> $$n = \frac{70}{8.000 \times 0,04} \times 360 = \frac{70}{320} \times 360 = 78,75 \approx 79 \text{ ngày}$$
> 4. Xác định mệnh giá hoàn trả:
> $$F = 7.840 \times \left( 1 + 0,04093 \times \frac{182}{365} \right) = 7.840 \times (1 + 0,020409) \approx 8.000,00 \text{ USD}$$

> [!obs] Dạng 3: Phân bổ Đấu thầu Hà Lan (Dutch Auction)
> 5. Khấu trừ khối lượng thầu không cạnh tranh khỏi hạn ngạch:
>    $$\text{Hạn ngạch cạnh tranh} = \text{Tổng hạn ngạch} - \text{Tổng thầu không cạnh tranh}$$
> 6. Sắp xếp giá thầu cạnh tranh theo thứ tự giảm dần: $P_{(1)} > P_{(2)} > \dots > P_{(k)}$.
> 7. Cộng dồn lượng đặt mua cho đến khi hết hạn ngạch. Mức giá tại điểm chạm hạn ngạch là giá chốt thầu $P_{\text{stop-out}}$. Toàn bộ khối lượng được phân bổ đều khớp theo giá $P_{\text{stop-out}}$.

> [!exm] Dạng 3: Phân bổ Đấu thầu Tín phiếu Kho bạc
> Kho bạc phát hành 2,1 tỷ USD T-bills 91 ngày. Thầu không cạnh tranh gửi về 750 triệu USD. Danh sách thầu cạnh tranh:
> - Người 1: 500 triệu USD tại giá 0,9940 USD
> - Người 2: 750 triệu USD tại giá 0,9901 USD
> - Người 3: 1,5 triệu USD tại giá 0,9925 USD
> - Người 4: 1,0 triệu USD tại giá 0,9936 USD
> - Người 5: 600 triệu USD tại giá 0,9939 USD
> Phân bổ khối lượng và xác định mức giá thanh toán cuối cùng.
> Giải pháp:
> Khối không cạnh tranh được khớp 100%: 750 triệu USD.
> Hạn ngạch còn lại cho thầu cạnh tranh: $2.100 - 750 = 1.350$ triệu USD.
> Sắp xếp theo giá giảm dần:
> 1. Người 1 (0,9940 USD): Nhận 500 triệu USD; hạn ngạch còn 850 triệu USD.
> 2. Người 5 (0,9939 USD): Nhận 600 triệu USD; hạn ngạch còn 250 triệu USD.
> 3. Người 4 (0,9936 USD): Nhận 1 triệu USD; hạn ngạch còn 249 triệu USD.
> 4. Người 3 (0,9925 USD): Nhận 1,5 triệu USD; hạn ngạch còn 247,5 triệu USD.
> 5. Người 2 (0,9901 USD): Yêu cầu 750 triệu USD nhưng chỉ được phân bổ phần dư 247,5 triệu USD.
> Giá chốt thầu (Stop-out price) là 0,9901 USD. Mọi chủ thể trúng thầu đều mua tại giá 0,9901 USD trên mỗi đơn vị mệnh giá.

> [!obs] Dạng 4: Lãi suất Kỳ hạn trên Thị trường Tiền tệ Ngắn hạn
> Áp dụng nguyên lý Không kinh doanh chênh lệch giá (No-Arbitrage) giữa hai kỳ hạn ngắn hạn với lãi suất năm tương đương $y_1$ (cho $n_1$ ngày) và $y_2$ (cho $n_2$ ngày, với $n_2 > n_1$):
> Theo quy tắc ghép lãi phân kỳ ngắn hạn:
> $$\left(1 + y_2 \frac{n_2}{365}\right) = \left(1 + y_1 \frac{n_1}{365}\right) \left(1 + f \frac{n_2 - n_1}{365}\right)$$
> Rút ra tỷ lệ lãi suất kỳ hạn năm quy ước $f$ cho giai đoạn từ ngày $n_1$ đến $n_2$:
> $$f = \left[ \frac{1 + y_2 \frac{n_2}{365}}{1 + y_1 \frac{n_1}{365}} - 1 \right] \times \frac{365}{n_2 - n_1}$$

> [!exm] Dạng 4: Xác định Lãi suất Kỳ hạn Ngắn hạn (Forward Rate)
> Lợi suất hàng năm của thương phiếu kỳ hạn 91 ngày là $y_1 = 3,0\%$ và thương phiếu kỳ hạn 182 ngày là $y_2 = 3,5\%$. Xác định lãi suất thương phiếu 91 ngày kỳ vọng sau 91 ngày nữa ($f$).
> Giải pháp:
> Hệ số tích lũy cho kỳ hạn 182 ngày:
> $$1 + y_2 \frac{182}{365} = 1 + 0,035 \times \frac{182}{365} = 1 + 0,017452 = 1,017452$$
> Hệ số tích lũy cho kỳ hạn 91 ngày:
> $$1 + y_1 \frac{91}{365} = 1 + 0,030 \times \frac{91}{365} = 1 + 0,007479 = 1,007479$$
> Tỷ suất tích lũy cho 91 ngày thứ hai ($n_2 - n_1 = 91$ ngày):
> $$1 + f \frac{91}{365} = \frac{1,017452}{1,007479} \approx 1,009899$$
> Lãi suất kỳ hạn hàng năm quy ước:
> $$f = 0,009899 \times \frac{365}{91} \approx 3,97\%/\text{năm}$$

> [!obs] Dạng 5: Chi phí cơ hội trong Trạng thái Lãi suất Âm
> Khi $i < 0$, giá mua $P_0$ cao hơn giá nhận về $P_1 = P_0(1 + i \cdot t)$.
> Khoản tổn thất danh nghĩa: $L = P_0 - P_1 = P_0 \cdot (-i) \cdot t$.
> Nếu nắm giữ tiền mặt vật chất, chi phí kho bãi và bảo quản an toàn là $C = P_0 \cdot c_{\text{storage}} \cdot t$.
> Nắm giữ công cụ nợ lãi suất âm tối ưu hơn giữ tiền mặt khi và chỉ khi $L < C \iff -i < c_{\text{storage}}$.

> [!exm] Dạng 5: Định lượng Ranh giới Kinh tế của Lãi suất Âm
> Một ngân hàng nắm giữ 50.000.000 EUR dự định đầu tư vào tín phiếu chính phủ kỳ hạn 6 tháng (0,5 năm) với lợi suất $i = -0,40\%$/năm. Chi phí bảo quản và bảo hiểm tiền mặt vật chất ước tính $0,65\%$/năm. Đánh giá tính kinh tế của giao dịch.
> Giải pháp:
> Giá trị nhận về khi đáo hạn:
> $$P_1 = 50.000.000 \times [1 + (-0,004 \times 0,5)] = 49.900.000 \text{ EUR}$$
> Mức lỗ vốn danh nghĩa: $50.000.000 - 49.900.000 = 100.000$ EUR.
> Chi phí lưu trữ tiền mặt vật chất tương ứng:
> $$C = 50.000.000 \times 0,0065 \times 0,5 = 162.500 \text{ EUR}$$
> Chênh lệch thặng dư kinh tế: $162.500 - 100.000 = 62.500$ EUR.
> Ngân hàng tiết kiệm được 62.500 EUR bằng việc đầu tư vào tín phiếu lãi suất âm thay vì giữ tiền mặt.


# Thị trường Trái phiếu (Bond Market)

## Đặc điểm và Phân loại Trái phiếu

Thị trường Trái phiếu thuộc Thị trường Vốn (Capital Market), giao dịch các công cụ nợ có kỳ hạn gốc lớn hơn 1 năm. Trái phiếu đại diện cho nghĩa vụ hoàn trả gốc và lãi của tổ chức phát hành đối với nhà đầu tư.

> [!def] Phân loại theo Cơ chế Dòng tiền
> 1. Trái phiếu Chiết khấu / Không hưởng lãi định kỳ (Discount / Zero-Coupon Bond):
> Trái phiếu không thanh toán bất kỳ dòng coupon trung gian nào ($C = 0$). Trái phiếu được bán tại mức thị giá thấp hơn mệnh giá ($P < F$) và hoàn trả một lần duy nhất mệnh giá $F$ tại ngày đáo hạn $n$:
> $$P = \frac{F}{(1+i)^n} \iff i = \left( \frac{F}{P} \right)^{1/n} - 1$$
> Đặc tính cấu trúc: Toàn bộ dòng tiền tập trung tại thời điểm đáo hạn, do đó thời lượng Macaulay của trái phiếu zero-coupon bằng đúng kỳ hạn của nó ($DUR = n$), dẫn đến độ nhạy cảm giá trước biến động lãi suất cao nhất so với các trái phiếu có cùng kỳ hạn.
> 
> 2. Trái phiếu Trả lãi định kỳ (Coupon Bond):
> Chứng khoán nợ cam kết chi trả các khoản tiền lãi coupon định kỳ $C = F \cdot c$ cho đến ngày đáo hạn $n$. Tại ngày đáo hạn, nhà phát hành thanh toán khoản coupon cuối cùng kèm theo hoàn trả nguyên vẹn giá trị danh nghĩa $F$ (hoặc giá trị chuộc lại thỏa thuận $K$):
> $$P = \sum_{t=1}^n \frac{C}{(1+i)^t} + \frac{K}{(1+i)^n} = C \cdot \left[ \frac{1 - (1+i)^{-n}}{i} \right] + K \cdot (1+i)^{-n}$$
> Đặc tính cấu trúc: Dòng tiền nhận được trải dài theo các kỳ trung gian, do đó thời lượng Macaulay luôn nhỏ hơn kỳ hạn danh nghĩa ($DUR < n$), giúp phân tán và làm giảm độ biến động giá trước các cú sốc lãi suất.

> [!def] Phân loại theo Chủ thể Phát hành và Cấu trúc Thể chế
> 1. Trái phiếu Kho bạc (Treasury Notes & Bonds): Do chính phủ phát hành để tài trợ nợ quốc gia, không có rủi ro vỡ nợ tín dụng. Notes có kỳ hạn gốc từ 1 đến 10 năm; Bonds có kỳ hạn gốc từ 10 đến 30 năm.
> 2. Trái phiếu Chính quyền Địa phương (Municipal Bonds): Do chính quyền bang, hạt hoặc thành phố phát hành (gồm General Obligation Bonds tài trợ tiện ích công cộng và Revenue Bonds tài trợ các dự án sinh dòng tiền). Tiền lãi nhận được được miễn thuế thu nhập liên bang.
> 3. Trái phiếu Doanh nghiệp (Corporate Bonds): Công cụ nợ trung và dài hạn của doanh nghiệp. Bao gồm trái phiếu có tài sản thế chấp đảm bảo (Secured Bonds) và trái phiếu tín chấp thuần túy (Debentures). Thường đi kèm các cam kết bảo vệ (Restrictive Covenants) nhằm kiểm soát mâu thuẫn đại diện giữa cổ đông và chủ nợ.
> 4. Trái phiếu Rác (Junk Bonds): Các trái phiếu có mức xếp hạng tín nhiệm dưới cấp đầu tư (dưới Baa của Moody's hoặc dưới BBB của S&P), có rủi ro vỡ nợ cao và chi trả lợi suất bù đắp lớn.

> [!prp] Các Điều khoản Đặc quyền Kèm theo Trái phiếu Doanh nghiệp
> - Call Provision (Quyền chuộc lại): Cho phép doanh nghiệp thu hồi trái phiếu trước hạn nếu lãi suất thị trường giảm, bảo vệ nhà phát hành nhưng đẩy rủi ro tái đầu tư sang trái chủ.
> - Conversion (Quyền chuyển đổi): Cho phép nhà đầu tư chuyển đổi trái phiếu thành một số lượng cổ phiếu phổ thông xác định theo tỷ lệ quy định, giúp doanh nghiệp hạ thấp chi phí lãi coupon khi phát hành.

## Cấu trúc Thuế, Lạm phát và Lợi suất Thực

> [!prp] Cân bằng Lợi suất Trái phiếu Đô thị và Hiệu ứng Thuế
> Để so sánh lợi suất sau thuế giữa trái phiếu doanh nghiệp chịu thuế và trái phiếu chính quyền địa phương miễn thuế:
> $$i_{\text{tax-free}} = i_{\text{taxable}} \times (1 - \tau)$$
> trong đó $\tau$ là thuế suất thu nhập biên của nhà đầu tư. Thuế suất hòa vốn khiến nhà đầu tư bàng quan giữa hai loại trái phiếu là $\tau^* = 1 - \frac{i_{\text{tax-free}}}{i_{\text{taxable}}}$.

> [!def] Trái phiếu Bảo vệ khỏi Lạm phát (TIPS)
> Treasury Inflation-Protected Securities (TIPS) bảo toàn sức mua bằng cách điều chỉnh mệnh giá danh nghĩa $F_t$ liên tục theo biến động của chỉ số CPI:
> $$F_t = F_0 \times \frac{CPI_t}{CPI_0}$$
> Tiền lãi coupon thực tế được xác định bởi $C_t = F_t \times c_r$. Lợi suất của TIPS phản ánh trực tiếp lãi suất thực phi rủi ro trên thị trường cân bằng.

## Định giá Trái phiếu và Đo lường Lợi suất

> [!def] Các Mô hình Định giá và Đo lường Lợi suất
> 1. Trái phiếu trả lãi nửa năm (Semi-annual coupon bond):
> $$P = \frac{C}{2} \cdot \left[ \frac{1 - \left(1 + \frac{i}{2}\right)^{-2n}}{\frac{i}{2}} \right] + K \cdot \left(1 + \frac{i}{2}\right)^{-2n}$$
> 2. Trái phiếu vĩnh viễn (Consol / Perpetuity): Không có ngày đáo hạn ($n \to \infty$):
> $$P = \frac{C}{i} \iff i = \frac{C}{P}$$
> 3. Tỷ suất sinh lời trong kỳ nắm giữ (Holding Period Return):
> $$R = \frac{C + (P_{t+1} - P_t)}{P_t} = i_c + g$$
> trong đó $i_c = \frac{C}{P_t}$ là lợi suất hiện hành và $g = \frac{P_{t+1} - P_t}{P_t}$ là tỷ lệ lãi/lỗ vốn.

## Các Dạng Bài Tập Tiêu Biểu Thị trường Trái phiếu

> [!obs] Dạng 1: So sánh Lợi suất sau Thuế và Thuế suất Biên Hòa vốn
> - Lợi suất sau thuế của trái phiếu chịu thuế: $i_{\text{after-tax}} = i_{\text{taxable}}(1 - \tau)$.
> - Điều kiện chọn trái phiếu đô thị: $i_{\text{tax-free}} > i_{\text{taxable}}(1 - \tau)$.
> - Thuế suất biên hòa vốn: $\tau^* = 1 - \frac{i_{\text{tax-free}}}{i_{\text{taxable}}}$.

> [!exm] Dạng 1: Lựa chọn Danh mục Tối ưu theo Hiệu ứng Thuế
> 1. Lợi suất trái phiếu doanh nghiệp là $10\%$, bán ngang mệnh giá. Thuế suất biên của nhà đầu tư là $20\%$. Có một trái phiếu đô thị mệnh giá ngang bằng với lãi suất coupon $8,50\%$. Nhà đầu tư nên chọn loại nào?
> 2. Nếu lợi suất trái phiếu đô thị là $4,25\%$ và lợi suất trái phiếu doanh nghiệp là $6,25\%$, xác định thuế suất biên khiến nhà đầu tư bàng quan giữa hai loại chứng khoán.
> Giải pháp:
> 3. So sánh lợi suất sau thuế:
> Lợi suất sau thuế của trái phiếu doanh nghiệp:
> $$i_{\text{after-tax}} = 10\% \times (1 - 0,20) = 8,00\%$$
> Vì $8,50\% > 8,00\%$, nhà đầu tư nên chọn mua trái phiếu đô thị (Municipal Bond).
> 4. Xác định thuế suất hòa vốn:
> $$4,25\% = 6,25\% \times (1 - \tau^*) \implies 1 - \tau^* = \frac{4,25}{6,25} = 0,68 \implies \tau^* = 32\%$$
> Nếu thuế suất biên lớn hơn $32\%$, trái phiếu đô thị sẽ sinh lời vượt trội; nếu nhỏ hơn $32\%$, trái phiếu doanh nghiệp ưu thế hơn.

> [!obs] Dạng 2: Định giá Trái phiếu Trả lãi Nửa năm và Nội suy YTM
> - Phương trình định giá theo kỳ ghép lãi nửa năm:
>   $$P = \frac{C}{2} \cdot a_{\overline{2n}|i/2} + F \left(1 + \frac{i}{2}\right)^{-2n}$$
> - Phương pháp nội suy tuyến tính tìm YTM ($i^*$): Tìm hai mốc $i_1, i_2$ sao cho $P(i_1) > P_{\text{thị trường}} > P(i_2)$:
>   $$i^* \approx i_1 + (i_2 - i_1) \frac{P(i_1) - P_{\text{thị trường}}}{P(i_1) - P(i_2)}$$

> [!exm] Dạng 2: Định giá Trái phiếu Trả lãi Nửa năm và Tìm Lợi suất Đáo hạn YTM
> 1. Một trái phiếu kỳ hạn 2 năm, mệnh giá $1.000$ USD, coupon $10\%$/năm trả lãi nửa năm. Lợi suất yêu cầu trên thị trường là $12\%$/năm. Xác định giá thị trường của trái phiếu.
> 2. Một trái phiếu kỳ hạn 8 năm, mệnh giá $1.000$ USD, coupon hàng năm $10\%$, hiện đang bán với giá $1.150$ USD. Xác định YTM của trái phiếu.
> Giải pháp:
> 3. Định giá trái phiếu 2 năm ($2n = 4$ kỳ; coupon nửa năm $C/2 = 50$ USD; lãi suất kỳ $i/2 = 6\%$):
> $$P = 50 \cdot \left[ \frac{1 - (1,06)^{-4}}{0,06} \right] + \frac{1.000}{(1,06)^4} = 50 \times 3,4651 + 1.000 \times 0,7921 = 173,25 + 792,10 = 965,35 \text{ USD}$$
> 4. Tìm YTM của trái phiếu 8 năm trả lãi năm ($C = 100$ USD, $F = 1.000$ USD, $P = 1.150$ USD):
> Vì $P > F$, ta biết chắc $YTM < c = 10\%$.
> - Thử tại $i_1 = 8\%$: $P(8\%) = 100 \cdot a_{\overline{8}|8\%} + 1.000(1,08)^{-8} = 100 \times 5,7466 + 540,27 = 1.114,93$ USD.
> - Thử tại $i_2 = 7\%$: $P(7\%) = 100 \cdot a_{\overline{8}|7\%} + 1.000(1,07)^{-8} = 100 \times 5,9713 + 582,01 = 1.179,14$ USD.
> Nội suy tìm $i^*$:
> $$i^* \approx 7\% + (8\% - 7\%) \times \frac{1.179,14 - 1.150,00}{1.179,14 - 1.114,93} = 7\% + 1\% \times \frac{29,14}{64,21} \approx 7,45\%/\text{năm}$$

> [!obs] Dạng 3: Định giá theo Tỷ số Coupon trên Lợi suất ($r/i$)
> Derive từ phương trình tổng quát:
> $$P = F \cdot r \cdot a_{\overline{m}|i} + K(1+i)^{-m} = F \cdot \left(\frac{r}{i}\right) [1 - (1+i)^{-m}] + K(1+i)^{-m}$$
> Nếu một trái phiếu zero-coupon có cùng giá trị hoàn vốn $K$ và kỳ hạn bằng một nửa $m/2$, ta có:
> $$(1+i)^{-m/2} = \frac{PV_{K, m}}{PV_{K, m/2}} \implies (1+i)^{-m} = \left[ (1+i)^{-m/2} \right]^2$$

> [!exm] Dạng 3: Khôi phục Giá trị Trái phiếu từ Tỷ số Lãi suất $r/i$
> Trái phiếu X kỳ hạn $n$ năm trả lãi nửa năm, mệnh giá $F = 1.000$, tỷ số giữa lãi suất coupon nửa năm $r$ và lợi suất nửa năm $i$ là $\frac{r}{i} = 1,03125$. Hiện giá của khoản hoàn vốn khi đáo hạn là 381,50 USD. Trái phiếu zero-coupon Y đáo hạn sau $\frac{n}{2}$ năm cùng giá trị hoàn vốn có thị giá 647,80 USD. Xác định thị giá Trái phiếu X.
> Giải pháp:
> Gọi $m = 2n$ là số kỳ của X, số kỳ của Y là $n$.
> Lập tỷ số hiện giá hoàn vốn:
> $$(1+i)^{-n} = \frac{K(1+i)^{-2n}}{K(1+i)^{-n}} = \frac{381,50}{647,80} \approx 0,588916$$
> Hệ số chiết khấu cho toàn bộ $2n$ kỳ của X:
> $$(1+i)^{-2n} = (0,588916)^2 \approx 0,346822$$
> Giá thị trường Trái phiếu X:
> $$P_X = 1.000 \times 1,03125 \times (1 - 0,346822) + 381,50 = 673,59 + 381,50 = 1.055,09 \text{ USD}$$

> [!obs] Dạng 4: Cấu trúc Kỳ hạn Lãi suất và Kỹ thuật Bootstrapping
> Dựa trên nguyên lý Không kinh doanh chênh lệch giá, mỗi dòng tiền phát sinh tại mốc $t$ được chiết khấu bằng lãi suất giao ngay (spot rate) $s_t$ tương ứng hoặc chuỗi lãi suất kỳ hạn 1 năm:
> $$P_1 = \frac{C + F}{1 + s_1}$$
> $$P_2 = \frac{C}{1 + s_1} + \frac{C + F}{(1 + s_2)^2} = \frac{C}{1 + i_1} + \frac{C + F}{(1 + i_1)(1 + i_2)}$$
> Giải phương trình $P_1$ để tìm $s_1$ (hoặc $i_1$), thế vào phương trình $P_2$ để giải tìm $s_2$ (hoặc $i_2$).

> [!exm] Dạng 4: Bóc tách Cấu trúc Kỳ hạn Lãi suất từ Thị giá
> Ba trái phiếu mệnh giá 100 USD, coupon hàng năm 6%, hoàn vốn 100 USD khi đáo hạn vào cuối các năm 1, 2, 3 có giá lần lượt là 101,92 USD; 102,84 USD; 105,51 USD. Xác định lãi suất đơn lẻ của năm thứ hai ($j$).
> Giải pháp:
> Coupon hàng năm: $C = 6$ USD.
> Trái phiếu 1 năm:
> $$101,92 = \frac{106}{1+i} \implies \frac{1}{1+i} = \frac{101,92}{106} \approx 0,961509 \implies i \approx 4,00\%$$
> Trái phiếu 2 năm:
> $$102,84 = \frac{6}{1+i} + \frac{106}{(1+i)(1+j)} = 6 \times \frac{101,92}{106} + \frac{101,92}{1+j} = 5,76906 + \frac{101,92}{1+j}$$
> $$\frac{101,92}{1+j} = 102,84 - 5,76906 = 97,07094 \implies 1+j = \frac{101,92}{97,07094} \approx 1,0500 \implies j = 5,00\%$$

> [!obs] Dạng 5: Trái phiếu Vĩnh viễn và Chuyển đổi sang Niên kim Hữu hạn
> - Trái phiếu vĩnh viễn (Consol): $P_{\text{consol}} = \frac{C}{i} \iff i = \frac{C}{P_{\text{consol}}}$.
> - Niên kim hữu hạn $n$ kỳ cùng mức chi trả $C$ và lãi suất $i$:
>   $$P_{\text{annuity}} = C \cdot a_{\overline{n}|i} = C \cdot \left[ \frac{1 - (1+i)^{-n}}{i} \right] = P_{\text{consol}} \cdot [1 - (1+i)^{-n}]$$

> [!exm] Dạng 5: Chuyển đổi giữa Dòng tiền Vĩnh viễn và Niên kim Hữu hạn
> 1. Nhà đầu tư sẵn sàng trả $15.625$ USD để mua trái phiếu vĩnh viễn chi trả $1.250$ USD mỗi năm. Nếu mức sinh lời yêu cầu không đổi, nhà đầu tư sẽ trả bao nhiêu nếu đây là niên kim thường 20 năm?
> 2. Thuế bất động sản hàng năm bằng $2,66\%$ giá trị nhà. Một căn nhà có giá $100.000$ USD, lãi suất chiết khấu là $9\%$/năm. Xác định giá trị hiện tại của toàn bộ nghĩa vụ thuế vĩnh viễn.
> Giải pháp:
> 3. Tỷ suất sinh lời yêu cầu từ trái phiếu vĩnh viễn:
> $$i = \frac{1.250}{15.625} = 0,08 = 8\%/\text{năm}$$
> Giá trị hiện tại của niên kim hữu hạn 20 năm:
> $$P = 1.250 \cdot a_{\overline{20}|8\%} = 1.250 \cdot \left[ \frac{1 - (1,08)^{-20}}{0,08} \right] = 1.250 \times 9,818147 \approx 12.272,68 \text{ USD}$$
> (Hoặc tính nhanh: $P = 15.625 \times [1 - (1,08)^{-20}] = 15.625 \times 0,78545 \approx 12.272,68$ USD).
> 4. Nghĩa vụ thuế phát sinh đều đặn hàng năm vĩnh viễn: $C = 100.000 \times 2,66\% = 2.660$ USD.
> Hiện giá toàn bộ dòng thuế:
> $$PV = \frac{2.660}{0,09} \approx 29.555,56 \text{ USD}$$

> [!obs] Dạng 6: Kỳ Nắm giữ Ngắn hạn và Rủi ro Tái đầu tư (RCY)
> - Tỷ suất sinh lời trong kỳ nắm giữ 1 năm: $R = \frac{C + P_1 - P_0}{P_0} = i_c + g$. Để đạt tỷ suất mục tiêu $R^*$, giá bán cần thiết là $P_1 = P_0(1 + R^*) - C$.
> - Lợi suất kép thực nhận (Realized Compound Yield - RCY):
>   $$P_0 (1 + RCY)^n = C \cdot s_{\overline{n}|r_{\text{reinvest}}} + F \implies RCY = \left( \frac{FV_n}{P_0} \right)^{1/n} - 1$$

> [!exm] Dạng 6: Đánh giá Tỷ suất Sinh lời Thực nhận và Rủi ro Tái đầu tư
> 1. Nhà đầu tư mua trái phiếu 10 năm, coupon $7\%$, mệnh giá $1.000$ USD với giá $871,65$ USD. Năm sau bán lại với giá $880,10$ USD. Tính tỷ suất sinh lời thực nhận $R$.
> 2. Nhà đầu tư mua trái phiếu 3 năm, mệnh giá $1.000$ USD, coupon $10\%$ ngang giá ($P_0 = 1.000$ USD, $YTM = 10\%$). Sau khi mua, lãi suất tái đầu tư giảm xuống còn $6\%$/năm trong suốt kỳ hạn. Tính RCY khi đáo hạn.
> Giải pháp:
> 3. Tính tỷ suất sinh lời 1 năm ($C = 70$ USD):
> $$R = \frac{70 + (880,10 - 871,65)}{871,65} = \frac{70 + 8,45}{871,65} = \frac{78,45}{871,65} \approx 9,00\%$$
> 4. Tính lợi suất kép thực nhận RCY:
> Chuỗi coupon tích lũy tại $6\%$: $FV_{\text{coupon}} = 100(1,06)^2 + 100(1,06) + 100 = 318,36$ USD.
> Tổng tài sản đáo hạn: $FV_3 = 1.000 + 318,36 = 1.318,36$ USD.
> $$RCY = \left( \frac{1.318,36}{1.000} \right)^{1/3} - 1 \approx 9,65\%$$
> Do coupon tái đầu tư ở lãi suất thấp hơn ban đầu ($6\% < 10\%$), $RCY$ bị sụt giảm từ $10\%$ xuống $9,65\%$.

> [!obs] Dạng 7: Trái phiếu Chống Lạm phát TIPS và Lạm phát Hòa vốn
> - Mệnh giá hiệu chỉnh: $F_t = F_0 \prod_{k=1}^t (1 + \pi_k)$; Coupon kỳ $t$: $C_t = F_t \cdot c_r$.
> - Lạm phát hòa vốn: $\pi_{\text{breakeven}} = i_{\text{Danh nghĩa}} - i_{r,\text{TIPS}}$.
> - Lợi suất sau thuế: Trái phiếu thường là $i(1 - \tau) - \pi$; TIPS là $i_{\text{TIPS}}(1 - \tau) - \pi$, với $1 + i_{\text{TIPS}} = (1 + i_r)(1 + \pi)$.

> [!exm] Dạng 7: Định giá TIPS và So sánh Hiệu quả Sau thuế
> Trái phiếu TIPS 10 năm có $F_0 = 1.000$ USD, coupon thực $2\%$/năm, lợi suất thực $2,5\%$. Lạm phát năm 1 là $5\%$, năm 2 là $3\%$.
> 1. Tính dòng tiền nhận được ở năm 1 và 2. Xác định lạm phát hòa vốn nếu trái phiếu chính phủ danh nghĩa cùng kỳ hạn có lợi suất $6,6\%$.
> 2. Nhà đầu tư có thuế suất biên $30\%$, lạm phát dự kiến $4\%$. Giữa trái phiếu thường ($i = 7\%$) và TIPS ($i_r = 2,5\%$), phương án nào có lợi suất thực sau thuế cao hơn?
> Giải pháp:
> 3. Dòng tiền điều chỉnh:
> Năm 1: $F_1 = 1.000 \times 1,05 = 1.050$ USD; $C_1 = 1.050 \times 2\% = 21,00$ USD.
> Năm 2: $F_2 = 1.050 \times 1,03 = 1.081,50$ USD; $C_2 = 1.081,50 \times 2\% = 21,63$ USD.
> Lạm phát hòa vốn: $\pi_{\text{breakeven}} = 6,6\% - 2,5\% = 4,1\%$.
> 4. So sánh sau thuế:
> - Trái phiếu thường: $i_{r,at} = 7\% \times (1 - 0,30) - 4\% = 4,90\% - 4\% = 0,90\%$.
> - Trái phiếu TIPS: $1 + i_{\text{TIPS}} = 1,025 \times 1,04 = 1,066 \implies i_{\text{TIPS}} = 6,6\%$.
>   $i_{r,at} = 6,6\% \times (1 - 0,30) - 4\% = 4,62\% - 4\% = 0,62\%$.
> Trái phiếu thường ưu thế hơn do thuế đánh trên cả phần bù lạm phát của TIPS.

> [!obs] Dạng 8: Thời lượng Macaulay Danh mục và Độ lồi Taylor
> - Thời lượng danh mục gồm $m$ tài sản:
>   $$DUR_p = \sum_{j=1}^m w_j \cdot DUR_j, \quad \text{với } w_j = \frac{V_j}{V_{\text{tổng}}}$$
> - Khai triển Taylor bậc hai ước lượng biến động giá:
>   $$\frac{\Delta P}{P} \approx -DUR^* \cdot \Delta i + \frac{1}{2} CX (\Delta i)^2, \quad \text{với } DUR^* = \frac{DUR}{1+i}$$

> [!exm] Dạng 8: Thời lượng Macaulay Danh mục và Ước lượng Biến động Giá Bất đối xứng
> 1. Một ngân hàng có hai khoản vay 3 năm tổng giá trị hiện tại 70 triệu USD: Khoản 1 trị giá 30 triệu USD là khoản vay zero-coupon trả 37,8 triệu USD sau 3 năm; Khoản 2 trị giá 40 triệu USD trả lãi hàng năm 3,6 triệu USD và gốc 40 triệu USD sau 3 năm. Lãi suất thị trường là $8\%$/năm. Tính Duration của danh mục và ước lượng biến động giá trị danh mục khi lãi suất tăng lên $8,5\%$.
> 2. Một trái phiếu có $DUR^* = 6,71$ năm và độ lồi $CX = 58,4$. Ước lượng thay đổi giá khi lãi suất tăng $200$ bps và giảm $200$ bps.
> Giải pháp:
> 3. Thời lượng danh mục khoản vay:
> - Khoản 1 (Zero-coupon 3 năm): $DUR_1 = 3,0$ năm.
> - Khoản 2 (Coupon bond 3 năm, $C = 3,6$, $F = 40$, $i = 8\%$):
>   $$P_2 = \frac{3,6}{1,08} + \frac{3,6}{(1,08)^2} + \frac{43,6}{(1,08)^3} = 3,333 + 3,086 + 34,611 = 41,03 \text{ triệu USD}$$
>   Trọng số dòng tiền:
>   $$DUR_2 = \frac{1 \times 3,333 + 2 \times 3,086 + 3 \times 34,611}{41,03} = \frac{3,333 + 6,172 + 103,833}{41,03} = \frac{113,338}{41,03} \approx 2,76 \text{ năm}$$
> - Trọng số danh mục: $w_1 = \frac{30}{70} = \frac{3}{7}$; $w_2 = \frac{40}{70} = \frac{4}{7}$.
>   $$DUR_p = \left(\frac{3}{7} \times 3,0\right) + \left(\frac{4}{7} \times 2,76\right) \approx 1,286 + 1,577 = 2,863 \text{ năm}$$
> - Biến động giá trị khi $\Delta i = +0,005$:
>   $$\Delta V_p \approx -V_p \cdot \frac{DUR_p}{1+i} \cdot \Delta i = -70 \times \frac{2,863}{1,08} \times 0,005 \approx -0,928 \text{ triệu USD}$$
> 2. Ước lượng biến động giá qua Taylor bậc hai:
> - Khi $\Delta i = +0,02$: $\frac{\Delta P}{P} \approx -(6,71 \times 0,02) + \frac{1}{2}(58,4 \times 0,0004) = -13,42\% + 1,168\% = -12,252\%$.
> - Khi $\Delta i = -0,02$: $\frac{\Delta P}{P} \approx -(6,71 \times (-0,02)) + \frac{1}{2}(58,4 \times 0,0004) = +13,42\% + 1,168\% = +14,588\%$.
> Độ lồi giúp bù đắp rủi ro: giá tăng nhiều hơn khi lãi suất giảm và giảm ít hơn khi lãi suất tăng cùng một biên độ.