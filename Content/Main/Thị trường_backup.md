
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

> [!obs] Dạng: Chuyển đổi Lợi suất Chiết khấu sang Lợi suất Đầu tư
> Xuất phát từ hai định nghĩa: $y_d = \frac{F - P}{F} \frac{360}{n}$ và $y_i = \frac{F - P}{P} \frac{365}{n}$.
> Từ định nghĩa của $y_d$, rút ra giá mua:
> $$P = F \left( 1 - y_d \frac{n}{360} \right)$$
> Thế biểu thức của $P$ và lượng chênh lệch $F - P = F \cdot y_d \frac{n}{360}$ vào định nghĩa $y_i$:
> $$y_i = \frac{F \cdot y_d \frac{n}{360}}{F \left( 1 - y_d \frac{n}{360} \right)} \times \frac{365}{n} = \frac{365 \cdot y_d}{360 - y_d \cdot n}$$

> [!exm] Dạng: Chuyển đổi Lợi suất Chiết khấu sang Lợi suất Đầu tư
> Một tín phiếu Kho bạc kỳ hạn $n = 91$ ngày, mệnh giá $F = 10.000$ USD được chào bán với giá $P = 9.850$ USD.
> 1. Tính tỷ lệ chiết khấu hàng năm ($y_d$).
> 2. Quy đổi trực tiếp sang tỷ lệ đầu tư tương đương trái phiếu ($y_i$).
> Giải pháp:
> 3. Mức chiết khấu bằng tiền: $F - P = 10.000 - 9.850 = 150$ USD.
> $$y_d = \frac{150}{10.000} \times \frac{360}{91} \approx 5,934\%$$
> 4. Áp dụng công thức chuyển đổi trực tiếp:
> $$y_i = \frac{365 \times 0,05934}{360 - (0,05934 \times 91)} = \frac{21,6591}{360 - 5,3999} = \frac{21,6591}{354,6001} \approx 6,108\%$$

> [!obs] Dạng: Khôi phục Kỳ hạn Đáo hạn của Công cụ Chiết khấu
> Từ công thức định nghĩa lợi suất chiết khấu ngân hàng:
> $$y_d = \frac{F - P}{F} \times \frac{360}{n}$$
> Nhân chéo $n$ và chia hai vế cho $y_d$, ta rút ra số ngày còn lại đến khi đáo hạn:
> $$n = \frac{F - P}{F \cdot y_d} \times 360$$

> [!exm] Dạng: Khôi phục Kỳ hạn Đáo hạn của Công cụ Chiết khấu
> Một thương phiếu có mệnh giá $F = 8.000$ USD đang được giao dịch trên thị trường với giá $P = 7.930$ USD. Biết lãi suất chiết khấu hàng năm niêm yết là $y_d = 4\%$, hãy xác định số ngày còn lại đến khi công cụ này đáo hạn.
> Giải pháp:
> Chênh lệch giữa mệnh giá và giá mua: $F - P = 8.000 - 7.930 = 70$ USD.
> Áp dụng công thức rút kỳ hạn $n$:
> $$n = \frac{70}{8.000 \times 0,04} \times 360 = \frac{70}{320} \times 360 = 78,75 \approx 79 \text{ ngày}$$

> [!obs] Dạng: Thuật toán Phân bổ Đấu thầu Hà Lan (Single-Price Dutch Auction)
> 5. Xác định hạn ngạch cạnh tranh:
>    $$\text{Hạn ngạch cạnh tranh} = \text{Tổng hạn ngạch chào bán} - \sum \text{Khối lượng thầu không cạnh tranh}$$
> 6. Sắp xếp các mức giá đặt thầu cạnh tranh theo thứ tự giảm dần: $P_{(1)} > P_{(2)} > \dots > P_{(k)}$.
> 7. Lũy kế khối lượng đặt thầu theo thứ tự ưu tiên cho đến khi chạm hạn ngạch cạnh tranh. Mức giá tại điểm chạm hạn ngạch là giá chốt thầu $P_{\text{stop-out}}$. Toàn bộ khối lượng trúng thầu đều mua tại mức giá $P_{\text{stop-out}}$ này.

