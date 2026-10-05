
# Nền tảng Giải tích về Giá trị thời gian của tiền và Hàm tích lũy

Giá trị thời gian của tiền phản ánh nguyên lý một đơn vị giá trị trong hiện tại luôn lớn hơn chính nó trong tương lai do chi phí cơ hội của vốn, tác động bào mòn của lạm phát và rủi ro thanh khoản. Mối liên hệ cốt lõi là dòng tiền phát sinh tại thời điểm càng xa thì giá trị chiết khấu quy đổi về hiện tại càng nhỏ.

> [!def] Hàm số lượng và Hàm tích lũy
> Cho khoản vốn gốc ban đầu $k > 0$ đầu tư tại thời điểm $t = 0$. Hàm số lượng $A(t)$ xác định tổng giá trị thị trường của khoản đầu tư tích lũy đến thời điểm $t \ge 0$, thỏa mãn điều kiện biên $A(0) = k$.
> Hàm tích lũy $a(t)$ ghi nhận giá trị tích lũy tại thời điểm $t \ge 0$ của đúng một đơn vị tiền tệ được đầu tư tại gốc thời gian $t = 0$. Quan hệ đại số được định nghĩa bởi:
> $$a(t) = \frac{A(t)}{k}$$
> Các tính chất giải tích cơ bản của $a(t)$ bao gồm chuẩn hóa tại gốc tọa độ $a(0) = 1$, tính đơn điệu không giảm theo thời gian $t \ge 0$, và tính liên tục trên khoảng $[0, \infty)$.

> [!def] Lãi suất thực tế
> Lãi suất thực tế của kỳ thứ $n$, ký hiệu là $i_n$, là tỷ số giữa lượng giá trị thặng dư thu được trong kỳ thứ $n$ trên tổng giá trị tích lũy hiện diện ở đầu kỳ đó:
> $$i_n = \frac{A(n) - A(n-1)}{A(n-1)} = \frac{a(n) - a(n-1)}{a(n-1)}$$

> [!thm] Đặc tính của Lãi suất đơn và Lãi suất kép
> Dưới cơ chế tích lũy tuyến tính (lãi suất đơn) $a(t) = 1 + it$, lãi suất thực tế $i_n$ giảm nghiêm ngặt theo chỉ số kỳ hạn $n$ và hội tụ về 0 khi thời gian tiến ra vô cùng:
> $$i_n = \frac{i}{1 + i(n-1)}, \quad \lim_{n \to \infty} i_n = 0$$
> Ngược lại, dưới cơ chế tích lũy hàm mũ (lãi suất kép) $a(t) = (1+i)^t$, lãi suất thực tế $i_n$ luôn là một hằng số bất biến đối với mọi kỳ hạn $n \ge 1$:
> $$i_n = i$$

> [!prf]
> Với cơ chế tích lũy hàm mũ $a(t) = (1+i)^t$, ta xét tỷ số:
> $$i_n = \frac{(1+i)^n - (1+i)^{n-1}}{(1+i)^{n-1}} = \frac{(1+i)^{n-1} [ (1+i) - 1 ]}{(1+i)^{n-1}} = i$$
> Điều này chứng minh sức sinh lời tương đối của cơ chế lãi kép không bị suy giảm theo thời gian.

> [!thm] Định lý khôi phục hàm tích lũy từ lực lãi suất
> Cho hàm lực lãi suất $\delta_t$ khả tích trên đoạn $[0, t]$, hàm tích lũy tổng quát $a(t)$ được khôi phục duy nhất bởi công thức hàm mũ tích phân:
> $$a(t) = \exp\left(\int_0^t \delta_r \, dr\right)$$

