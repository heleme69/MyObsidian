
# Thị trường Tiền tệ (Money Market)

## Đặc điểm và Thành phần tham gia

Thị trường tiền tệ là nơi giao dịch các công cụ nợ ngắn hạn có thời gian đáo hạn không quá một năm (thường dưới 120 ngày). Đặc tính cốt lõi của thị trường này là tính thanh khoản cực cao, rủi ro vỡ nợ thấp và chủ yếu giao dịch với khối lượng lớn (thị trường bán buôn).

Thành phần tham gia chính bao gồm:
- Kho bạc Nhà nước (Treasury): Phát hành T-bills để tài trợ thâm hụt ngân sách ngắn hạn.
- Ngân hàng Trung ương (Fed/SBV): Can thiệp thị trường mở (OMO), điều phối thanh khoản và chính sách tiền tệ.
- Ngân hàng thương mại: Quản lý thanh khoản, mua bán chứng khoán để đáp ứng tỷ lệ dự trữ bắt buộc.
- Doanh nghiệp lớn: Phát hành thương phiếu (Commercial Paper) để huy động vốn lưu động ngắn hạn.
- Nhà môi giới và Nhà giao dịch (Dealers/Brokers): Tạo lập thị trường thứ cấp.

## Các Công cụ Thị trường Tiền tệ