> [!exm] Dạng: Thuật toán Phân bổ Đấu thầu Hà Lan (Single-Price Dutch Auction)
> Kho bạc phát hành 2,1 tỷ USD T-bills 91 ngày. Thầu không cạnh tranh gửi về 750 triệu USD. Danh sách thầu cạnh tranh gồm:
> - Người 1: 500 triệu USD tại giá 0,9940 USD
> - Người 2: 750 triệu USD tại giá 0,9901 USD
> - Người 3: 1,5 triệu USD tại giá 0,9925 USD
> - Người 4: 1,0 triệu USD tại giá 0,9936 USD
> - Người 5: 600 triệu USD tại giá 0,9939 USD
> Phân bổ khối lượng và xác định mức giá thanh toán cuối cùng.
> Giải pháp:
> Bước 1: Khối không cạnh tranh được khớp toàn bộ: 750 triệu USD.
> Hạn ngạch còn lại cho thầu cạnh tranh: $2.100 - 750 = 1.350$ triệu USD.
> Bước 2: Sắp xếp theo giá giảm dần và trừ lùi hạn ngạch:
> 1. Người 1 (0,9940 USD): Nhận 500 triệu USD; hạn ngạch còn $1.350 - 500 = 850$ triệu USD.
> 2. Người 5 (0,9939 USD): Nhận 600 triệu USD; hạn ngạch còn $850 - 600 = 250$ triệu USD.
> 3. Người 4 (0,9936 USD): Nhận 1,0 triệu USD; hạn ngạch còn $250 - 1 = 249$ triệu USD.
> 4. Người 3 (0,9925 USD): Nhận 1,5 triệu USD; hạn ngạch còn $249 - 1,5 = 247,5$ triệu USD.
> 5. Người 2 (0,9901 USD): Đặt mua 750 triệu USD nhưng chỉ được nhận phần dư cuối cùng là 247,5 triệu USD.
> Bước 3: Mức giá trúng thầu thấp nhất được chấp nhận là $P_{\text{stop-out}} = 0,9901$ USD. Toàn bộ các bên trúng thầu đều thanh toán tại giá 0,9901 USD trên mỗi đơn vị mệnh giá.

> [!obs] Dạng: Lãi suất Kỳ hạn trên Thị trường Tiền tệ Ngắn hạn (Forward Rate)
> Xét hai kỳ hạn ngắn hạn với số ngày $n_1 < n_2$, tương ứng với các mức lợi suất năm $y_1$ và $y_2$. Theo nguyên lý Không kinh doanh chênh lệch giá (No-Arbitrage), tích lũy vốn qua một khoản đầu tư dài hạn $n_2$ ngày phải bằng tích lũy vốn liên tiếp qua kỳ $n_1$ ngày rồi tái đầu tư trong $n_2 - n_1$ ngày còn lại với lãi suất kỳ hạn $f$:
> $$\left(1 + y_2 \frac{n_2}{365}\right) = \left(1 + y_1 \frac{n_1}{365}\right) \left(1 + f \frac{n_2 - n_1}{365}\right)$$
> Chia hai vế cho $\left(1 + y_1 \frac{n_1}{365}\right)$ và cô lập $f$:
> $$f = \left[ \frac{1 + y_2 \frac{n_2}{365}}{1 + y_1 \frac{n_1}{365}} - 1 \right] \times \frac{365}{n_2 - n_1}$$

> [!exm] Dạng: Lãi suất Kỳ hạn trên Thị trường Tiền tệ Ngắn hạn (Forward Rate)
> Lợi suất hàng năm của thương phiếu kỳ hạn 91 ngày là $y_1 = 3,0\%$ và thương phiếu kỳ hạn 182 ngày là $y_2 = 3,5\%$. Xác định lãi suất thương phiếu 91 ngày kỳ vọng sau 91 ngày nữa ($f$).
> Giải pháp:
> Hệ số tích lũy cho kỳ hạn 182 ngày:
> $$1 + y_2 \frac{182}{365} = 1 + 0,035 \times \frac{182}{365} \approx 1,017452$$
> Hệ số tích lũy cho kỳ hạn 91 ngày:
> $$1 + y_1 \frac{91}{365} = 1 + 0,030 \times \frac{91}{365} \approx 1,007479$$
> Lãi suất kỳ hạn quy năm cho khoảng thời gian 91 ngày tiếp theo:
> $$f = \left[ \frac{1,017452}{1,007479} - 1 \right] \times \frac{365}{91} = (1,009899 - 1) \times \frac{365}{91} \approx 3,97\%/\text{năm}$$

> [!obs] Dạng: Điều kiện Tối ưu Kinh tế khi Lãi suất Danh nghĩa Âm
> Khi lợi suất danh nghĩa $i < 0$, giá trị thu hồi cuối kỳ sau thời gian $t$ là $P_1 = P_0(1 + i \cdot t) < P_0$.
> Khoản lỗ vốn danh nghĩa khi nắm giữ công cụ:
> $$L_{\text{bond}} = P_0 - P_1 = P_0 \cdot (-i) \cdot t$$
> Nếu chuyển sang giữ tiền mặt vật chất, chi phí kiểm đếm, lưu kho và bảo hiểm theo tỷ lệ chi phí $c_{\text{storage}}$ là:
> $$C_{\text{cash}} = P_0 \cdot c_{\text{storage}} \cdot t$$
> Quyết định đầu tư vào trái phiếu lãi suất âm tối ưu hơn nắm giữ tiền mặt khi:
> $$L_{\text{bond}} < C_{\text{cash}} \iff -i < c_{\text{storage}}$$