> [!prf]
> Từ định nghĩa giải tích của lực lãi suất $\delta_r = \frac{a'(r)}{a(r)} = \frac{d}{dr}\ln a(r)$.
> Lấy tích phân định hướng hai vế từ $0$ đến $t$:
> $$\int_0^t \delta_r \, dr = \ln a(t) - \ln a(0)$$
> Do $a(0) = 1$ nên $\ln a(0) = 0$. Áp dụng hàm mũ cơ số tự nhiên $e$ cho hai vế, ta thu được $a(t) = \exp\left(\int_0^t \delta_r \, dr\right)$.

> [!exm] Bài toán xác định giá trị tích lũy với lực lãi suất biến thiên
> Một tài sản được tích lũy với lực lãi suất biến thiên liên tục $\delta_t = \frac{0,05}{1 + 0,05t}$. Nếu quy mô vốn ban đầu là $2.000$, tính quy mô tài sản đạt được sau $t = 10$ chu kỳ.
> Giải pháp:
> Tích phân hàm lực lãi suất từ $0$ đến $10$:
> $$\int_0^{10} \frac{0,05}{1 + 0,05r} \, dr = \left[ \ln(1 + 0,05r) \right]_0^{10} = \ln(1,5)$$
> Khôi phục hàm tích lũy: $a(10) = \exp(\ln(1,5)) = 1,5$.
> Quy mô tài sản tại thời điểm $10$ là $A(10) = 2.000 \times 1,5 = 3.000$.

# Mô hình Dòng tiền Cốt lõi và Tỷ suất sinh lời Nội bộ

Các hợp đồng tài chính trên thị trường đều có thể được trừu tượng hóa thành một chuỗi dòng tiền phát sinh tại các mốc thời gian khác nhau.

> [!def] Tỷ suất hoàn vốn nội bộ
> Tỷ suất hoàn vốn nội bộ, hay mức sinh lời hiệu dụng $i$, là nghiệm lãi suất chiết khấu duy nhất làm cân bằng giá trị thị trường hiện hành $P$ của một tài sản với tổng giá trị hiện tại của toàn bộ chuỗi dòng tiền tương lai $CF_t$:
> $$P = \sum_{t=1}^n \frac{CF_t}{(1+i)^t}$$
> Giả định cốt lõi của phương trình này là toàn bộ dòng tiền trung gian nhận được đều phải được tái đầu tư liên tục với cùng mức tỷ suất $i$ cho đến thời điểm cuối cùng $n$.

> [!prp] Đặc tính tiệm cận của tỷ suất sinh lời hiện hành
> Đối với một tài sản cấu trúc gồm dòng tiền đều đặn $A$ mỗi kỳ và một dòng tiền cục bộ $K$ tại kỳ cuối, tỷ suất sinh lời hiện hành được định nghĩa là tỷ số $i_c = \frac{A}{P}$. Sự thay đổi của $i_c$ luôn đồng biến với tỷ suất hoàn vốn nội bộ $i$ ($\frac{di_c}{di} > 0$), và khi số kỳ hạn tiến ra vô cùng, $i$ tiệm cận chính xác về $i_c$:
> $$\lim_{n \to \infty} i = i_c$$

> [!exm] Bài toán thẩm định hợp đồng dòng tiền cố định
> Một chủ thể kinh tế cân nhắc việc nộp ngay khoản vốn $P = 100.000$ để đổi lấy một chuỗi dòng tiền cố định $12.000$ vào cuối mỗi kỳ, liên tục trong $12$ kỳ. Nếu chi phí cơ hội của vốn trên thị trường là $6\%$ mỗi kỳ, hãy quyết định việc tham gia dựa trên tỷ suất hoàn vốn nội bộ.
> Giải pháp:
> Thiết lập phương trình cân bằng hiện giá để tìm nghiệm $i^*$:
> $$100.000 = 12.000 \cdot \left[ \frac{1 - (1 + i^*)^{-12}}{i^*} \right]$$
> Bằng phương pháp nội suy, ta xác định được nghiệm $i^* \approx 6,103\%$. Vì tỷ suất sinh lời nội bộ cao hơn chi phí cơ hội của thị trường ($6,103\% > 6,00\%$), hợp đồng này tạo ra thặng dư kinh tế dương và đáng để đầu tư.

# Định giá Giải tích các Cấu trúc Dòng tiền Cơ bản

Mọi hợp đồng tài chính quy chuẩn đều có thể được mô hình hóa thành tổ hợp của một dòng tiền đều định kỳ $A$ và một dòng tiền cục bộ cuối kỳ $K$. Phương trình định giá tổng quát có dạng:
$$P = A \cdot \left[ \frac{1 - (1+i)^{-n}}{i} \right] + K \cdot (1+i)^{-n}$$

> [!thm] Các dạng suy biến của Phương trình định giá tổng quát
> Dựa vào các tham số $A, K, n$, phương trình tổng quát mô tả mọi công cụ trên thị trường:
> 1. Dòng tiền đơn (Hợp đồng chiết khấu thuần túy): Khi $A = 0$, giá trị hiện tại rút gọn thành $P = K \cdot (1+i)^{-n}$.
> 2. Niên kim hữu hạn (Hợp đồng trả góp): Khi $K = 0$, tài sản chỉ có dòng tiền đều, $P = A \cdot \left[ \frac{1 - (1+i)^{-n}}{i} \right]$.
> 3. Hợp đồng hỗn hợp: Cả $A > 0$ và $K > 0$, tài sản hoàn trả cả gốc lẫn thặng dư định kỳ.
> 4. Chuỗi dòng tiền vô hạn: Khi $n \to \infty$, cấu trúc cục bộ $K$ bị triệt tiêu, phương trình hội tụ về $P = \frac{A}{i}$.

> [!prf]
> Đối với chuỗi dòng tiền vô hạn, ta xét giới hạn của phương trình định giá tổng quát khi $n \to \infty$:
> $$P = \lim_{n \to \infty} \left( A \cdot \frac{1 - (1+i)^{-n}}{i} + K \cdot (1+i)^{-n} \right)$$
> Vì $i > 0$, đại lượng $(1+i)^{-n} \to 0$ khi $n \to \infty$.
> Do đó, phần giới hạn của biểu thức trở thành $P = A \cdot \frac{1 - 0}{i} + K \cdot 0 = \frac{A}{i}$.

> [!exm] Bài toán lập cấu trúc phân rã dòng tiền trả góp
> Một khoản vốn $LV = 100.000$ được tài trợ theo phương thức trả dòng tiền đều đặn, kỳ hạn $20$ chu kỳ, tỷ suất chiết khấu cố định $7\%$ mỗi chu kỳ.
> Giải pháp:
> Khoản thanh toán cố định định kỳ được xác định bằng công thức nghịch đảo của niên kim:
> $$FP = 100.000 \cdot \left[ \frac{0,07}{1 - (1,07)^{-20}} \right] \approx 9.439,29$$
> Tại chu kỳ đầu tiên, chi phí sử dụng vốn là $100.000 \times 0,07 = 7.000$, do đó phần hoàn trả vốn gốc là $9.439,29 - 7.000 = 2.439,29$. Cấu trúc này dịch chuyển dần theo thời gian, tỷ trọng chi phí sử dụng vốn giảm và tỷ trọng hoàn vốn tăng dần.

# Cơ sở Chiết khấu Tuyến tính và Hiện tượng Lãi suất Âm

> [!def] Lợi suất trên cơ sở chiết khấu
> Trong các cấu trúc tài chính ngắn hạn, thị trường thường sử dụng hệ thống chiết khấu tuyến tính $i_{db}$ thay vì hoàn giá kép. Công thức được chuẩn hóa là:
> $$i_{db} = \frac{K - P}{K} \times \frac{\text{Cơ sở ngày quy ước}}{D}$$
> Đại lượng này khác biệt so với tỷ suất hoàn vốn nội bộ ở chỗ nó dùng giá trị tương lai $K$ làm mẫu số thay vì vốn đầu tư hiện tại $P$, đồng thời áp dụng hàm tích lũy tuyến tính.

> [!thm] Phép chuyển đổi hệ tọa độ lợi suất
> Tỷ suất chiết khấu tuyến tính $i_{db}$ luôn đánh giá thấp một cách có hệ thống mức sinh lời hiệu dụng $i_{ytm}$. Hàm chuyển đổi chính xác giữa hai hệ đo lường là:
> $$i_{ytm} = \frac{\text{Cơ sở ngày chuẩn} \cdot i_{db}}{\text{Cơ sở ngày quy ước} - (i_{db} \cdot D)}$$

> [!exm] Bài toán định lượng giới hạn dưới bằng không
> Trạng thái bất thường lãi suất âm ($i < 0$) xảy ra khi thị giá giao dịch $P$ cao hơn giá trị nhận về $K$ vào cuối kỳ. Nếu một tổ chức cấp vốn $50.000.000$ với mức tỷ suất danh nghĩa âm $-0,40\%$ cho chu kỳ $0,5$ năm.
> Giải pháp:
> Giá trị thu hồi khi kết thúc hợp đồng theo cơ chế chiết khấu âm là:
> $$K = 50.000.000 \times [1 + (-0,004 \times 0,5)] = 49.900.000$$
> Mức tổn thất danh nghĩa là $100.000$. Chủ thể vẫn chấp nhận giao dịch này nếu chi phí bảo quản và duy trì tính thanh khoản của vốn dưới dạng vật chất vượt quá $100.000$.

# Động lực học Lạm phát, Thuế và Lãi suất Thực

> [!def] Lãi suất danh nghĩa và Lãi suất thực
> Lãi suất danh nghĩa $i$ đo lường tốc độ gia tăng thuần túy về mặt số lượng của đơn vị tiền tệ. Lãi suất thực $i_r$ đo lường tốc độ gia tăng về khối lượng vật chất thực tế, phản ánh sự thay đổi sức mua sau khi hiệu chỉnh theo tỷ lệ lạm phát $\pi$.

> [!thm] Đồng nhất thức Fisher và Méo mó hệ thống do Thuế
> Quan hệ cấu trúc giữa lãi suất danh nghĩa, lãi suất thực và tỷ lệ lạm phát kỳ vọng $\pi^e$ tuân theo phương trình hoàn giá kép:
> $$1 + i = (1 + i_r)(1 + \pi^e)$$
> Khi hệ thống thuế thu nhập áp dụng mức thuế suất biên $\tau$ trên toàn bộ phần lợi nhuận danh nghĩa, lãi suất thực sau thuế $i_{r,at}$ bị suy giảm theo cấu trúc:
> $$i_{r,at} = i_r(1 - \tau) - \tau \cdot \pi^e$$

> [!prf]
> Thuế được tính trên lãi suất danh nghĩa, do đó lợi suất danh nghĩa sau thuế là $i_{at} = i(1 - \tau)$.
> Lãi suất thực sau thuế là sức mua còn lại: $i_{r,at} = i_{at} - \pi^e = i(1 - \tau) - \pi^e$.
> Sử dụng xấp xỉ tuyến tính Fisher $i \approx i_r + \pi^e$, ta thế vào biểu thức:
> $$i_{r,at} = (i_r + \pi^e)(1 - \tau) - \pi^e = i_r(1 - \tau) - \tau \cdot \pi^e$$

> [!exm] Bài toán cấu trúc dòng tiền bảo toàn sức mua
> Cân nhắc một tài sản tài chính có tính năng tự động điều chỉnh giá trị vốn gốc $K_t$ liên tục theo chỉ số giá để chống lạm phát: $K_t = K_0 \times \frac{CPI_t}{CPI_0}$. Nếu tỷ lệ lạm phát chu kỳ 1 là $5\%$ và vốn gốc ban đầu là $1.000$, thì vốn gốc được điều chỉnh thành $1.050$. Bất kỳ dòng tiền phái sinh nào tính trên vốn gốc này đều tăng trưởng tỷ lệ thuận với lạm phát, do đó tỷ suất sinh lời tính toán từ tài sản này phản ánh thuần túy lãi suất thực trên thị trường.

# Giải tích Rủi ro, Độ nhạy cảm và Miễn dịch Hệ thống

Tỷ suất sinh lời trong một chu kỳ nắm giữ từ $t$ đến $t+1$ phản ánh tổng hợp thu nhập từ dòng tiền phát sinh $A$ và biến động giá trị thị trường:
$$R = \frac{A + (P_{t+1} - P_t)}{P_t}$$

> [!def] Thời lượng Macaulay và Độ lồi
> Thời lượng Macaulay (ký hiệu $DUR$) là mô men bậc nhất chuẩn hóa của phân phối dòng tiền, đo lường thời gian bình quân gia quyền để thu hồi giá trị hiện tại của tài sản:
> $$DUR = \frac{1}{P} \sum_{t=1}^n t \cdot \frac{CF_t}{(1+i)^t}$$
> Độ lồi $CX$ là đạo hàm bậc hai chuẩn hóa của hàm giá theo tỷ suất chiết khấu, phản ánh độ cong phi tuyến:
> $$CX = \frac{1}{P} \frac{d^2P}{di^2} = \frac{1}{P(1+i)^2} \sum_{t=1}^n \frac{t(t+1)CF_t}{(1+i)^t}$$

> [!thm] Vi phân xấp xỉ biến động giá trị tài sản
> Sử dụng chuỗi Taylor bậc hai, biến động phần trăm giá trị của một chuỗi dòng tiền trước một cú sốc tỷ suất $\Delta i$ được định lượng bằng thời lượng hiệu chỉnh $DUR^* = \frac{DUR}{1+i}$ và độ lồi $CX$:
> $$\frac{\Delta P}{P} \approx -DUR^* \cdot \Delta i + \frac{1}{2} CX (\Delta i)^2$$

> [!prf]
> Bắt đầu từ hàm hiện giá $P(i) = \sum_{t=1}^n CF_t (1+i)^{-t}$.
> Lấy đạo hàm bậc nhất theo biến $i$:
> $$\frac{dP}{di} = \sum_{t=1}^n (-t) CF_t (1+i)^{-t-1} = -\frac{1}{1+i} \sum_{t=1}^n t \frac{CF_t}{(1+i)^t} = -\frac{P \cdot DUR}{1+i}$$
> Do đó $\frac{1}{P}\frac{dP}{di} = -DUR^*$.
> Khai triển Taylor cho $\Delta P$:
> $$\Delta P \approx \frac{dP}{di}\Delta i + \frac{1}{2}\frac{d^2P}{di^2}(\Delta i)^2$$
> Chia toàn bộ cho $P$, ta thu được công thức xấp xỉ hoàn thiện: $\frac{\Delta P}{P} \approx -DUR^* \cdot \Delta i + \frac{1}{2} CX (\Delta i)^2$.

> [!exm] Bài toán Miễn dịch cấu trúc Tài sản - Nợ
> Để cô lập giá trị thặng dư ròng của một tổ chức trước các cú sốc lãi suất song song, điều kiện tối ưu là cân bằng mô men bậc nhất của dòng tiền giữa hai phía bảng cân đối:
> $$DUR_{\text{Tài sản}} = DUR_{\text{Nợ phải trả}}$$
> Giả sử một cấu trúc có tổng giá trị hiện tại của tài sản sinh lời là $100.000.000$ với thời lượng $5,0$ chu kỳ, và nợ phải trả là $90.000.000$ với thời lượng $2,0$ chu kỳ. Khe hở thời lượng (Duration Gap) được đo lường bằng:
> $$\text{Gap} = 5,0 - \left( \frac{90.000.000}{100.000.000} \right) \times 2,0 = 3,2 \text{ chu kỳ}$$
> Khe hở dương chỉ ra rằng hệ thống đang ở trạng thái nhạy cảm thuận chiều với rủi ro suy giảm lãi suất; một cú sốc tăng lãi suất sẽ phá hủy phần lớn giá trị thặng dư ròng.