> [!def] Các Công cụ Chiết khấu và Trả lãi Ngắn hạn
> 1. Tín phiếu Kho bạc (Treasury Bills - T-bills): Công cụ phi rủi ro do Chính phủ phát hành. Không trả lãi định kỳ, phát hành theo cơ chế chiết khấu.
> 2. Quỹ Liên bang (Federal Funds): Các khoản vay qua đêm giữa các ngân hàng thương mại để đáp ứng dự trữ bắt buộc tại Ngân hàng Trung ương.
> 3. Hợp đồng Mua lại (Repurchase Agreements - Repos): Thỏa thuận bán chứng khoán (thường là T-bills) kèm cam kết mua lại vào một ngày và mức giá xác định trong tương lai (thường từ 3 đến 14 ngày).
> 4. Chứng chỉ Tiền gửi Có thể Thương lượng (Negotiable CDs): Tiền gửi ngân hàng có kỳ hạn và lãi suất xác định, được giao dịch tự do trên thị trường thứ cấp.
> 5. Thương phiếu (Commercial Paper - CP): Kỳ phiếu vô đề kháng (không có tài sản đảm bảo) do các tập đoàn lớn phát hành, kỳ hạn tối đa 270 ngày.
> 6. Chấp phiếu Ngân hàng (Banker's Acceptances): Lệnh trả tiền do doanh nghiệp ký phát, được ngân hàng bảo lãnh thanh toán, dùng phổ biến trong xuất nhập khẩu quốc tế.
> 7. Eurodollars: Đồng USD gửi tại các ngân hàng nằm ngoài lãnh thổ Hoa Kỳ, không chịu quy định dự trữ bắt buộc của Fed.

## Định giá và Đo lường Lợi suất Công cụ Chiết khấu

> [!def] Phương pháp Chiết khấu Ngân hàng và Lợi suất Tương đương
> Với các công cụ chiết khấu (T-bills, CP), giá mua $P$ luôn thấp hơn mệnh giá đáo hạn $F$.
> 1. Lãi suất chiết khấu hàng năm ($y_d$ hoặc $i_{db}$):
> $$y_d = \frac{F - P}{F} \times \frac{360}{n}$$
> Giá mua tương ứng theo lãi suất chiết khấu:
> $$P = F \times \left( 1 - y_d \times \frac{n}{360} \right)$$
> 2. Lãi suất đầu tư hàng năm tương đương trái phiếu ($y_i$ hoặc $i_{ytm}$ / $BEY$):
> $$y_i = \frac{F - P}{P} \times \frac{365}{n}$$
> Mệnh giá thu hồi tương ứng theo lãi suất đầu tư:
> $$F = P \times \left( 1 + y_i \times \frac{n}{365} \right)$$
> 3. Công thức chuyển đổi trực tiếp giữa hai hệ lợi suất:
> $$i_{ytm} = \frac{365 \times i_{db}}{360 - (i_{db} \times n)}$$

> [!def] Cơ chế Đấu thầu Tín phiếu Kho bạc (Dutch Auction)
> Kho bạc phân bổ T-bills qua phiên đấu thầu sơ cấp định kỳ:
> 4. Thầu không cạnh tranh (Noncompetitive bids): Được ưu tiên đáp ứng đủ 100% khối lượng yêu cầu trước khi phân bổ cho khối cạnh tranh.
> 5. Thầu cạnh tranh (Competitive bids): Được sắp xếp theo thứ tự ưu tiên giảm dần của giá đặt mua (tương ứng với lợi suất tăng dần). Kho bạc cộng dồn khối lượng từ giá cao nhất xuống cho đến khi hết hạn ngạch.
> 6. Giá chốt thầu (Stop-out price): Mức giá trúng thầu thấp nhất được chấp nhận. Toàn bộ các bên trúng thầu (cả không cạnh tranh và cạnh tranh) đều mua tại mức giá chốt thầu này.

## Các Dạng Bài Tập Thị trường Tiền tệ

> [!obs] Công thức Dạng 1
> Xuất phát từ hai định nghĩa đo lường lợi suất ngắn hạn tuyến tính trong mục cơ sở chiết khấu:
> - Tỷ lệ chiết khấu ngân hàng sử dụng mệnh giá $F$ làm mẫu số và cơ sở năm 360 ngày:
>   $$y_d = \frac{F - P}{F} \times \frac{360}{n}$$
> - Tỷ lệ đầu tư tương đương trái phiếu ($BEY$) sử dụng giá mua thực tế $P$ làm mẫu số và cơ sở năm thực tế 365 ngày:
>   $$y_i = \frac{F - P}{P} \times \frac{365}{n}$$

> [!exm] Dạng 1: Chuyển đổi giữa Lãi suất Chiết khấu và Lãi suất Đầu tư
> Một nhà đầu tư mua một tín phiếu Kho bạc kỳ hạn 182 ngày với giá 4.925 USD, mệnh giá nhận lại khi đáo hạn là 5.000 USD. Hãy tính tỷ lệ chiết khấu hàng năm và tỷ lệ đầu tư hàng năm của tín phiếu này.
> Giải pháp:
> Tham số: $F = 5.000$, $P = 4.925$, $n = 182$.
> 1. Lãi suất chiết khấu hàng năm:
> $$y_d = \frac{5.000 - 4.925}{5.000} \times \frac{360}{182} = \frac{75}{5.000} \times \frac{360}{182} \approx 2,967\%$$
> 2. Lãi suất đầu tư hàng năm:
> $$y_i = \frac{5.000 - 4.925}{4.925} \times \frac{365}{182} = \frac{75}{4.925} \times \frac{365}{182} \approx 3,054\%$$

> [!obs] Công thức Dạng 2
> Từ định nghĩa $y_d = \frac{F - P}{F} \frac{360}{n}$, ta rút ra giá mua:
> $$P = F \left( 1 - y_d \frac{n}{360} \right)$$
> Để chuyển đổi trực tiếp sang $i_{ytm}$ mà không cần qua bước tính $P$, áp dụng định lý chuyển đổi hệ tọa độ lợi suất từ note Lãi suất:
> $$i_{ytm} = \frac{F - P}{P} \frac{365}{n} = \frac{F \cdot y_d \frac{n}{360}}{F \left( 1 - y_d \frac{n}{360} \right)} \frac{365}{n} = \frac{365 \cdot y_d}{360 - y_d \cdot n}$$

> [!exm] Dạng 2: Tính Giá mua từ Tỷ lệ Chiết khấu và Chuyển đổi sang YTM
> Một tín phiếu Kho bạc kỳ hạn $n = 91$ ngày, mệnh giá $F = 10.000$ USD được chào bán với mức lợi suất chiết khấu niêm yết $y_d = 6,0\%$. Xác định giá mua thực tế và lợi suất đến hạn thực tế quy đổi theo năm ($i_{ytm}$).
> Giải pháp:
> Mức chiết khấu bằng tiền:
> $$F - P = 10.000 \times 0,06 \times \frac{91}{360} \approx 151,67 \text{ USD}$$
> Giá mua thực tế của tín phiếu:
> $$P = 10.000 - 151,67 = 9.848,33 \text{ USD}$$
> Chuyển đổi sang YTM bằng công thức rút gọn:
> $$i_{ytm} = \frac{365 \times 0,06}{360 - (0,06 \times 91)} = \frac{21,90}{360 - 5,46} = \frac{21,90}{354,54} \approx 6,177\% \approx 6,18\%$$
> Mức niêm yết $y_d$ đã đánh giá thấp lợi suất thực tế 18 điểm cơ bản ($6,18\% - 6,00\% = 0,18\%$).

> [!obs] Công thức Dạng 3
> Mức giá mua tối đa thỏa mãn tỷ lệ chiết khấu yêu cầu $y_d$ thu được bằng phép biến đổi trực tiếp từ định nghĩa phương pháp chiết khấu ngân hàng:
> $$P = F \left( 1 - y_d \frac{n}{360} \right)$$

> [!exm] Dạng 3: Xác định Giá mua Tối đa theo Lãi suất Chiết khấu Mục tiêu
> Nhà đầu tư muốn đạt mức sinh lời theo tỷ lệ chiết khấu hàng năm là 3,5% đối với tín phiếu Kho bạc kỳ hạn 91 ngày, mệnh giá 5.000 USD. Xác định mức giá tối đa nhà đầu tư chấp nhận chi trả.
> Giải pháp:
> Tham số: $F = 5.000$, $n = 91$, $y_d = 0,035$.
> $$P = F \times \left( 1 - y_d \times \frac{n}{360} \right) = 5.000 \times \left( 1 - 0,035 \times \frac{91}{360} \right)$$
> $$P = 5.000 \times (1 - 0,0088472) = 5.000 \times 0,9911528 \approx 4.955,76 \text{ USD}$$

> [!obs] Công thức Dạng 4
> Từ phương trình hoàn vốn theo lãi suất đầu tư $y_i = \frac{F - P}{P} \frac{365}{n}$, giải phương trình theo ẩn mệnh giá tương lai $F$:
> $$F = P \left( 1 + y_i \frac{n}{365} \right)$$

> [!exm] Dạng 4: Xác định Mệnh giá Đáo hạn theo Lãi suất Đầu tư
> Một thương phiếu kỳ hạn 182 ngày đang được giao dịch tại mức giá 7.840 USD. Nếu mức sinh lời theo tỷ lệ đầu tư hàng năm là 4,093%, xác định số tiền công cụ sẽ thanh toán khi đáo hạn.
> Giải pháp:
> Tham số: $P = 7.840$, $n = 182$, $y_i = 0,04093$.
> $$F = P \times \left( 1 + y_i \times \frac{n}{365} \right) = 7.840 \times \left( 1 + 0,04093 \times \frac{182}{365} \right)$$
> $$F = 7.840 \times (1 + 0,020409) = 7.840 \times 1,020409 \approx 8.000,00 \text{ USD}$$

> [!obs] Công thức Dạng 5
> Rút số ngày đáo hạn $n$ từ hai công thức định nghĩa lợi suất tuyến tính:
> - Nếu biết tỷ lệ chiết khấu $y_d$: $n = \frac{F - P}{F \cdot y_d} \times 360$
> - Nếu biết tỷ lệ đầu tư $y_i$: $n = \frac{F - P}{P \cdot y_i} \times 365$

> [!exm] Dạng 5: Xác định Kỳ hạn Đáo hạn của Công cụ Thị trường Tiền tệ
> Một thương phiếu có mệnh giá 8.000 USD đang được bán với giá 7.930 USD. 
> 1. Nếu tỷ lệ chiết khấu hàng năm là 4%, xác định số ngày còn lại đến khi đáo hạn.
> 2. Nếu tỷ lệ đầu tư hàng năm là 4%, xác định số ngày còn lại đến khi đáo hạn.
> Giải pháp:
> Chênh lệch giá trị: $F - P = 8.000 - 7.930 = 70$ USD.
> 3. Theo tỷ lệ chiết khấu ($y_d = 0,04$):
> $$n = \frac{F - P}{F \times y_d} \times 360 = \frac{70}{8.000 \times 0,04} \times 360 = \frac{70}{320} \times 360 = 78,75 \approx 79 \text{ ngày}$$
> 4. Theo tỷ lệ đầu tư ($y_i = 0,04$):
> $$n = \frac{F - P}{P \times y_i} \times 365 = \frac{70}{7.930 \times 0,04} \times 365 = \frac{70}{317,2} \times 365 = 80,55 \approx 81 \text{ ngày}$$

> [!obs] Thuật toán Dạng 6
> Quy trình phân bổ thầu Hà Lan (Single-Price Dutch Auction):
> 5. Trừ toàn bộ khối lượng thầu không cạnh tranh khỏi tổng hạn ngạch chào bán:
>    $$\text{Hạn ngạch cạnh tranh} = \text{Tổng cung} - \text{Tổng thầu không cạnh tranh}$$
> 6. Sắp xếp các mức giá thầu cạnh tranh theo thứ tự giảm dần: $P_{(1)} > P_{(2)} > \dots > P_{(k)}$.
> 7. Cộng dồn khối lượng thầu đến khi chạm hạn ngạch. Mức giá tại điểm chạm hạn ngạch là giá chốt thầu $P_{\text{stop-out}}$. Toàn bộ khối lượng trúng thầu được thanh toán tại $P_{\text{stop-out}}$.

> [!exm] Dạng 6: Thuật toán Phân bổ Đấu thầu Tín phiếu Kho bạc
> Kho bạc chào bán 2,1 tỷ USD tín phiếu kỳ hạn 91 ngày. Phiên đấu thầu nhận được 750 triệu USD thầu không cạnh tranh và danh sách thầu cạnh tranh gồm:
> - Người 1: 500 triệu USD tại giá 0,9940 USD
> - Người 2: 750 triệu USD tại giá 0,9901 USD
> - Người 3: 1,5 triệu USD tại giá 0,9925 USD
> - Người 4: 1,0 triệu USD tại giá 0,9936 USD
> - Người 5: 600 triệu USD tại giá 0,9939 USD
> Hãy xác định các đối tượng được phân bổ, khối lượng nhận được và mức giá thanh toán.
> Giải pháp:
> Bước 1: Khối không cạnh tranh được phân bổ trọn vẹn 750 triệu USD.
> Hạn ngạch còn lại cho thầu cạnh tranh: $2.100 - 750 = 1.350$ triệu USD.
> Bước 2: Sắp xếp các lệnh thầu cạnh tranh theo thứ tự giá giảm dần và phân bổ:
> 1. Người 1: Giá 0,9940 USD; nhận đủ 500 triệu USD; hạn ngạch còn 850 triệu USD.
> 2. Người 5: Giá 0,9939 USD; nhận đủ 600 triệu USD; hạn ngạch còn 250 triệu USD.
> 3. Người 4: Giá 0,9936 USD; nhận đủ 1 triệu USD; hạn ngạch còn 249 triệu USD.
> 4. Người 3: Giá 0,9925 USD; nhận đủ 1,5 triệu USD; hạn ngạch còn 247,5 triệu USD.
> 5. Người 2: Giá 0,9901 USD; đặt mua 750 triệu USD nhưng chỉ được nhận phần còn lại là 247,5 triệu USD.
> Bước 3: Mức giá trúng thầu thấp nhất được chấp nhận là 0,9901 USD (Stop-out price). Tất cả các bên trúng thầu (kể cả khối không cạnh tranh) đều mua tại mức giá đồng nhất 0,9901 USD cho mỗi 1 USD mệnh giá.

> [!obs] Công thức Dạng 7
> Trong môi trường lãi suất danh nghĩa âm $i < 0$, giá trị thu hồi cuối kỳ của hợp đồng ngắn hạn:
> $$P_1 = P_0 (1 + i \cdot t)$$
> Khoản lỗ vốn danh nghĩa là $L_{\text{bond}} = P_0 - P_1 = P_0 \cdot (-i) \cdot t$.
> Chi phí lưu trữ, bảo quản tiền mặt vật chất với tỷ lệ chi phí $c_{\text{storage}}$:
> $$C_{\text{cash}} = P_0 \cdot c_{\text{storage}} \cdot t$$
> Quyết định nắm giữ tài sản lãi suất âm đạt hiệu quả kinh tế khi và chỉ khi:
> $$L_{\text{bond}} < C_{\text{cash}} \iff -i < c_{\text{storage}}$$

> [!exm] Dạng 7: Định lượng Chi phí và Cơ chế Lãi suất Âm
> Một ngân hàng thương mại đầu tư 50.000.000 EUR vào tín phiếu chính phủ kỳ hạn 6 tháng (0,5 năm) với mức lợi suất danh nghĩa âm $i = -0,40\%$/năm. Xác định số tiền lỗ danh nghĩa và phân tích tính kinh tế nếu chi phí thuê kho bãi, bảo hiểm tiền mặt vật chất là $0,65\%$/năm.
> Giải pháp:
> Giá trị thu hồi khi đáo hạn theo cơ chế chiết khấu âm:
> $$P_1 = 50.000.000 \times [1 + (-0,004 \times 0,5)] = 50.000.000 \times 0,998 = 49.900.000 \text{ EUR}$$
> Mức lỗ vốn danh nghĩa khi nắm giữ tín phiếu:
> $$50.000.000 - 49.900.000 = 100.000 \text{ EUR}$$
> Nếu lưu trữ tiền mặt vật chất, chi phí quản lý và bảo quản:
> $$50.000.000 \times 0,0065 \times 0,5 = 162.500 \text{ EUR}$$
> Mức tiết kiệm ròng từ việc chấp nhận lãi suất âm thay vì giữ tiền mặt:
> $$162.500 - 100.000 = 62.500 \text{ EUR}$$
> Do chi phí lưu trữ tiền mặt cao hơn khoản lỗ lãi suất âm, quyết định đầu tư vào tín phiếu lãi suất âm là hợp lý về mặt kinh tế.


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
> Chứng khoán nợ cam kết chi trả các khoản tiền lãi coupon định kỳ $C = F \cdot c$ cho đến ngày đáo hạn $n$. Tại ngày đáo hạn, nhà phát hành thanh toán khoản coupon cuối cùng kèm theo hoàn trả nguyên vẹn giá trị danh nghĩa $F$ (hoặc giá trị chuộc lại thỏa thuận $K$).
> 
> $$P = \sum_{t=1}^n \frac{C}{(1+i)^t} + \frac{K}{(1+i)^n} = C \cdot \left[ \frac{1 - (1+i)^{-n}}{i} \right] + K \cdot (1+i)^{-n}$$
> Đặc tính cấu trúc: Dòng tiền nhận được trải dài theo các kỳ trung gian, do đó thời lượng Macaulay của trái phiếu trả lãi định kỳ luôn nhỏ hơn kỳ hạn danh nghĩa ($DUR < n$). Các khoản chi trả định kỳ đóng vai trò như lớp đệm phòng vệ rủi ro, giúp làm giảm độ biến động giá của trái phiếu trước các cú sốc lãi suất thị trường so với trái phiếu zero-coupon có cùng kỳ hạn.

> [!def] Phân loại theo Chủ thể Phát hành và Cấu trúc Thể chế
> 3. Trái phiếu Kho bạc (Treasury Notes & Bonds): Do chính phủ phát hành để tài trợ chi tiêu công, được coi là không có rủi ro vỡ nợ tín dụng. Notes có kỳ hạn gốc từ 1 đến 10 năm; Bonds có kỳ hạn gốc từ 10 đến 30 năm.
> 4. Trái phiếu Chính quyền Địa phương (Municipal Bonds): Do chính quyền bang, quận hoặc thành phố phát hành (gồm General Obligation Bonds tài trợ dịch vụ công và Revenue Bonds tài trợ các dự án hạ tầng có nguồn thu). Lãi nhận được từ trái phiếu đô thị được miễn thuế thu nhập liên bang.
> 5. Trái phiếu Doanh nghiệp (Corporate Bonds): Công cụ nợ trung và dài hạn của doanh nghiệp. Bao gồm trái phiếu có tài sản thế chấp đảm bảo (Secured Bonds) và trái phiếu tín chấp thuần túy (Debentures). Hợp đồng thường đi kèm các cam kết bảo vệ (Restrictive Covenants) nhằm kiểm soát rủi ro đại diện.
> 6. Trái phiếu Rác (Junk Bonds): Các trái phiếu có mức xếp hạng tín nhiệm dưới cấp đầu tư (dưới Baa của Moody's hoặc dưới BBB của S&P), có rủi ro vỡ nợ cao và phải trả mức lợi suất bù đắp rủi ro rất lớn.

> [!prp] Các Điều khoản Kèm theo Trái phiếu Doanh nghiệp
> - Call Provision (Quyền chuộc lại): Cho phép doanh nghiệp mua lại trái phiếu trước hạn nếu lãi suất thị trường giảm, bảo vệ nhà phát hành nhưng chuyển rủi ro tái đầu tư sang trái chủ.
> - Conversion (Quyền chuyển đổi): Cho phép nhà đầu tư chuyển đổi trái phiếu thành một số lượng cổ phiếu phổ thông xác định, giúp doanh nghiệp phát hành với mức lãi suất coupon thấp hơn.

## Cấu trúc Thuế, Lạm phát và Lợi suất Thực

> [!prp] Hiệu ứng Thuế của Trái phiếu Đô thị
> Để so sánh lợi suất của trái phiếu doanh nghiệp (chịu thuế) với trái phiếu đô thị (miễn thuế), nhà đầu tư sử dụng thuế suất biên $\tau$:
> $$i_{\text{tax-free}} = i_{\text{taxable}} \times (1 - \tau)$$

> [!def] Trái phiếu Bảo vệ khỏi Lạm phát (TIPS)
> Treasury Inflation-Protected Securities (TIPS) bảo toàn sức mua bằng cách điều chỉnh mệnh giá danh nghĩa $F_t$ liên tục theo chỉ số CPI:
> $$F_t = F_0 \times \frac{CPI_t}{CPI_0}$$
> Tiền lãi coupon thực nhận: $C_t = F_t \times c_r$. Lợi suất của TIPS phản ánh trực tiếp lãi suất thực phi rủi ro trên thị trường.

## Định giá Trái phiếu và Đo lường Lợi suất

> [!def] Mô hình Định giá Trái phiếu Tổng quát
> 1. Trái phiếu trả lãi nửa năm (Semi-annual coupon bond):
> $$P = \frac{C}{2} \cdot \left[ \frac{1 - \left(1 + \frac{i}{2}\right)^{-2n}}{\frac{i}{2}} \right] + K \cdot \left(1 + \frac{i}{2}\right)^{-2n}$$
> với $K$ là giá trị chuộc lại khi đáo hạn ($K = F$ nếu ngang mệnh giá), $C = F \cdot c$ là tiền lãi năm.
> 2. Trái phiếu vĩnh viễn (Consol / Perpetuity): Không hoàn trả vốn gốc, trả lãi định kỳ $C$ vĩnh viễn ($n \to \infty$):
> $$P = \frac{C}{i} \iff i = \frac{C}{P}$$
> 3. Tỷ suất sinh lời trong kỳ nắm giữ (Holding Period Return):
> $$R = \frac{C + (P_{t+1} - P_t)}{P_t} = i_c + g$$
> trong đó $i_c = \frac{C}{P_t}$ là lợi suất hiện hành, $g = \frac{P_{t+1} - P_t}{P_t}$ là tỷ lệ lãi/lỗ vốn.

## Các Dạng Bài Tập Thị trường Trái phiếu

> [!obs] Công thức Dạng 1
> Xuất phát từ nguyên lý cân bằng lợi suất sau thuế giữa hai tài sản có cùng mức độ rủi ro:
> $$i_{\text{after-tax}} = i_{\text{taxable}} \cdot (1 - \tau)$$
> Quy tắc quyết định: Nếu $i_{\text{after-tax}} < i_{\text{tax-free}}$, nhà đầu tư ưu tiên lựa chọn trái phiếu miễn thuế (Municipal Bond).

> [!exm] Dạng 1: So sánh Hiệu quả Thuế giữa Trái phiếu Doanh nghiệp và Trái phiếu Đô thị
> Lợi suất trái phiếu doanh nghiệp là 5%, lợi suất trái phiếu đô thị là 4%. Một nhà đầu tư có thuế suất thu nhập biên 30% nên lựa chọn loại trái phiếu nào?
> Giải pháp:
> Lợi suất sau thuế của trái phiếu doanh nghiệp:
> $$i_{\text{after-tax}} = 5\% \times (1 - 0,30) = 3,5\%$$
> Vì $3,5\% < 4\%$, trái phiếu đô thị mang lại thu nhập ròng cao hơn sau khi đã tính đến yếu tố thuế.

> [!obs] Công thức Dạng 2
> Derive từ phương trình dòng tiền tổng quát trong note Lãi suất với dòng coupon $C = F \cdot r$:
> $$P = F \cdot r \cdot \left[ \frac{1 - (1+i)^{-m}}{i} \right] + K (1+i)^{-m} = F \cdot \left(\frac{r}{i}\right) [1 - (1+i)^{-m}] + K (1+i)^{-m}$$
> Khi đề bài chỉ cho tỷ số $\frac{r}{i}$ và hiện giá của khoản chuộc lại $PV_K = K(1+i)^{-m}$, ta tìm hệ số chiết khấu $(1+i)^{-m}$ thông qua một trái phiếu zero-coupon có cùng giá trị chuộc lại và kỳ hạn tỷ lệ.

> [!exm] Dạng 2: Khôi phục Giá trị Trái phiếu từ Tỷ số Lãi suất
> Trái phiếu X có kỳ hạn $n$ năm trả lãi nửa năm, mệnh giá $F = 1.000$, tỷ số giữa lãi suất coupon nửa năm $r$ và lợi suất nửa năm $i$ là $\frac{r}{i} = 1,03125$. Hiện giá của giá trị thu hồi khi đáo hạn là 381,50 USD. Trái phiếu zero-coupon Y đáo hạn sau $\frac{n}{2}$ năm cùng giá trị thu hồi có thị giá 647,80 USD. Xác định thị giá Trái phiếu X.
> Giải pháp:
> Gọi $m = 2n$ là số kỳ nửa năm của X, số kỳ của Y là $n$.
> Lập tỷ số hiện giá thu hồi:
> $$(1+i)^{-n} = \frac{K \cdot (1+i)^{-2n}}{K \cdot (1+i)^{-n}} = \frac{381,50}{647,80} \approx 0,588916$$
> Hệ số chiết khấu toàn kỳ hạn của X:
> $$(1+i)^{-2n} = (0,588916)^2 \approx 0,346822$$
> Áp dụng công thức định giá qua tỷ số $\frac{r}{i}$:
> $$P_X = F \cdot \left(\frac{r}{i}\right) \cdot [1 - (1+i)^{-2n}] + K(1+i)^{-2n}$$
> $$P_X = 1.000 \times 1,03125 \times (1 - 0,346822) + 381,50 = 673,59 + 381,50 = 1.055,09 \text{ USD}$$

> [!obs] Công thức Dạng 3
> Áp dụng mô hình định giá tổng quát với giá trị chuộc lại $K \ne F$:
> $$P(i) = F \cdot r \cdot a_{\overline{n}|i} + K(1+i)^{-n}$$
> Thiết lập hệ phương trình hai ẩn $P$ và $r$ tại hai mức lợi suất $i_1, i_2$. Lấy hiệu hai phương trình để triệt tiêu $P$, từ đó giải ra $r$:
> $$r = \frac{[P(i_1) - P(i_2)] - K [(1+i_1)^{-n} - (1+i_2)^{-n}]}{F \cdot (a_{\overline{n}|i_1} - a_{\overline{n}|i_2})}$$

> [!exm] Dạng 3: Khôi phục Lãi suất Coupon khi Giá trị Thu hồi Khác Mệnh giá
> Một trái phiếu kỳ hạn 10 năm trả lãi hàng năm, mệnh giá 1.000 USD, giá trị chuộc lại khi đáo hạn là 1.100 USD.
> Biết rằng khi $i = 4\%$, giá là $P$; khi $i = 5\%$, giá là $P - 81,49$. Xác định lãi suất coupon $r$ và tính giá $X$ khi $i = r$.
> Giải pháp:
> Phương trình giá tổng quát: $P = 1.000r \cdot a_{\overline{10}|i} + 1.100(1+i)^{-10}$.
> Tại $i = 4\%$: $a_{\overline{10}|4\%} \approx 8,110896$; $1.100(1,04)^{-10} \approx 743,1248 \implies P = 8.110,896r + 743,1248$.
> Tại $i = 5\%$: $a_{\overline{10}|5\%} \approx 7,721735$; $1.100(1,05)^{-10} \approx 675,3044 \implies P - 81,49 = 7.721,735r + 675,3044$.
> Lấy hiệu hai phương trình:
> $$81,49 = 389,161r + 67,8204 \implies 389,161r = 13,6696 \implies r \approx 3,5\%$$
> Tính giá trị $X$ khi $i = r = 3,5\%$:
> $$a_{\overline{10}|3,5\%} \approx 8,3166; \quad 1.100(1,035)^{-10} \approx 779,796$$
> $$X = (1.000 \times 0,035) \times 8,3166 + 779,796 = 291,08 + 779,80 \approx 1.070,88 \text{ USD}$$

> [!obs] Công thức Dạng 4
> Áp dụng nguyên lý No-Arbitrage và cấu trúc lãi suất từng thời kỳ (1-year forward rates):
> Dòng tiền kỳ 1 chiết khấu qua thừa số $\frac{1}{1+i_1}$.
> Dòng tiền kỳ 2 chiết khấu qua thừa số $\frac{1}{(1+i_1)(1+i_2)}$.
> Phương trình định giá theo kỹ thuật Bootstrapping:
> $$P_1 = \frac{C_1 + F}{1 + i_1}$$
> $$P_2 = \frac{C_2}{1 + i_1} + \frac{C_2 + F}{(1 + i_1)(1 + i_2)}$$
> Thay kết quả từ $P_1$ vào $P_2$ để cô lập và giải lãi suất $i_2$.

> [!exm] Dạng 4: Khôi phục Cấu trúc Kỳ hạn Lãi suất Từng năm
> Ba trái phiếu mệnh giá 100 USD, coupon hàng năm 6%, đáo hạn nhận 100 USD vào cuối các năm 1, 2, 3 có giá lần lượt là 101,92 USD; 102,84 USD; 105,51 USD. Xác định lãi suất đơn lẻ $j$ của năm thứ 2.
> Giải pháp:
> Dòng tiền coupon mỗi năm là 6 USD.
> Năm 1: $101,92 = \frac{106}{1+i} \implies \frac{1}{1+i} = \frac{101,92}{106} \approx 0,961509 \implies i \approx 4,00\%$.
> Năm 2: $102,84 = \frac{6}{1+i} + \frac{106}{(1+i)(1+j)} = 6 \times \frac{101,92}{106} + \frac{101,92}{1+j} = 5,76906 + \frac{101,92}{1+j}$.
> $$\frac{101,92}{1+j} = 102,84 - 5,76906 = 97,07094 \implies 1+j = \frac{101,92}{97,07094} \approx 1,05 \implies j = 5,00\%$$

> [!obs] Công thức Dạng 5
> So sánh giữa hai thước đo lợi suất:
> - Lợi suất hiện hành (Current Yield): $i_c = \frac{C}{P}$
> - Lợi suất đến hạn thực tế (YTM) cho hợp đồng 1 kỳ:
>   $$P = \frac{C + F}{1 + YTM} \iff YTM = \frac{C + (F - P)}{P} = i_c + \frac{F - P}{P}$$
> Thành phần $\frac{F - P}{P}$ là tỷ lệ lãi/lỗ vốn khi đáo hạn. Khi $P \ne F$, $i_c$ luôn có sai số so với YTM.

> [!exm] Dạng 5: Sai lệch giữa Lợi suất Hiện hành (Current Yield) và YTM
> Trái phiếu kỳ hạn 1 năm, mệnh giá 1.000 USD, coupon 10% ($C = 100$ USD).
> Nhà đầu tư A mua giá $P_A = 1.050$ USD (mua đắt). Nhà đầu tư B mua giá $P_B = 950$ USD (mua rẻ).
> So sánh $i_c$ và YTM của từng người.
> Giải pháp:
> 1. Nhà đầu tư A:
> $$i_{c,A} = \frac{100}{1.050} \approx 9,52\%$$
> $$1 + YTM_A = \frac{1.100}{1.050} \approx 1,0476 \implies YTM_A \approx 4,76\%$$
> Khoản lỗ vốn 50 USD khi đáo hạn làm sụt giảm mạnh tỷ suất sinh lời thực tế so với $i_c$.
> 2. Nhà đầu tư B:
> $$i_{c,B} = \frac{100}{950} \approx 10,53\%$$
> $$1 + YTM_B = \frac{1.100}{950} \approx 1,1579 \implies YTM_B \approx 15,79\%$$
> Khoản lãi vốn 50 USD khi đáo hạn làm tăng vọt tỷ suất sinh lời thực tế so với $i_c$.

> [!obs] Công thức Dạng 6
> Để tính Lợi suất kép thực nhận (RCY), dồn toàn bộ dòng tiền về tương lai tại ngày đáo hạn:
> $$FV_n = \sum_{t=1}^n C (1 + r_{\text{reinvest}})^{n-t} + F = C \cdot s_{\overline{n}|r_{\text{reinvest}}} + F$$
> Sau đó giải phương trình hoàn giá tương đương từ số vốn đầu tư ban đầu $P_0$:
> $$P_0 (1 + RCY)^n = FV_n \iff RCY = \left( \frac{FV_n}{P_0} \right)^{1/n} - 1$$

> [!exm] Dạng 6: Rủi ro Tái đầu tư và Lợi suất Kép Thực nhận (RCY)
> Nhà đầu tư mua trái phiếu kỳ hạn 3 năm, mệnh giá 1.000 USD, coupon 10%/năm tại ngang giá 1.000 USD ($YTM = 10\%$). Sau khi mua, lãi suất tái đầu tư giảm xuống còn 6%/năm trong suốt thời gian nắm giữ. Tính tổng tiền tích lũy và lợi suất kép thực nhận (RCY).
> Giải pháp:
> Giá trị tương lai của chuỗi coupon tái đầu tư tại mức 6%:
> $$FV_{\text{coupon}} = 100(1,06)^2 + 100(1,06) + 100 = 112,36 + 106,00 + 100,00 = 318,36 \text{ USD}$$
> Tổng giá trị tài sản thu được khi đáo hạn:
> $$FV_3 = 318,36 + 1.000 = 1.318,36 \text{ USD}$$
> Lợi suất kép thực nhận:
> $$1.000(1 + RCY)^3 = 1.318,36 \implies 1 + RCY = (1,31836)^{1/3} \approx 1,0965 \implies RCY \approx 9,65\%$$
> Do coupon tái đầu tư ở mức lãi suất thấp hơn, mức sinh lời thực nhận giảm từ 10% xuống 9,65%.

> [!obs] Công thức Dạng 7
> Áp dụng giới hạn chuỗi dòng tiền vô hạn từ note Lãi suất khi $n \to \infty$ và $K(1+i)^{-n} \to 0$:
> $$P = \lim_{n \to \infty} C \cdot \left[ \frac{1 - (1+i)^{-n}}{i} \right] = \frac{C}{i}$$
> Lợi suất chiết khấu tương ứng: $i = \frac{C}{P}$.

> [!exm] Dạng 7: Định giá Trái phiếu Vĩnh viễn (Consol)
> Một trái phiếu vĩnh viễn cam kết trả dòng tiền lãi cố định hàng năm $C = 100$ GBP. Xác định mức giá thị trường khi lợi suất yêu cầu lần lượt là 5%, 10% và 20%.
> Giải pháp:
> Áp dụng công thức consol $P = \frac{C}{i}$:
> Tại $i = 5\%$: $P = \frac{100}{0,05} = 2.000$ GBP.
> Tại $i = 10\%$: $P = \frac{100}{0,10} = 1.000$ GBP.
> Tại $i = 20\%$: $P = \frac{100}{0,20} = 500$ GBP.
> Quan hệ giữa giá trái phiếu và lợi suất là hàm nghịch đảo phi tuyến lồi về gốc tọa độ.

> [!obs] Công thức Dạng 8
> Tỷ suất sinh lời trong kỳ nắm giữ 1 chu kỳ $R$:
> $$R = \frac{C + (P_1 - P_0)}{P_0} = \frac{C}{P_0} + \frac{P_1 - P_0}{P_0} = i_c + g$$
> Trong đó thị giá bán tại $t = 1$ ($P_1$) được tái định giá theo mức YTM mới cho kỳ hạn còn lại $n - 1$:
> $$P_1 = C \cdot a_{\overline{n-1}|i_{\text{mới}}} + F(1 + i_{\text{mới}})^{-(n-1)}$$

> [!exm] Dạng 8: Rủi ro Giá của Trái phiếu Dài hạn trong Kỳ Đầu tư Ngắn
> Nhà đầu tư mua trái phiếu kỳ hạn 10 năm, mệnh giá 1.000 USD, coupon 8%/năm tại ngang giá 1.000 USD ($YTM = 8\%$). Sau 1 năm, lãi suất thị trường tăng lên 10%. Tính giá bán trái phiếu và tỷ suất sinh lời thực tế trong năm đó.
> Giải pháp:
> Tại $t = 1$, trái phiếu còn 9 năm, định giá lại theo mức lãi suất 10%:
> $$P_1 = 80 \cdot \left[ \frac{1 - (1,10)^{-9}}{0,10} \right] + 1.000(1,10)^{-9} = 460,72 + 424,10 = 884,82 \text{ USD}$$
> Tỷ lệ lỗ vốn: $g = \frac{884,82 - 1.000}{1.000} = -11,518\%$.
> Lợi suất hiện hành: $i_c = \frac{80}{1.000} = 8,00\%$.
> Tỷ suất sinh lời thực tế trong kỳ:
> $$R = i_c + g = 8,00\% - 11,518\% = -3,518\%$$
> Nhà đầu tư bị lỗ vốn dù trái phiếu có lãi suất coupon cao.

> [!obs] Công thức Dạng 9
> So sánh độ biến động giá tương đối giữa trái phiếu chiết khấu thuần túy và trái phiếu trả lãi định kỳ:
> - Trái phiếu Zero-coupon: $P = F(1+i)^{-n} \implies \%\Delta P = \frac{(1+i_{\text{mới}})^{-n} - (1+i_{\text{cũ}})^{-n}}{(1+i_{\text{cũ}})^{-n}}$
> - Trái phiếu Coupon: $P = C \cdot a_{\overline{n}|i} + F(1+i)^{-n}$.
> Thời lượng của zero-coupon luôn bằng đúng $n$, trong khi thời lượng của coupon bond luôn nhỏ hơn $n$, dẫn đến độ co giãn giá của zero-coupon luôn lớn hơn khi lãi suất biến động.

> [!exm] Dạng 9: So sánh Độ co giãn Giá giữa Trái phiếu Coupon 0% và Trái phiếu Trả lãi
> Hai trái phiếu A và B cùng có kỳ hạn 10 năm, mệnh giá 1.000 USD, ban đầu giao dịch ngang giá với lợi suất 8%/năm:
> - Trái phiếu A: Coupon 0% (Zero-coupon), giá ban đầu 463,19 USD.
> - Trái phiếu B: Coupon 8%/năm, giá ban đầu 1.000 USD.
> Khi lãi suất tăng 200 điểm cơ bản (từ 8% lên 10%), hãy tính phần trăm sụt giảm giá của từng trái phiếu.
> Giải pháp:
> Định giá lại tại mức lợi suất 10%:
> 1. Trái phiếu A: $P_{A,\text{mới}} = \frac{1.000}{(1,10)^{10}} \approx 385,54 \text{ USD}$.
> $$\%\Delta P_A = \frac{385,54 - 463,19}{463,19} \approx -16,76\%$$
> 2. Trái phiếu B: $P_{B,\text{mới}} = 80 \cdot a_{\overline{10}|10\%} + 1.000(1,10)^{-10} \approx 877,11 \text{ USD}$.
> $$\%\Delta P_B = \frac{877,11 - 1.000}{1.000} \approx -12,29\%$$
> Trái phiếu zero-coupon có độ nhạy cảm giá cao hơn đáng kể vì không có dòng tiền trung gian đóng vai trò giảm thời lượng thu hồi vốn bình quân.

> [!obs] Công thức Dạng 10
> Cơ chế dòng tiền điều chỉnh lạm phát của TIPS:
> - Mệnh giá điều chỉnh kỳ $t$: $F_t = F_0 \prod_{k=1}^t (1 + \pi_k)$
> - Lãi coupon nhận kỳ $t$: $C_t = F_t \cdot c_r$
> - Tỷ lệ lạm phát hòa vốn (Breakeven Inflation Rate) suy ra từ phương trình Fisher $i \approx i_r + \pi^e$:
>   $$\pi_{\text{breakeven}} = i_{\text{Danh nghĩa}} - i_{r,\text{TIPS}}$$

> [!exm] Dạng 10: Điều chỉnh Dòng tiền Lạm phát và Lạm phát Hòa vốn của Trái phiếu TIPS
> Trái phiếu TIPS kỳ hạn 10 năm, mệnh giá ban đầu 1.000 USD, coupon thực cố định 2,0%/năm. Lạm phát năm 1 là 5,0%, năm 2 là 3,0%.
> 1. Tính giá trị vốn gốc điều chỉnh và tiền coupon nhận được ở 2 năm đầu.
> 2. Nếu lợi suất thực TIPS là 2,5% trong khi trái phiếu chính phủ danh nghĩa cùng kỳ hạn có lợi suất 6,6%, xác định mức lạm phát hòa vốn.
> Giải pháp:
> 3. Điều chỉnh theo lạm phát:
> Năm 1: Vốn gốc $F_1 = 1.000 \times 1,05 = 1.050$ USD. Coupon: $C_1 = 1.050 \times 2\% = 21,00$ USD.
> Năm 2: Vốn gốc $F_2 = 1.050 \times 1,03 = 1.081,50$ USD. Coupon: $C_2 = 1.081,50 \times 2\% = 21,63$ USD.
> 4. Mức lạm phát hòa vốn:
> $$\text{Breakeven Inflation} = i_{\text{Danh nghĩa}} - i_{r,\text{TIPS}} = 6,6\% - 2,5\% = 4,1\%$$
> Nếu lạm phát kỳ vọng bình quân cao hơn 4,1%, đầu tư vào TIPS sẽ có lợi hơn trái phiếu danh nghĩa.

> [!obs] Công thức Dạng 11
> So sánh lãi suất thực sau thuế:
> - Với trái phiếu thường: Thuế đánh trên toàn bộ lợi suất danh nghĩa $i$:
>   $$i_{r,at} = i(1 - \tau) - \pi$$
> - Với trái phiếu TIPS: Lợi suất danh nghĩa quy đổi là $1 + i_{\text{TIPS}} = (1 + i_r)(1 + \pi)$. Thuế đánh trên toàn bộ mức danh nghĩa này, sau đó trừ lạm phát:
>   $$i_{r,at} = i_{\text{TIPS}}(1 - \tau) - \pi$$

> [!exm] Dạng 11: So sánh Hiệu quả Sau thuế giữa Trái phiếu Thường và Trái phiếu TIPS
> Nhà đầu tư có thuế suất biên $\tau = 30\%$, dự kiến lạm phát $\pi = 4\%$. Lựa chọn giữa:
> - Phương án A: Trái phiếu thường có lợi suất danh nghĩa $i = 7,0\%$.
> - Phương án B: Trái phiếu TIPS có lợi suất thực được bảo đảm $i_r = 2,5\%$.
> Tính lãi suất thực sau thuế của từng phương án để ra quyết định.
> Giải pháp:
> 1. Phương án A (Trái phiếu thường):
> Lợi suất danh nghĩa sau thuế: $i_{at} = 7\% \times (1 - 0,30) = 4,90\%$.
> Lãi suất thực sau thuế: $i_{r,at} = 4,90\% - 4,00\% = 0,90\%$.
> 2. Phương án B (Trái phiếu TIPS):
> Lợi suất danh nghĩa quy đổi: $1 + i_{\text{TIPS}} = (1 + 0,025)(1 + 0,04) = 1,066 \implies i_{\text{TIPS}} = 6,60\%$.
> Lãi suất danh nghĩa sau thuế: $6,60\% \times (1 - 0,30) = 4,62\%$.
> Lãi suất thực sau thuế: $4,62\% - 4,00\% = 0,62\%$.
> Nhà đầu tư nên chọn Phương án A vì lợi suất thực sau thuế cao hơn ($0,90\% > 0,62\%$).

> [!obs] Công thức Dạng 12
> Áp dụng định lý xấp xỉ biến động giá bằng chuỗi Taylor bậc hai từ note Lãi suất:
> $$\frac{\Delta P}{P} \approx -DUR^* \cdot \Delta i + \frac{1}{2} CX (\Delta i)^2$$
> Trong đó $DUR^* = \frac{DUR}{1+i}$ là thời lượng hiệu chỉnh và $CX$ là độ lồi.
> Thành phần bậc hai $\frac{1}{2} CX (\Delta i)^2 > 0$ tạo ra hiệu ứng bất đối xứng: khi lãi suất giảm thì giá tăng nhiều hơn, khi lãi suất tăng thì giá giảm ít hơn.

> [!exm] Dạng 12: Ước lượng Biến động Giá qua Thời lượng Hiệu chỉnh và Độ lồi
> Một trái phiếu 10 năm có mệnh giá 1.000 USD, coupon 8% đang giao dịch ngang giá tại $YTM = 8\%$, có thời lượng hiệu chỉnh $DUR^* = 6,71$ năm và độ lồi $CX = 58,4$. Hãy ước lượng biến động giá phần trăm khi:
> 1. Lãi suất thị trường tăng 200 điểm cơ bản ($\Delta i = +0,02$).
> 2. Lãi suất thị trường giảm 200 điểm cơ bản ($\Delta i = -0,02$).
> Giải pháp:
> Sử dụng khai triển Taylor bậc hai: $\frac{\Delta P}{P} \approx -DUR^* \cdot \Delta i + \frac{1}{2} CX (\Delta i)^2$.
> 3. Khi $\Delta i = +0,02$:
> $$\frac{\Delta P}{P} \approx -(6,71 \times 0,02) + \frac{1}{2}(58,4 \times 0,0004) = -0,1342 + 0,01168 = -12,252\%$$
> Giá giảm xuống còn khoảng 877,48 USD.
> 4. Khi $\Delta i = -0,02$:
> $$\frac{\Delta P}{P} \approx -(6,71 \times (-0,02)) + \frac{1}{2}(58,4 \times 0,0004) = +0,1342 + 0,01168 = +14,588\%$$
> Giá tăng lên khoảng 1.145,88 USD.
> Thành phần độ lồi luôn mang giá trị dương, giúp giá tăng nhiều hơn khi lãi suất giảm và giảm ít hơn khi lãi suất tăng cùng một biên độ.