> [!exm] Dạng: Điều kiện Tối ưu Kinh tế khi Lãi suất Danh nghĩa Âm
> Một ngân hàng nắm giữ 50.000.000 EUR dự định đầu tư vào tín phiếu chính phủ kỳ hạn 6 tháng ($t = 0,5$ năm) với lợi suất danh nghĩa âm $i = -0,40\%$/năm. Chi phí bảo quản và bảo hiểm tiền mặt vật chất ước tính $c_{\text{storage}} = 0,65\%$/năm. Đánh giá tính kinh tế của giao dịch.
> Giải pháp:
> Khoản tổn thất danh nghĩa khi đầu tư tín phiếu:
> $$L_{\text{bond}} = 50.000.000 \times (-(-0,004)) \times 0,5 = 100.000 \text{ EUR}$$
> Chi phí lưu trữ tiền mặt vật chất trong cùng khoảng thời gian:
> $$C_{\text{cash}} = 50.000.000 \times 0,0065 \times 0,5 = 162.500 \text{ EUR}$$
> Thặng dư kinh tế mang lại:
> $$C_{\text{cash}} - L_{\text{bond}} = 162.500 - 100.000 = 62.500 \text{ EUR}$$
> Ngân hàng tiết kiệm được 62.500 EUR bằng cách chấp nhận mức lãi suất âm thay vì giữ tiền mặt.


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
> 1. Trái phiếu trả lãi $m$ kỳ trong năm:
> $$P = \frac{C}{m} \cdot \left[ \frac{1 - \left(1 + \frac{i}{m}\right)^{-m \cdot n}}{\frac{i}{m}} \right] + K \cdot \left(1 + \frac{i}{m}\right)^{-m \cdot n}$$
> 2. Trái phiếu vĩnh viễn (Consol / Perpetuity): Không có ngày đáo hạn ($n \to \infty$):
> $$P = \frac{C}{i} \iff i = \frac{C}{P}$$
> 3. Tỷ suất sinh lời trong kỳ nắm giữ (Holding Period Return):
> $$R = \frac{C + (P_{t+1} - P_t)}{P_t} = i_c + g$$
> trong đó $i_c = \frac{C}{P_t}$ là lợi suất hiện hành và $g = \frac{P_{t+1} - P_t}{P_t}$ là tỷ lệ lãi/lỗ vốn.

## Các Dạng Bài Tập Tiêu Biểu Thị trường Trái phiếu

> [!obs] Dạng: Cân bằng Thuế suất Biên Hòa vốn
> Thu nhập từ trái phiếu doanh nghiệp chịu thuế suất biên $\tau$, do đó lợi suất sau thuế thực nhận là $i_{\text{taxable}}(1 - \tau)$. Thu nhập từ trái phiếu đô thị được miễn thuế liên bang nên giữ nguyên mức lợi suất niêm yết $i_{\text{tax-free}}$.
> Tại điểm hòa vốn bàng quan giữa hai phương án:
> $$i_{\text{taxable}}(1 - \tau^*) = i_{\text{tax-free}}$$
> Chia hai vế cho $i_{\text{taxable}}$ và chuyển vế:
> $$\tau^* = 1 - \frac{i_{\text{tax-free}}}{i_{\text{taxable}}}$$

> [!exm] Dạng: Cân bằng Thuế suất Biên Hòa vốn
> Lợi suất trái phiếu chính quyền địa phương được miễn thuế là $4,25\%$/năm, trong khi lợi suất trái phiếu doanh nghiệp chịu thuế có cùng mức độ rủi ro là $6,25\%$/năm. Xác định mức thuế suất thu nhập biên hòa vốn khiến nhà đầu tư hoàn toàn bàng quan giữa hai trái phiếu này.
> Giải pháp:
> Áp dụng phương trình cân bằng sau thuế:
> $$4,25\% = 6,25\% \times (1 - \tau^*)$$
> Rút ra thuế suất hòa vốn:
> $$1 - \tau^* = \frac{4,25\%}{6,25\%} = 0,68 \implies \tau^* = 1 - 0,68 = 32\%$$
> Nhà đầu tư có thuế suất biên lớn hơn 32% nên mua trái phiếu đô thị; nhà đầu tư có thuế suất biên nhỏ hơn 32% nên mua trái phiếu doanh nghiệp.

> [!obs] Dạng: Định giá Trái phiếu Trả lãi Phân kỳ $m$ Lần trong Năm
> Dựa trên mô hình Canonical Cash Flow từ note Lãi suất: khi một năm có $m$ kỳ trả lãi, kỳ hạn $n$ năm tương ứng với tổng số kỳ thanh toán là $N = m \cdot n$. Lãi suất chiết khấu cho mỗi kỳ phân kỳ là $i_{\text{kỳ}} = \frac{i}{m}$, và khoản chi trả coupon mỗi kỳ là $C_{\text{kỳ}} = \frac{C}{m}$.
> Hiện giá của dòng coupon phân kỳ:
> $$PV_{\text{coupon}} = \frac{C}{m} \cdot a_{\overline{m \cdot n}|i/m} = \frac{C}{m} \left[ \frac{1 - \left(1 + \frac{i}{m}\right)^{-m \cdot n}}{\frac{i}{m}} \right]$$
> Hiện giá của khoản hoàn vốn $K$ khi đáo hạn:
> $$PV_K = K \cdot \left(1 + \frac{i}{m}\right)^{-m \cdot n}$$
> Tổng hợp lại, thị giá trái phiếu trả lãi $m$ lần mỗi năm là:
> $$P = \frac{C}{m} \left[ \frac{1 - \left(1 + \frac{i}{m}\right)^{-m \cdot n}}{\frac{i}{m}} \right] + K \left(1 + \frac{i}{m}\right)^{-m \cdot n}$$

> [!exm] Dạng: Định giá Trái phiếu Trả lãi Phân kỳ $m$ Lần trong Năm
> Một trái phiếu kỳ hạn $n = 2$ năm, mệnh giá $F = 1.000$ USD, hoàn vốn ngang mệnh giá ($K = 1.000$ USD). Lãi suất coupon là $10\%$/năm chi trả nửa năm một lần ($m = 2$). Lợi suất yêu cầu đến hạn của thị trường là $i = 12\%$/năm. Xác định mức giá hợp lý của trái phiếu.
> Giải pháp:
> Các thông số theo kỳ nửa năm:
> - Số kỳ thanh toán: $N = m \cdot n = 2 \times 2 = 4$ kỳ.
> - Coupon mỗi kỳ: $C/m = \frac{1.000 \times 10\%}{2} = 50$ USD.
> - Lãi suất chiết khấu mỗi kỳ: $i_{\text{kỳ}} = \frac{12\%}{2} = 6\% = 0,06$.
> Hiện giá dòng coupon:
> $$PV_{\text{coupon}} = 50 \times \left[ \frac{1 - (1,06)^{-4}}{0,06} \right] = 50 \times 3,465106 \approx 173,26 \text{ USD}$$
> Hiện giá khoản hoàn vốn:
> $$PV_K = 1.000 \times (1,06)^{-4} \approx 792,09 \text{ USD}$$
> Thị giá của trái phiếu:
> $$P = 173,26 + 792,09 = 965,35 \text{ USD}$$

> [!obs] Dạng: Phương pháp Nội suy Tuyến tính Tìm Lợi suất Đáo hạn YTM
> Giả sử cần giải phương trình cân bằng hiện giá phi tuyến để tìm nghiệm lợi suất $i^*$ thỏa mãn $P(i^*) = P_{\text{thị trường}}$.
> Do hàm giá trị hiện tại $P(i)$ là hàm nghịch biến nghiêm ngặt theo lãi suất, ta chọn hai mốc lãi suất thử $i_1 < i_2$ đủ gần nhau sao cho thị giá thực tế bị kẹp ở giữa:
> $$P(i_1) > P_{\text{thị trường}} > P(i_2)$$
> Thay thế đường cong giá phi tuyến bằng đường thẳng cát tuyến nối hai điểm $(i_1, P(i_1))$ và $(i_2, P(i_2))$, ta thu được công thức xấp xỉ bậc nhất:
> $$i^* \approx i_1 + (i_2 - i_1) \times \frac{P(i_1) - P_{\text{thị trường}}}{P(i_1) - P(i_2)}$$

> [!exm] Dạng: Phương pháp Nội suy Tuyến tính Tìm Lợi suất Đáo hạn YTM
> Một trái phiếu kỳ hạn 8 năm, mệnh giá $F = 1.000$ USD, lãi suất coupon hàng năm $10\%$ ($C = 100$ USD). Trái phiếu hiện đang được bán trên thị trường với giá $P_{\text{thị trường}} = 1.150$ USD. Hãy xác định lợi suất đáo hạn (YTM) của trái phiếu bằng phương pháp nội suy tuyến tính.
> Giải pháp:
> Vì thị giá cao hơn mệnh giá ($1.150 > 1.000$), trái phiếu đang bán ở mức phần bù (premium), do đó $YTM < c = 10\%$.
> Ta chọn hai mốc lãi suất thử:
> - Tại $i_1 = 7\% = 0,07$:
>   $$P(7\%) = 100 \left[ \frac{1 - (1,07)^{-8}}{0,07} \right] + 1.000(1,07)^{-8} = 100 \times 5,971299 + 582,0091 \approx 1.179,14 \text{ USD}$$
> - Tại $i_2 = 8\% = 0,08$:
>   $$P(8\%) = 100 \left[ \frac{1 - (1,08)^{-8}}{0,08} \right] + 1.000(1,08)^{-8} = 100 \times 5,746639 + 540,2689 \approx 1.114,93 \text{ USD}$$
> Nhận thấy: $P(7\%) = 1.179,14 > 1.150,00 > P(8\%) = 1.114,93$. Áp dụng công thức nội suy tuyến tính:
> $$i^* \approx 0,07 + (0,08 - 0,07) \times \frac{1.179,14 - 1.150,00}{1.179,14 - 1.114,93}$$
> $$i^* \approx 0,07 + 0,01 \times \frac{29,14}{64,21} \approx 0,07 + 0,004538 \approx 7,45\%/\text{năm}$$

> [!obs] Dạng: Cấu trúc Kỳ hạn Lãi suất và Kỹ thuật Bootstrapping
> Theo nguyên lý Không kinh doanh chênh lệch giá, giá trị hiện tại của một trái phiếu coupon bằng tổng hiện giá của từng dòng tiền chiết khấu theo chuỗi lãi suất đơn lẻ của từng năm tương ứng ($i_1, i_2, \dots$):
> $$P_1 = \frac{C_1 + F}{1 + i_1}$$
> $$P_2 = \frac{C_2}{1 + i_1} + \frac{C_2 + F}{(1 + i_1)(1 + i_2)}$$
> Rút $\frac{1}{1 + i_1} = \frac{P_1}{C_1 + F}$ từ phương trình kỳ hạn 1 năm thế trực tiếp vào phương trình kỳ hạn 2 năm:
> $$P_2 = C_2 \left( \frac{P_1}{C_1 + F} \right) + \frac{C_2 + F}{1 + i_2} \left( \frac{P_1}{C_1 + F} \right)$$
> Từ đó giải ra nghiệm $1 + i_2$.

> [!exm] Dạng: Cấu trúc Kỳ hạn Lãi suất và Kỹ thuật Bootstrapping
> Ba trái phiếu mệnh giá 100 USD, coupon hàng năm 6% ($C = 6$ USD), hoàn vốn 100 USD khi đáo hạn vào cuối các năm 1, 2, 3 có giá thị trường lần lượt là $P_1 = 101,92$ USD; $P_2 = 102,84$ USD; $P_3 = 105,51$ USD. Xác định lãi suất đơn lẻ của năm thứ hai ($j$).
> Giải pháp:
> Xét trái phiếu 1 năm:
> $$101,92 = \frac{106}{1+i} \implies \frac{1}{1+i} = \frac{101,92}{106} \approx 0,961509 \implies i \approx 4,00\%$$
> Xét trái phiếu 2 năm:
> $$102,84 = \frac{6}{1+i} + \frac{106}{(1+i)(1+j)} = 6 \times \left(\frac{101,92}{106}\right) + \frac{106}{1+j} \times \left(\frac{101,92}{106}\right)$$
> $$102,84 = 5,769057 + \frac{101,92}{1+j}$$
> Rút ra giá trị của $1+j$:
> $$\frac{101,92}{1+j} = 102,84 - 5,769057 = 97,070943 \implies 1+j = \frac{101,92}{97,070943} \approx 1,0500 \implies j = 5,00\%$$

> [!obs] Dạng: Chuyển đổi giữa Trái phiếu Vĩnh viễn và Niên kim Hữu hạn
> Với dòng tiền hàng năm cố định $C$:
> - Giá trái phiếu vĩnh viễn (Consol): $P_{\text{consol}} = \lim_{n \to \infty} \sum_{t=1}^n \frac{C}{(1+i)^t} = \frac{C}{i} \iff i = \frac{C}{P_{\text{consol}}}$.
> - Giá niên kim hữu hạn $n$ năm: $P_{\text{annuity}} = C \cdot \left[ \frac{1 - (1+i)^{-n}}{i} \right]$.
> Thay biểu thức $\frac{C}{i} = P_{\text{consol}}$ vào công thức niên kim:
> $$P_{\text{annuity}} = P_{\text{consol}} \times [1 - (1+i)^{-n}]$$

> [!exm] Dạng: Chuyển đổi giữa Trái phiếu Vĩnh viễn và Niên kim Hữu hạn
> Nhà đầu tư sẵn sàng trả $15.625$ USD để mua một trái phiếu vĩnh viễn chi trả $1.250$ USD vào cuối mỗi năm mãi mãi. Nếu tỷ suất sinh lời yêu cầu này không đổi, nhà đầu tư sẽ trả bao nhiêu nếu công cụ được sửa đổi thành niên kim thông thường có kỳ hạn hữu hạn 20 năm?
> Giải pháp:
> Lợi suất chiết khấu yêu cầu từ trái phiếu vĩnh viễn:
> $$i = \frac{C}{P_{\text{consol}}} = \frac{1.250}{15.625} = 0,08 = 8\%/\text{năm}$$
> Áp dụng trực tiếp công thức chuyển đổi sang niên kim hữu hạn 20 năm:
> $$P_{\text{annuity}} = P_{\text{consol}} \times [1 - (1+i)^{-n}] = 15.625 \times [1 - (1,08)^{-20}]$$
> Vì $(1,08)^{-20} \approx 0,214548$, ta có:
> $$P_{\text{annuity}} = 15.625 \times (1 - 0,214548) = 15.625 \times 0,785452 \approx 12.272,69 \text{ USD}$$

> [!obs] Dạng: Lợi suất Kép Thực nhận trước Rủi ro Tái đầu tư (RCY)
> Khi nhà đầu tư mua trái phiếu với giá $P_0$ và nắm giữ đến khi đáo hạn $n$ năm, toàn bộ $n$ khoản coupon $C$ được tái đầu tư tại lãi suất $r_{\text{reinvest}}$.
> Giá trị tương lai của chuỗi coupon tại ngày đáo hạn:
> $$FV_{\text{coupon}} = C \cdot s_{\overline{n}|r_{\text{reinvest}}} = C \left[ \frac{(1 + r_{\text{reinvest}})^n - 1}{r_{\text{reinvest}}} \right]$$
> Tổng tài sản thu hồi khi đáo hạn gồm coupon tái đầu tư và mệnh giá $F$:
> $$FV_{\text{total}} = FV_{\text{coupon}} + F$$
> Theo định nghĩa, Lợi suất kép thực nhận (Realized Compound Yield - RCY) là mức lãi suất kép thỏa mãn phương trình tích lũy từ vốn gốc ban đầu:
> $$P_0 (1 + RCY)^n = FV_{\text{total}} \iff RCY = \left( \frac{FV_{\text{total}}}{P_0} \right)^{1/n} - 1$$

> [!exm] Dạng: Lợi suất Kép Thực nhận trước Rủi ro Tái đầu tư (RCY)
> Nhà đầu tư mua một trái phiếu kỳ hạn 3 năm, mệnh giá $1.000$ USD, coupon $10\%$/năm trả lãi hàng năm tại mức giá ngang mệnh giá $P_0 = 1.000$ USD ($YTM = 10\%$). Sau khi mua, lãi suất tái đầu tư trên thị trường giảm xuống còn $6\%$/năm trong suốt thời gian nắm giữ. Tính lợi suất kép thực nhận (RCY) của nhà đầu tư.
> Giải pháp:
> Coupon nhận được mỗi năm: $C = 1.000 \times 10\% = 100$ USD.
> Tích lũy chuỗi coupon sau 3 năm tại lãi suất tái đầu tư $6\%$:
> $$FV_{\text{coupon}} = 100(1,06)^2 + 100(1,06) + 100 = 112,36 + 106,00 + 100,00 = 318,36 \text{ USD}$$
> Tổng giá trị tài sản thu được tại ngày đáo hạn $t = 3$:
> $$FV_{\text{total}} = 318,36 + 1.000 = 1.318,36 \text{ USD}$$
> Giải phương trình tìm RCY:
> $$1 + RCY = \left( \frac{1.318,36}{1.000} \right)^{1/3} = (1,31836)^{1/3} \approx 1,09647$$
> $$RCY \approx 9,65\%/\text{năm}$$
> Mức sinh lời thực tế giảm từ 10% xuống 9,65% do rủi ro tái đầu tư.

> [!obs] Dạng: Lợi suất Thực Sau thuế của TIPS và Trái phiếu Danh nghĩa
> - Với trái phiếu danh nghĩa: Lợi suất sau thuế danh nghĩa là $i(1 - \tau)$. Trừ đi tỷ lệ lạm phát kỳ vọng $\pi$, lợi suất thực sau thuế là:
>   $$i_{r,at}^{\text{Nominal}} = i(1 - \tau) - \pi$$
> - Với trái phiếu TIPS: Lợi suất thực bảo đảm là $i_r$. Lợi suất danh nghĩa tương đương xác định qua đồng nhất thức Fisher: $1 + i_{\text{TIPS}} = (1 + i_r)(1 + \pi) \implies i_{\text{TIPS}} = i_r + \pi + i_r \pi$. Do thuế đánh trên toàn bộ phần lợi suất danh nghĩa này, lợi suất thực sau thuế của TIPS là:
>   $$i_{r,at}^{\text{TIPS}} = i_{\text{TIPS}}(1 - \tau) - \pi$$

> [!exm] Dạng: Lợi suất Thực Sau thuế của TIPS và Trái phiếu Danh nghĩa
> Một nhà đầu tư có thuế suất thu nhập biên $\tau = 30\%$, lạm phát dự kiến bình quân là $\pi = 4\%$/năm. Nhà đầu tư cân nhắc giữa hai trái phiếu 10 năm:
> 1. Trái phiếu chính phủ thông thường có lợi suất danh nghĩa $i = 7,0\%$/năm.
> 2. Trái phiếu TIPS có lợi suất thực bảo đảm $i_r = 2,5\%$/năm.
> Xác định phương án có lợi suất thực sau thuế cao hơn.
> Giải pháp:
> 3. Lợi suất thực sau thuế của trái phiếu thông thường:
> $$i_{r,at}^{\text{Nominal}} = 7\% \times (1 - 0,30) - 4\% = 4,90\% - 4,00\% = 0,90\%/\text{năm}$$
> 4. Lợi suất thực sau thuế của trái phiếu TIPS:
> Lợi suất danh nghĩa quy đổi của TIPS:
> $$1 + i_{\text{TIPS}} = (1 + 0,025)(1 + 0,04) = 1,066 \implies i_{\text{TIPS}} = 6,60\%$$
> Lợi suất thực sau thuế của TIPS:
> $$i_{r,at}^{\text{TIPS}} = 6,60\% \times (1 - 0,30) - 4\% = 4,62\% - 4,00\% = 0,62\%/\text{năm}$$
> Trái phiếu danh nghĩa mang lại lợi suất thực sau thuế cao hơn ($0,90\% > 0,62\%$) do TIPS bị tính thuế trên cả phần bù mệnh giá điều chỉnh lạm phát.

> [!obs] Dạng: Thời lượng Macaulay Danh mục (Portfolio Duration)
> Xét một danh mục gồm $k$ khoản vay/trái phiếu với giá trị thị trường lần lượt là $V_1, V_2, \dots, V_k$. Tổng giá trị danh mục là $V_p = \sum_{j=1}^k V_j$.
> Gọi trọng số giá trị của từng tài sản là $w_j = \frac{V_j}{V_p}$ (thỏa mãn $\sum w_j = 1$).
> Do tính chất tuyến tính của đạo hàm hiện giá theo lãi suất, Thời lượng Macaulay của toàn danh mục bằng bình quân gia quyền theo giá trị thị trường của thời lượng từng tài sản cấu phần:
> $$DUR_p = \sum_{j=1}^k w_j \cdot DUR_j$$
> Ước lượng mức thay đổi giá trị danh mục bằng tiền khi lãi suất biến động một lượng $\Delta i$:
> $$\Delta V_p \approx -V_p \cdot \left( \frac{DUR_p}{1+i} \right) \cdot \Delta i$$

> [!exm] Dạng: Thời lượng Macaulay Danh mục (Portfolio Duration)
> Một ngân hàng nắm giữ danh mục gồm hai khoản vay 3 năm có tổng giá trị hiện tại là $V_p = 70$ triệu USD:
> - Khoản vay 1: Trị giá 30 triệu USD, không trả lãi giữa kỳ, nhận thanh toán một lần 37,8 triệu USD sau 3 năm.
> - Khoản vay 2: Trị giá 40 triệu USD, trả lãi hàng năm 3,6 triệu USD và vốn gốc 40 triệu USD sau 3 năm.
> Lãi suất thị trường chuẩn là $8\%$/năm.
> 1. Tính thời lượng Macaulay của danh mục khoản vay.
> 2. Ước lượng mức thay đổi giá trị danh mục nếu mặt bằng lãi suất tăng từ $8\%$ lên $8,5\%$.
> Giải pháp:
> 3. Tính thời lượng từng khoản vay:
> - Khoản vay 1 (Dòng tiền duy nhất sau 3 năm): $DUR_1 = 3,0$ năm.
> - Khoản vay 2 ($C = 3,6$, $F = 40$, $i = 8\%$):
>   Hiện giá các dòng tiền:
>   $PV(CF_1) = \frac{3,6}{1,08} \approx 3,333$ triệu USD.
>   $PV(CF_2) = \frac{3,6}{(1,08)^2} \approx 3,086$ triệu USD.
>   $PV(CF_3) = \frac{43,6}{(1,08)^3} \approx 34,611$ triệu USD.
>   Tổng giá trị hiện tại: $P_2 = 3,333 + 3,086 + 34,611 = 41,03$ triệu USD.
>   $$DUR_2 = \frac{1 \times 3,333 + 2 \times 3,086 + 3 \times 34,611}{41,03} = \frac{113,338}{41,03} \approx 2,76 \text{ năm}$$
> - Trọng số danh mục: $w_1 = \frac{30}{70} = \frac{3}{7}$; $w_2 = \frac{40}{70} = \frac{4}{7}$.
>   $$DUR_p = \left( \frac{3}{7} \times 3,0 \right) + \left( \frac{4}{7} \times 2,76 \right) \approx 1,286 + 1,577 = 2,863 \text{ năm}$$
> 2. Ước lượng tổn thất giá trị danh mục khi $\Delta i = +0,005$:
> $$\Delta V_p \approx -70 \times \left( \frac{2,863}{1 + 0,08} \right) \times 0,005 \approx -70 \times 2,6509 \times 0,005 \approx -0,928 \text{ triệu USD}$$

> [!obs] Dạng: Trái phiếu có Coupon Tăng trưởng theo Cấp số nhân (Geometric Gradient Bond)
> Xét trái phiếu kỳ hạn $n$ năm, hoàn vốn $K$ khi đáo hạn. Dòng coupon đầu tiên tại $t = 1$ là $C_1$, mỗi năm sau coupon tăng trưởng với tỷ lệ cố định $g$: $C_t = C_1(1+g)^{t-1}$. Lãi suất chiết khấu là $i$ (với $i \ne g$).
> Hiện giá của dòng coupon là tổng cấp số nhân:
> $$PV_{\text{coupon}} = \sum_{t=1}^n \frac{C_1(1+g)^{t-1}}{(1+i)^t} = \frac{C_1}{1+i} \sum_{t=1}^n \left( \frac{1+g}{1+i} \right)^{t-1}$$
> Áp dụng công thức tổng $n$ số hạng cấp số nhân với công bội $q = \frac{1+g}{1+i}$:
> $$PV_{\text{coupon}} = \frac{C_1}{1+i} \times \frac{1 - \left(\frac{1+g}{1+i}\right)^n}{1 - \frac{1+g}{1+i}} = \frac{C_1}{1+i} \times \frac{1 - \left(\frac{1+g}{1+i}\right)^n}{\frac{(1+i) - (1+g)}{1+i}} = \frac{C_1}{i - g} \left[ 1 - \left( \frac{1+g}{1+i} \right)^n \right] $$
> Cộng hiện giá khoản hoàn vốn $K$, ta có công thức định giá tổng quát:
> $$P = \frac{C_1}{i - g} \left[ 1 - \left( \frac{1+g}{1+i} \right)^n \right] + K(1+i)^{-n}$$

> [!exm] Dạng: Trái phiếu có Coupon Tăng trưởng theo Cấp số nhân (Geometric Gradient Bond)
> Một trái phiếu kỳ hạn 20 năm, mệnh giá $1.000$ USD, giá trị hoàn vốn khi đáo hạn là $K = 1.050$ USD. Khoản coupon năm thứ nhất là $C_1 = 75$ USD. Kể từ năm thứ hai, mỗi khoản coupon đều tăng thêm $3\%$ so với khoản liền trước ($g = 3\%$). Lợi suất hiệu dụng hàng năm của trái phiếu là $i = 8,25\%$. Xác định giá mua $P$ của trái phiếu.
> Giải pháp:
> Tham số: $n = 20$, $K = 1.050$, $C_1 = 75$, $g = 0,03$, $i = 0,0825$.
> 3. Tính hiện giá dòng coupon tăng trưởng:
> Hiệu số lãi suất: $i - g = 0,0825 - 0,03 = 0,0525$.
> Tỷ số công bội: $\frac{1+g}{1+i} = \frac{1,03}{1,0825} \approx 0,951501$.
> Lũy thừa 20 kỳ: $(0,951501)^{20} \approx 0,368947$.
> $$PV_{\text{coupon}} = \frac{75}{0,0525} \times (1 - 0,368947) = 1.428,5714 \times 0,631053 \approx 901,50 \text{ USD}$$
> 4. Tính hiện giá khoản hoàn vốn khi đáo hạn:
> $$PV_K = 1.050 \times (1,0825)^{-20} = 1.050 \times 0,205466 \approx 215,74 \text{ USD}$$
> 5. Thị giá của trái phiếu:
> $$P = 901,50 + 215,74 = 1.117,24 \approx 1.115 \text{ USD}$$