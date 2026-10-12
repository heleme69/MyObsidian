
# Nền tảng Giải tích về Giá trị thời gian của tiền và Hàm tích lũy

Giá trị thời gian của tiền phản ánh nguyên lý một đơn vị giá trị trong hiện tại luôn lớn hơn chính nó trong tương lai do chi phí cơ hội của vốn, tác động bào mòn của lạm phát và rủi ro thanh khoản. Mối liên hệ cốt lõi là dòng tiền phát sinh tại thời điểm càng xa thì giá trị chiết khấu quy đổi về hiện tại càng nhỏ.

Thị trường sử dụng các quy tắc tính ngày để xác định phân số thời gian $t = \frac{\text{Số ngày tính lãi}}{\text{Số ngày trong một năm chuẩn}}$:
1. Quy tắc Actual/Actual: Chia số ngày lịch thực tế cho số ngày thực tế của năm.
2. Quy tắc 30/360: Giả định mỗi tháng có 30 ngày và một năm có 360 ngày.
3. Quy tắc Actual/360: Chia số ngày lịch thực tế cho cơ sở năm quy ước 360 ngày.

> [!def] Hàm số lượng và Hàm tích lũy
> Cho khoản vốn gốc ban đầu $k > 0$ đầu tư tại thời điểm $t = 0$. Hàm số lượng $A(t)$ xác định tổng giá trị thị trường của khoản đầu tư tích lũy đến thời điểm $t \ge 0$, thỏa mãn điều kiện biên $A(0) = k$.
> 
> Hàm tích lũy $a(t)$ ghi nhận giá trị tích lũy tại thời điểm $t \ge 0$ của đúng một đơn vị tiền tệ được đầu tư tại gốc thời gian $t = 0$. Quan hệ đại số được định nghĩa bởi:
> 
> $$
> a(t) = \frac{A(t)}{A(0)} = \frac{A(t)}{k}
> $$
> 
> Các tính chất giải tích cơ bản của $a(t)$:
> 1. Chuẩn hóa tại gốc tọa độ: $a(0) = 1$.
> 2. Tính đơn điệu: $a(t)$ không giảm theo thời gian $t \ge 0$ trong môi trường lãi suất không âm.
> 3. Tính liên tục: $a(t)$ liên tục trên khoảng $[0, \infty)$ nếu quá trình tích lũy diễn ra liên tục.

> [!def] Lãi suất thực tế
> Lãi suất thực tế của kỳ thứ $n$, ký hiệu là $i_n$, là tỷ số giữa lượng giá trị thặng dư thu được trong kỳ thứ $n$ trên tổng giá trị tích lũy hiện diện ở đầu kỳ đó (thời điểm $n-1$):
> 
> $$
> i_n = \frac{A(n) - A(n-1)}{A(n-1)} = \frac{a(n) - a(n-1)}{a(n-1)}
> $$

> [!thm] Đặc tính của Lãi suất đơn và Lãi suất kép
> Dưới cơ chế tích lũy tuyến tính (lãi suất đơn) $a(t) = 1 + it$ với $i > 0$, lãi suất thực tế $i_n$ giảm nghiêm ngặt theo chỉ số kỳ hạn $n$ và hội tụ về 0 khi thời gian tiến ra vô cùng:
> 
> $$
> i_n = \frac{i}{1 + i(n-1)}, \quad \lim_{n \to \infty} i_n = 0
> $$
> 
> Ngược lại, dưới cơ chế tích lũy hàm mũ (lãi suất kép) $a(t) = (1+i)^t$, lãi suất thực tế $i_n$ luôn là một hằng số bất biến đối với mọi kỳ hạn $n \ge 1$:
> 
> $$
> i_n = i
> $$

> [!prf]
> 1. Đối với cơ chế lãi suất đơn $a(t) = 1 + it$:
> 
> $$
> i_n = \frac{a(n) - a(n-1)}{a(n-1)} = \frac{(1 + in) - (1 + i(n-1))}{1 + i(n-1)} = \frac{i}{1 + i(n-1)}
> $$
> 
> Vì $i > 0$, mẫu số $1 + i(n-1)$ tăng nghiêm ngặt theo $n$, suy ra $\lim_{n \to \infty} i_n = 0$.
> 
> 2. Đối với cơ chế lãi suất kép $a(t) = (1+i)^t$:
> 
> $$
> i_n = \frac{(1+i)^n - (1+i)^{n-1}}{(1+i)^{n-1}} = \frac{(1+i)^{n-1} [ (1+i) - 1 ]}{(1+i)^{n-1}} = i
> $$
> 
> Sức sinh lời tương đối của cơ chế lãi kép hoàn toàn không suy giảm theo thời gian.

> [!thm] Tương quan thứ tự giữa quỹ đạo tích lũy đơn và kép
> Với mọi mức lãi suất $i > 0$ và thời gian $t \ge 0$, tương quan thứ tự giữa $a_{\text{kép}}(t) = (1+i)^t$ và $a_{\text{đơn}}(t) = 1 + it$ thỏa mãn:
> 1. $(1+i)^t < 1+it$ khi $0 < t < 1$.
> 2. $(1+i)^t = 1+it$ khi $t = 0$ hoặc $t = 1$.
> 3. $(1+i)^t > 1+it$ khi $t > 1$.

> [!prf]
> Xét hàm hiệu số $f(t) = (1+i)^t - (1+it)$ trên $[0, \infty)$ với $i > 0$. Ta có $f(0) = f(1) = 0$.
> 
> Đạo hàm cấp hai của hàm mũ:
> 
> $$
> \frac{d^2}{dt^2}(1+i)^t = [\ln(1+i)]^2 (1+i)^t > 0 \quad \forall t \ge 0
> $$
> 
> Hàm $(1+i)^t$ lồi nghiêm ngặt trên $[0, \infty)$. Do đó đường thẳng cát tuyến $y = 1+it$ nối hai điểm $(0, 1)$ và $(1, 1+i)$ nằm phía trên đồ thị hàm mũ trên khoảng $(0, 1)$ và nằm phía dưới đồ thị hàm mũ khi $t > 1$. Suy ra $(1+i)^t < 1+it$ với $t \in (0, 1)$ và $(1+i)^t > 1+it$ với $t > 1$.

> [!thm] Tần suất ghép lãi định kỳ và Giới hạn ghép lãi liên tục
> Gọi $i^{(m)}$ là lãi suất danh nghĩa hàng năm ghép lãi $m$ lần trong một năm ($m \in \mathbb{N}^*$). Lãi suất thực tế của mỗi kỳ phân kỳ là $\frac{i^{(m)}}{m}$.
> 
> 1. Hàm tích lũy tương ứng cho thời gian $t$ năm:
> 
> $$
> a_m(t) = \left( 1 + \frac{i^{(m)}}{m} \right)^{m \cdot t}
> $$
> 
> 2. Quan hệ tương đương với lãi suất hiệu dụng năm $i$:
> 
> $$
> 1 + i = \left( 1 + \frac{i^{(m)}}{m} \right)^m \iff i = \left( 1 + \frac{i^{(m)}}{m} \right)^m - 1
> $$
> 
> 3. Giới hạn khi tần suất ghép lãi tiến ra vô cùng ($m \to \infty$):
> 
> $$
> \lim_{m \to \infty} a_m(t) = \lim_{m \to \infty} \left( 1 + \frac{i^{(m)}}{m} \right)^{m \cdot t} = e^{\delta t}
> $$
> 
> trong đó $\delta = \lim_{m \to \infty} i^{(m)} = \ln(1+i)$ là lực lãi suất bất biến.

> [!prf]
> Đặt $u = \frac{m}{i^{(m)}}$. Khi $m \to \infty$ với $i^{(m)} \to \delta$, ta có $u \to \infty$. Biến đổi giới hạn:
> 
> $$
> \lim_{m \to \infty} \left( 1 + \frac{i^{(m)}}{m} \right)^{m \cdot t} = \lim_{u \to \infty} \left[ \left( 1 + \frac{1}{u} \right)^u \right]^{\delta \cdot t} = e^{\delta t}
> $$
> 
> Lấy logarit tự nhiên của đẳng thức $1 + i = e^{\delta}$, suy ra $\delta = \ln(1+i)$.

> [!thm] Định lý khôi phục hàm tích lũy từ lực lãi suất
> Cho hàm lực lãi suất $\delta_t$ khả tích trên đoạn $[0, t]$, hàm tích lũy tổng quát $a(t)$ được khôi phục duy nhất bởi công thức hàm mũ tích phân:
> 
> $$
> a(t) = \exp\left(\int_0^t \delta_r \, dr\right)
> $$
> 
> Trường hợp lực lãi suất là hằng số $\delta_t = \delta$, ta có $a(t) = e^{\delta t} = (1+i)^t \iff \delta = \ln(1+i)$.

> [!prf]
> Từ định nghĩa giải tích của lực lãi suất:
> 
> $$
> \delta_r = \frac{a'(r)}{a(r)} = \frac{d}{dr}\ln a(r)
> $$
> 
> Lấy tích phân định hướng hai vế từ $0$ đến $t$:
> 
> $$
> \int_0^t \delta_r \, dr = \int_0^t \frac{d}{dr}\ln a(r) \, dr = \ln a(t) - \ln a(0)
> $$
> 
> Vì $a(0) = 1$ nên $\ln a(0) = 0$. Áp dụng hàm số mũ cơ số tự nhiên $e$ cho hai vế, thu được:
> 
> $$
> a(t) = \exp\left(\int_0^t \delta_r \, dr\right)
> $$

> [!exm] Xác định giá trị tích lũy với lực lãi suất biến thiên
> Một tài sản được tích lũy với lực lãi suất biến thiên liên tục $\delta_t = \frac{0,05}{1 + 0,05t}$. Nếu quy mô vốn ban đầu là $2.000$, tính quy mô tài sản đạt được sau $t = 10$ chu kỳ.
> 
> Giải pháp:
> 
> Tích phân hàm lực lãi suất từ $0$ đến $10$:
> 
> $$
> \int_0^{10} \frac{0,05}{1 + 0,05r} \, dr = \left[ \ln(1 + 0,05r) \right]_0^{10} = \ln(1,5)
> $$
> 
> Khôi phục hàm tích lũy:
> 
> $$
> a(10) = \exp(\ln(1,5)) = 1,5
> $$
> 
> Quy mô tài sản tại thời điểm $10$ là:
> 
> $$
> A(10) = 2.000 \times 1,5 = 3.000
> $$


# Mô hình Dòng tiền Cốt lõi và Hệ thống Thước đo Lợi suất

Mọi tài sản hay hợp đồng tài chính đều có thể trừu tượng hóa thành một chuỗi dòng tiền phát sinh $CF_t$ tại các mốc thời gian $t = 1, 2, \dots, n$ và giá trị thị trường hiện hành $P$.

> [!def] Hệ thống Khái niệm Thước đo Lợi suất
> 1. Tỷ lệ lãi danh nghĩa cố định định kỳ ($r$ hoặc $c$): Tỷ lệ phần trăm tính trên một quy mô vốn danh nghĩa $F$ để tạo ra dòng tiền định kỳ $A = F \cdot r$.
> 
> 2. Lợi suất hiện hành ($i_c$ - Current Yield): Tỷ số giữa dòng tiền định kỳ hàng năm $A$ trên thị giá hiện tại $P$ của tài sản:
> 
> $$
> i_c = \frac{A}{P}
> $$
> 
> Thước đo này phản ánh hiệu suất thu nhập dòng tiền trên thị giá nhưng bỏ qua phần chênh lệch vốn giữa giá trị thanh toán cuối kỳ và giá mua hiện tại.
> 
> 3. Lợi suất đến hạn ($i$ hoặc $YTM$ - Yield to Maturity): Nghiệm lãi suất chiết khấu duy nhất làm cân bằng giá trị thị trường hiện hành $P$ của tài sản với tổng giá trị hiện tại của toàn bộ chuỗi dòng tiền tương lai:
> 
> $$
> P = \sum_{t=1}^n \frac{CF_t}{(1+i)^t}
> $$
> 
> YTM đại diện cho tỷ suất hoàn vốn nội bộ (IRR). Mức sinh lời thực tế của nhà đầu tư chỉ bằng đúng YTM nếu tài sản được nắm giữ đến khi đáo hạn và toàn bộ dòng tiền trung gian đều được tái đầu tư với lãi suất bằng chính YTM.

> [!prp] Các tính chất tiệm cận và biến thiên của Lợi suất hiện hành so với YTM
> Cho một tài sản có dòng tiền định kỳ $A = F \cdot r$, dòng thanh toán kết thúc kỳ $n$ là $F$, và đang giao dịch tại mức thị giá $P$. Khi đó lợi suất hiện hành $i_c = \frac{A}{P}$ và lợi suất đến hạn $i$ (YTM) thỏa mãn hai tính chất:
> 4. Tính xấp xỉ tiệm cận: $i_c$ là xấp xỉ tốt cho $i$ khi thị giá gần ngang bằng mệnh giá danh nghĩa ($P \approx F$) hoặc khi kỳ hạn của tài sản rất dài ($n \to \infty$). Cụ thể:
> 
> $$
> \lim_{n \to \infty} i = i_c \quad \text{và} \quad \left. i \right|_{P = F} = i_c = r
> $$
> 
> 5. Tính đồng biến (cùng chiều biến thiên): Sự thay đổi của lợi suất hiện hành $i_c$ luôn cùng chiều với sự thay đổi của lợi suất đến hạn $i$:
> 
> $$
> \frac{di_c}{di} > 0
> $$

> [!prf]
> 6. Chứng minh tính xấp xỉ tiệm cận:
> 
> Phương trình định giá của tài sản theo YTM $i$:
> 
> $$
> P = \sum_{t=1}^n \frac{A}{(1+i)^t} + \frac{F}{(1+i)^n} = A \cdot \left[ \frac{1 - (1+i)^{-n}}{i} \right] + \frac{F}{(1+i)^n}
> $$
> 
> Nhân cả hai vế với $i$ và biến đổi đại số:
> 
> $$
> P \cdot i = A \left[ 1 - (1+i)^{-n} \right] + \frac{F \cdot i}{(1+i)^n} = A + \frac{F \cdot i - A}{(1+i)^n}
> $$
> 
> Chia cả hai vế cho $P$ và thay định nghĩa $i_c = \frac{A}{P}$:
> 
> $$
> i = \frac{A}{P} + \frac{F \cdot i - A}{P(1+i)^n} = i_c + \frac{i - \frac{A}{F}}{\frac{P}{F}(1+i)^n} = i_c + \frac{i - r}{\frac{P}{F}(1+i)^n}
> $$
> 
> Từ hệ thức sai số tuyệt đối $|i - i_c| = \frac{|i - r|}{\frac{P}{F}(1+i)^n}$:
> - Khi $P = F$: Ta có $i = r$, tử số triệt tiêu: $|i - i_c| = 0 \implies i = i_c = r$. Khi $P \approx F$, sai số $|i - i_c| \approx 0$.
> - Khi $n \to \infty$: Với $i > 0$, mẫu số $(1+i)^n \to \infty$, dẫn đến $\lim_{n \to \infty} |i - i_c| = 0 \implies \lim_{n \to \infty} i = i_c$.
> 
> 2. Chứng minh tính đồng biến ($\frac{di_c}{di} > 0$):
> 
> Lấy đạo hàm bậc nhất của thị giá $P$ theo $i$:
> 
> $$
> \frac{dP}{di} = - \sum_{t=1}^n t \cdot CF_t (1+i)^{-t-1} < 0
> $$
> 
> Thị giá $P$ nghịch biến nghiêm ngặt theo $i$. Từ định nghĩa $i_c = \frac{A}{P}$, lấy đạo hàm của $i_c$ theo biến $P$:
> 
> $$
> \frac{di_c}{dP} = -\frac{A}{P^2} < 0
> $$
> 
> Áp dụng quy tắc đạo hàm hàm hợp:
> 
> $$
> \frac{di_c}{di} = \frac{di_c}{dP} \cdot \frac{dP}{di} = \left( -\frac{A}{P^2} \right) \cdot \frac{dP}{di} > 0
> $$
> 
> Tích của hai đại lượng âm là một số dương, chứng minh $i_c$ luôn đồng biến theo $i$.

> [!thm] Giải pháp Số giải phương trình Hiện giá: Phương pháp Nội suy Tuyến tính
> Phương trình cân bằng hiện giá tổng quát:
> 
> $$
> P(i) = \sum_{t=1}^n CF_t(1+i)^{-t} = P_{\text{target}}
> $$
> 
> là phương trình phi tuyến đại số bậc cao không có nghiệm giải tích dạng căn thức khi $n \ge 5$ (Định lý Abel-Ruffini). Do $P'(i) < 0$, nghiệm $i^*$ được xấp xỉ qua hai mốc kẹp nghiệm $i_1 < i_2$ thỏa mãn $P(i_1) > P_{\text{target}} > P(i_2)$ bằng cát tuyến tuyến tính:
> 
> $$
> i^* \approx i_1 + (i_2 - i_1) \cdot \frac{P(i_1) - P_{\text{target}}}{P(i_1) - P(i_2)}
> $$

> [!prf]
> Do $P(i)$ liên tục và nghịch biến nghiêm ngặt trên $[i_1, i_2]$, theo định lý giá trị trung gian tồn tại duy nhất một nghiệm $i^* \in (i_1, i_2)$ sao cho $P(i^*) = P_{\text{target}}$.
> 
> Thay thế đường cong phi tuyến $y = P(i)$ bằng đường thẳng cát tuyến đi qua hai điểm cực trị $M(i_1, P(i_1))$ và $N(i_2, P(i_2))$. Phương trình đường thẳng cát tuyến:
> 
> $$
> \frac{P - P(i_1)}{i - i_1} = \frac{P(i_2) - P(i_1)}{i_2 - i_1}
> $$
> 
> Đặt $P = P_{\text{target}}$ và giải phương trình đại số bậc nhất theo ẩn $i^*$:
> 
> $$
> i^* - i_1 = [P_{\text{target}} - P(i_1)] \cdot \frac{i_2 - i_1}{P(i_2) - P(i_1)}
> $$
> 
> Đổi dấu cả tử và mẫu của tỷ số chênh lệch giá trị hiện tại:
> 
> $$
> \frac{P_{\text{target}} - P(i_1)}{P(i_2) - P(i_1)} = \frac{P(i_1) - P_{\text{target}}}{P(i_1) - P(i_2)}
> $$
> 
> Chuyển vế $i_1$, ta thu được công thức nội suy chuẩn tắc:
> 
> $$
> i^* \approx i_1 + (i_2 - i_1) \cdot \frac{P(i_1) - P_{\text{target}}}{P(i_1) - P(i_2)}
> $$

> [!exm] Thẩm định hợp đồng dòng tiền cố định bằng Phương pháp Nội suy
> Một chủ thể kinh tế cân nhắc việc nộp ngay khoản vốn $P = 100.000$ để đổi lấy một chuỗi dòng tiền cố định $12.000$ vào cuối mỗi kỳ, liên tục trong $12$ kỳ. Nếu chi phí cơ hội của vốn trên thị trường là $6\%$ mỗi kỳ, hãy thẩm định hợp đồng dựa trên tỷ suất hoàn vốn nội bộ được ước lượng bằng phương pháp nội suy tuyến tính.
> 
> Giải pháp:
> 
> Thiết lập phương trình cân bằng hiện giá để tìm nghiệm $i^*$:
> 
> $$
> 100.000 = 12.000 \cdot \left[ \frac{1 - (1 + i^*)^{-12}}{i^*} \right] \iff a_{\overline{12}|i^*} = \frac{100.000}{12.000} \approx 8,333333
> $$
> 
> Do hàm hiện giá nghịch biến theo lãi suất, ta chọn hai mốc lãi suất thử nghiệm để kẹp giá trị mục tiêu $P_{\text{target}} = 100.000$:
> - Tại $i_1 = 6,0\% = 0,06$: 
> 
> $$
> P(6\%) = 12.000 \cdot \left[ \frac{1 - (1,06)^{-12}}{0,06} \right] = 12.000 \times 8,383844 \approx 100.606,13
> $$
> 
> - Tại $i_2 = 6,2\% = 0,062$: 
> 
> $$
> P(6,2\%) = 12.000 \cdot \left[ \frac{1 - (1,062)^{-12}}{0,062} \right] = 12.000 \times 8,281488 \approx 99.377,86
> $$
> 
> Ta có khoảng kẹp giá trị: $P(6,0\%) = 100.606,13 > 100.000 > P(6,2\%) = 99.377,86$.
> 
> Áp dụng công thức nội suy tuyến tính:
> 
> $$
> i^* \approx 0,06 + (0,062 - 0,06) \cdot \frac{100.606,13 - 100.000}{100.606,13 - 99.377,86}
> $$
> 
> $$
> i^* \approx 0,06 + 0,002 \cdot \frac{606,13}{1.228,27} \approx 0,06 + 0,002 \times 0,49348 \approx 6,099\%
> $$
> 
> Tỷ suất sinh lời nội bộ ước lượng là $6,099\%$. Vì tỷ suất này vượt chi phí cơ hội vốn thị trường ($6,099\% > 6,00\%$), hợp đồng mang lại giá trị gia tăng kinh tế dương.


# Mô hình Định giá Dòng tiền Tổng quát: Hiện giá và Tương lai

Mọi cấu trúc tài chính quy chuẩn đều có thể được mô hình hóa thành tổ hợp của một dòng tiền đều định kỳ $A$ và một dòng tiền đơn cuối kỳ $K$.

> [!def] Giá trị hiện tại và Giá trị tương lai của Niên kim
> Cho chuỗi $n$ khoản thanh toán bằng nhau, mỗi khoản trị giá $A$, với tỷ suất lãi suất mỗi kỳ là $i > 0$.
> 
> 1. Hiện giá niên kim thông thường (thanh toán cuối kỳ):
> 
> $$
> a_{\overline{n}|i} = \sum_{t=1}^n (1+i)^{-t} = \frac{1 - (1+i)^{-n}}{i}
> $$
> 
> 2. Giá trị tương lai niên kim thông thường (tích lũy đến thời điểm $n$):
> 
> $$
> s_{\overline{n}|i} = \sum_{t=0}^{n-1} (1+i)^t = a_{\overline{n}|i} \cdot (1+i)^n = \frac{(1+i)^n - 1}{i}
> $$
> 
> 3. Dạng niên kim đầu kỳ (Annuity-due): Khi các khoản thanh toán phát sinh tại đầu mỗi chu kỳ, hiện giá và tương lai giá được khuếch đại bởi hệ số tích lũy một kỳ:
> 
> $$
> \ddot{a}_{\overline{n}|i} = (1+i) \cdot a_{\overline{n}|i}, \quad \ddot{s}_{\overline{n}|i} = (1+i) \cdot s_{\overline{n}|i}
> $$

> [!thm] Phương trình Dòng tiền Tổng quát
> Đối với cấu trúc tài chính gồm dòng tiền định kỳ $A$ và dòng tiền đơn $K$ tại kỳ $n$:
> 
> 4. Phương trình Hiện giá Tổng quát ($PV$):
> 
> $$
> PV = A \cdot a_{\overline{n}|i} + K \cdot (1+i)^{-n} = A \cdot \left[ \frac{1 - (1+i)^{-n}}{i} \right] + K \cdot (1+i)^{-n}
> $$
> 
> 5. Phương trình Tương lai Tổng quát ($FV$):
> 
> $$
> FV = PV \cdot (1+i)^n = A \cdot s_{\overline{n}|i} + K = A \cdot \left[ \frac{(1+i)^n - 1}{i} \right] + K
> $$
> 
> 6. Các dạng suy biến cơ bản:
> - Cấu trúc chiết khấu thuần túy: $A = 0 \implies PV = K(1+i)^{-n}, \; FV = K$.
> - Cấu trúc hoàn trả dần (Niên kim thuần túy): $K = 0 \implies PV = A \cdot a_{\overline{n}|i}, \; FV = A \cdot s_{\overline{n}|i}$.
> - Cấu trúc dòng tiền vô hạn: Khi $n \to \infty$, $PV = \frac{A}{i}$.

> [!prf]
> Xét phương trình Hiện giá:
> 
> $$
> PV = \sum_{t=1}^n \frac{A}{(1+i)^t} + \frac{K}{(1+i)^n}
> $$
> 
> Đặt $v = \frac{1}{1+i}$. Chuỗi niên kim là tổng cấp số nhân với số hạng đầu $u_1 = v$, công bội $q = v$:
> 
> $$
> \sum_{t=1}^n v^t = v \cdot \frac{1 - v^n}{1 - v} = \frac{1}{1+i} \cdot \frac{1 - (1+i)^{-n}}{\frac{i}{1+i}} = \frac{1 - (1+i)^{-n}}{i} = a_{\overline{n}|i}
> $$
> 
> Nhân toàn bộ biểu thức Hiện giá với $(1+i)^n$, ta thu được phương trình Tương lai:
> 
> $$
> FV = PV(1+i)^n = A \cdot \left[ \frac{1 - (1+i)^{-n}}{i} \right](1+i)^n + K = A \cdot \left[ \frac{(1+i)^n - 1}{i} \right] + K = A \cdot s_{\overline{n}|i} + K
> $$
> 
> Khi $n \to \infty$, vì $i > 0$ nên $(1+i)^{-n} \to 0$, suy ra $PV = A \cdot \frac{1 - 0}{i} + K \cdot 0 = \frac{A}{i}$.

> [!cor] Quan hệ Chuyển đổi giữa Trái phiếu Vĩnh viễn và Niên kim Hữu hạn
> Từ định nghĩa hiện giá dòng tiền vô hạn (Consol) $PV_{\text{consol}} = \frac{A}{i}$, hiện giá của một niên kim hữu hạn $n$ kỳ cùng mức chi trả $A$ được khôi phục trực tiếp qua:
> 
> $$
> PV_{\text{annuity}} = PV_{\text{consol}} \cdot [1 - (1+i)^{-n}]
> $$

> [!cor] Dạng chuyển hóa qua Tỷ số Lãi suất Định kỳ
> Khi dòng tiền định kỳ $A$ được xác định theo tỷ lệ $r$ trên quy mô danh nghĩa $F$ ($A = F \cdot r$), phương trình hiện giá có thể viết lại theo tỷ số $\frac{r}{i}$:
> 
> $$
> PV = F \cdot \left(\frac{r}{i}\right) \cdot [1 - (1+i)^{-n}] + K \cdot (1+i)^{-n}
> $$
> 
> Biểu thức này cô lập tỷ số $\frac{r}{i}$, cho phép định giá trực tiếp ngay cả khi chưa xác định riêng rẽ $r$ và $i$.

> [!thm] Mô hình Dòng tiền Tăng trưởng Hình học kết hợp Hoàn vốn Đáo hạn
> Nếu dòng tiền không cố định mà tăng trưởng với tốc độ không đổi $g$ mỗi chu kỳ ($CF_t = A_1(1+g)^{t-1}$) và đáo hạn nhận khoản hoàn vốn $K$ tại kỳ $n$, với $i \ne g$:
> 
> 1. Hiện giá chuỗi hữu hạn $n$ kỳ:
> 
> $$
> PV = \sum_{t=1}^n \frac{A_1(1+g)^{t-1}}{(1+i)^t} + \frac{K}{(1+i)^n} = \frac{A_1}{i - g} \left[ 1 - \left(\frac{1+g}{1+i}\right)^n \right] + K(1+i)^{-n}
> $$
> 
> 2. Giới hạn chuỗi vô hạn ($n \to \infty$) khi $i > g$:
> 
> $$
> PV = \lim_{n \to \infty} \left\{ \frac{A_1}{i - g} \left[ 1 - \left(\frac{1+g}{1+i}\right)^n \right] + K(1+i)^{-n} \right\} = \frac{A_1}{i - g}
> $$

> [!prf]
> Xét riêng thành phần hiện giá chuỗi dòng tiền tăng trưởng:
> 
> $$
> PV_{\text{grad}} = \sum_{t=1}^n \frac{A_1(1+g)^{t-1}}{(1+i)^t} = \frac{A_1}{1+g} \sum_{t=1}^n \left( \frac{1+g}{1+i} \right)^t
> $$
> 
> Đặt công bội $q = \frac{1+g}{1+i}$. Tổng cấp số nhân $n$ số hạng:
> 
> $$
> \sum_{t=1}^n q^t = q \cdot \frac{1 - q^n}{1 - q}
> $$
> 
> Tính toán mẫu số $1 - q$:
> 
> $$
> 1 - q = 1 - \frac{1+g}{1+i} = \frac{(1+i) - (1+g)}{1+i} = \frac{i - g}{1+i}
> $$
> 
> Thay ngược vào biểu thức hiện giá dòng tiền tăng trưởng:
> 
> $$
> PV_{\text{grad}} = \frac{A_1}{1+g} \cdot \frac{1+g}{1+i} \cdot \frac{1 - q^n}{\frac{i - g}{1+i}} = \frac{A_1}{i - g} \left[ 1 - \left( \frac{1+g}{1+i} \right)^n \right]
> $$
> 
> Cộng thêm hiện giá của khoản hoàn vốn cuối kỳ $K(1+i)^{-n}$, ta thu được công thức nghiệm đóng. Khi $i > g$, ta có $0 < q < 1$, do đó khi $n \to \infty$ thì $q^n \to 0$ và $(1+i)^{-n} \to 0$, suy ra $PV = \frac{A_1}{i - g}$.

> [!exm] Định giá Cấu trúc Dòng tiền Tăng trưởng Hình học
> Một công cụ tài chính kỳ hạn 20 năm có giá trị hoàn trả gốc khi đáo hạn là $K = 1.050$. Khoản chi trả đầu tiên vào cuối năm thứ nhất là $A_1 = 75$. Từ năm thứ hai trở đi, mỗi khoản tiền nhận được tăng trưởng $3\%$ so với kỳ liền trước ($g = 3\%$). Nếu lãi suất chiết khấu áp dụng là $i = 8,25\%$/năm, hãy xác định hiện giá $PV$ của công cụ.
> 
> Giải pháp:
> 
> Áp dụng trực tiếp công thức dòng tiền tăng trưởng hình học với các thông số: $A_1 = 75$, $g = 0,03$, $i = 0,0825$, $n = 20$, $K = 1.050$.
> 
> 1. Hiện giá thành phần dòng tiền tăng dần:
> 
> Chênh lệch tỷ suất: $i - g = 0,0825 - 0,03 = 0,0525$.
> 
> Tỷ số công bội:
> 
> $$
> \frac{1+g}{1+i} = \frac{1,03}{1,0825} \approx 0,951501
> $$
> 
> Chiết khấu tăng trưởng sau 20 năm:
> 
> $$
> \left( \frac{1+g}{1+i} \right)^{20} \approx (0,951501)^{20} \approx 0,368947
> $$
> 
> Hiện giá chuỗi dòng tiền:
> 
> $$
> PV_{\text{grad}} = \frac{75}{0,0525} \cdot [1 - 0,368947] = 1.428,5714 \times 0,631053 \approx 901,50
> $$
> 
> 2. Hiện giá khoản thanh toán gốc cuối kỳ:
> 
> $$
> PV_K = 1.050 \times (1,0825)^{-20} = 1.050 \times 0,205466 \approx 215,74
> $$
> 
> 3. Tổng hiện giá của công cụ:
> 
> $$
> PV = PV_{\text{grad}} + PV_K = 901,50 + 215,74 = 1.117,24
> $$

> [!exm] Bài toán tích lũy theo Niên kim Tương lai
> Một chủ thể cần tích lũy một lượng vốn mục tiêu $FV = 20.000$ sau $n = 8$ kỳ với tỷ suất sinh lời $i = 6\%$ mỗi kỳ thông qua các khoản trích lập định kỳ bằng nhau $A$ vào cuối mỗi kỳ.
> 
> Giải pháp:
> 
> Áp dụng phương trình tương lai với $K = 0$:
> 
> $$
> FV = A \cdot s_{\overline{8}|6\%} \implies A = \frac{FV}{s_{\overline{8}|6\%}} = \frac{20.000 \times 0,06}{(1,06)^8 - 1} \approx 2.020,72
> $$


# Cơ sở Chiết khấu Tuyến tính và Hiện tượng Lãi suất Âm

> [!def] Lợi suất trên cơ sở chiết khấu
> Trong các cấu trúc tài chính ngắn hạn, thị trường thường sử dụng hệ thống chiết khấu tuyến tính $i_{db}$ thay vì hoàn giá kép:
> 
> $$
> i_{db} = \frac{K - P}{K} \times \frac{\text{Cơ sở ngày quy ước}}{D}
> $$
> 
> trong đó $K$ là giá trị thanh toán cuối kỳ, $P$ là giá giao dịch hiện tại, và $D$ là số ngày thực tế. Đại lượng này dùng giá trị tương lai $K$ làm mẫu số thay vì vốn đầu tư hiện tại $P$, đồng thời áp dụng tích lũy tuyến tính.

> [!thm] Phép chuyển đổi hệ tọa độ lợi suất
> Tỷ suất chiết khấu tuyến tính $i_{db}$ luôn đánh giá thấp một cách có hệ thống mức sinh lời hiệu dụng $i_{ytm}$. Hàm chuyển đổi chính xác giữa hai hệ đo lường là:
> 
> $$
> i_{ytm} = \frac{\text{Cơ sở ngày chuẩn} \cdot i_{db}}{\text{Cơ sở ngày quy ước} - (i_{db} \cdot D)}
> $$

> [!prf]
> Xuất phát từ định nghĩa mức sinh lời trên vốn thực tế:
> 
> $$
> i_{ytm} = \frac{K - P}{P} \times \frac{\text{Cơ sở ngày chuẩn}}{D}
> $$
> 
> Từ công thức của $i_{db}$, ta có khoản thặng dư:
> 
> $$
> K - P = K \cdot i_{db} \cdot \frac{D}{\text{Cơ sở ngày quy ước}}
> $$
> 
> Suy ra:
> 
> $$
> P = K \left[ 1 - i_{db} \cdot \frac{D}{\text{Cơ sở ngày quy ước}} \right]
> $$
> 
> Lập tỷ số $\frac{K - P}{P}$ và triệt tiêu $K$:
> 
> $$
> \frac{K - P}{P} = \frac{i_{db} \cdot \frac{D}{\text{Cơ sở ngày quy ước}}}{1 - i_{db} \cdot \frac{D}{\text{Cơ sở ngày quy ước}}} = \frac{i_{db} \cdot D}{\text{Cơ sở ngày quy ước} - (i_{db} \cdot D)}
> $$
> 
> Thay tỷ số trên vào định nghĩa $i_{ytm}$, ta thu được công thức chuyển đổi duy nhất giữa hai hệ chuẩn:
> 
> $$
> i_{ytm} = \frac{\text{Cơ sở ngày chuẩn} \cdot i_{db}}{\text{Cơ sở ngày quy ước} - (i_{db} \cdot D)}
> $$

> [!thm] Cân bằng Lợi suất Kỳ hạn Ngắn hạn theo Quy chuẩn Lãi đơn
> Đối với hai kỳ hạn ngắn hạn $D_1 < D_2$ có lợi suất hàng năm quy ước tương ứng $y_1$ và $y_2$. Theo nguyên lý Không kinh doanh chênh lệch giá, việc đầu tư vào kỳ hạn dài $D_2$ phải có hệ số tích lũy vốn bằng việc đầu tư kỳ hạn $D_1$ rồi tái đầu tư trong $D_2 - D_1$ ngày với lãi suất kỳ hạn $f$:
> 
> $$
> 1 + y_2 \frac{D_2}{\text{Cơ sở ngày}} = \left( 1 + y_1 \frac{D_1}{\text{Cơ sở ngày}} \right) \left( 1 + f \frac{D_2 - D_1}{\text{Cơ sở ngày}} \right)
> $$
> 
> Rút ra lãi suất kỳ hạn quy năm $f$:
> 
> $$
> f = \left[ \frac{1 + y_2 \frac{D_2}{\text{Cơ sở ngày}}}{1 + y_1 \frac{D_1}{\text{Cơ sở ngày}}} - 1 \right] \times \frac{\text{Cơ sở ngày}}{D_2 - D_1}
> $$

> [!exm] Xác định Lãi suất Kỳ hạn Ngắn hạn theo Quy ước Lãi đơn
> Trên thị trường tiền tệ, lãi suất đầu tư hàng năm quy chuẩn (cơ sở 365 ngày) cho công cụ kỳ hạn $D_1 = 91$ ngày là $y_1 = 3,0\%$ và công cụ kỳ hạn $D_2 = 182$ ngày là $y_2 = 3,5\%$. Xác định mức lãi suất kỳ hạn hàng năm $f$ cho khoảng thời gian 91 ngày bắt đầu từ ngày 91 đến ngày 182.
> 
> Giải pháp:
> 
> 1. Tính hệ số tích lũy cho kỳ hạn 182 ngày:
> 
> $$
> 1 + y_2 \frac{D_2}{365} = 1 + 0,035 \times \frac{182}{365} \approx 1,017452
> $$
> 
> 2. Tính hệ số tích lũy cho kỳ hạn 91 ngày đầu tiên:
> 
> $$
> 1 + y_1 \frac{D_1}{365} = 1 + 0,030 \times \frac{91}{365} \approx 1,007479
> $$
> 
> 3. Áp dụng công thức rút lãi suất kỳ hạn $f$ với khoảng thời gian $D_2 - D_1 = 182 - 91 = 91$ ngày:
> 
> $$
> f = \left[ \frac{1,017452}{1,007479} - 1 \right] \times \frac{365}{91} = (1,009899 - 1) \times \frac{365}{91} \approx 3,97\%/\text{năm}
> $$

> [!exm] Bài toán định lượng giới hạn dưới bằng không
> Trạng thái bất thường lãi suất âm ($i < 0$) xảy ra khi thị giá giao dịch $P$ cao hơn giá trị nhận về $K$ vào cuối kỳ. Nếu một tổ chức cấp vốn $50.000.000$ với mức tỷ suất danh nghĩa âm $-0,40\%$ cho chu kỳ $0,5$ năm.
> 
> Giải pháp:
> 
> Giá trị thu hồi khi kết thúc hợp đồng theo cơ chế chiết khấu âm là:
> 
> $$
> K = 50.000.000 \times [1 + (-0,004 \times 0,5)] = 49.900.000
> $$
> 
> Mức tổn thất danh nghĩa là $100.000$. Chủ thể vẫn chấp nhận giao dịch này nếu chi phí bảo quản và duy trì tính thanh khoản của vốn dưới dạng vật chất vượt quá $100.000$.


# Cấu trúc Kỳ hạn của Lãi suất và Định giá Không Kinh doanh Chênh lệch giá

> [!def] Lãi suất Giao ngay và Lãi suất Kỳ hạn
> Lãi suất giao ngay (Spot rate) $s_t$ là mức tỷ suất hiệu dụng hàng năm áp dụng cho dòng tiền phát sinh từ hiện tại đến thời điểm $t$.
> 
> Lãi suất kỳ hạn (Forward rate) $f_{t_1, t_2}$ là mức lãi suất được thỏa thuận tại hiện tại nhưng áp dụng cho một khoản đầu tư bắt đầu từ thời điểm $t_1$ và kết thúc tại thời điểm $t_2$ trong tương lai.

> [!thm] Quan hệ Cấu trúc Kỳ hạn theo Nguyên lý Không kinh doanh Chênh lệch giá
> Để triệt tiêu cơ hội kinh doanh chênh lệch giá (No-Arbitrage), việc đầu tư liên tục trong kỳ hạn dài phải mang lại giá trị tích lũy tương đương với việc đầu tư vào kỳ hạn ngắn rồi tái đầu tư theo lãi suất kỳ hạn:
> 
> $$
> (1 + s_{t_2})^{t_2} = (1 + s_{t_1})^{t_1} \cdot (1 + f_{t_1, t_2})^{t_2 - t_1}
> $$
> 
> Đối với cấu trúc đa kỳ hạn không đồng nhất, hiện giá của một chuỗi dòng tiền phải được chiết khấu theo từng lãi suất giao ngay tương ứng của mỗi kỳ:
> 
> $$
> PV = \sum_{t=1}^n \frac{CF_t}{(1 + s_t)^t}
> $$

> [!thm] Kỹ thuật Bóc tách Đường cong Lãi suất Giao ngay (Bootstrapping)
> Cho chuỗi tài sản nợ chi trả coupon $C_k$ và hoàn vốn $F_k$ tại các kỳ hạn nguyên $k = 1, 2, \dots, n$ với giá thị trường quan sát được là $P_k$. Lãi suất giao ngay $s_k$ được bóc tách đệ quy liên tục qua hệ phương trình:
> 
> $$
> P_k = \sum_{t=1}^{k-1} \frac{C_k}{(1 + s_t)^t} + \frac{C_k + F_k}{(1 + s_k)^k}
> $$
> 
> Cô lập lãi suất giao ngay tại kỳ hạn $k$:
> 
> $$
> s_k = \left( \frac{C_k + F_k}{P_k - \sum_{t=1}^{k-1} \frac{C_k}{(1 + s_t)^t}} \right)^{1/k} - 1
> $$

> [!exm] Bóc tách Lãi suất Giao ngay (Bootstrapping) từ Thị giá
> Thị trường quan sát được hai công cụ nợ cùng mệnh giá $F = 100$:
> - Công cụ 1: Kỳ hạn 1 năm, lãi coupon $6\%$ trả cuối năm, thị giá $P_1 = 101,92$.
> - Công cụ 2: Kỳ hạn 2 năm, lãi coupon $6\%$ trả hàng năm, thị giá $P_2 = 102,84$.
> Hãy áp dụng kỹ thuật bóc tách Bootstrapping để xác định đường cong lãi suất giao ngay ($s_1$ và $s_2$).
> 
> Giải pháp:
> 
> Bước 1: Bóc tách lãi suất giao ngay kỳ hạn 1 năm ($s_1$):
> 
> Công cụ 1 chỉ có dòng tiền duy nhất gồm coupon và gốc tại cuối năm thứ nhất ($C_1 + F_1 = 6 + 100 = 106$):
> 
> $$
> P_1 = \frac{106}{1 + s_1} \implies 101,92 = \frac{106}{1 + s_1}
> $$
> 
> $$
> 1 + s_1 = \frac{106}{101,92} \approx 1,04003 \implies s_1 \approx 4,00\%/\text{năm}
> $$
> 
> Bước 2: Bóc tách lãi suất giao ngay kỳ hạn 2 năm ($s_2$):
> 
> Công cụ 2 chi trả coupon $C_2 = 6$ ở năm 1 và $C_2 + F_2 = 106$ ở năm 2. Thiết lập phương trình định giá theo từng lãi suất giao ngay:
> 
> $$
> P_2 = \frac{6}{1 + s_1} + \frac{106}{(1 + s_2)^2}
> $$
> 
> Thay $1 + s_1 \approx 1,04003$ (hoặc $\frac{6}{1 + s_1} = 6 \times \frac{101,92}{106} \approx 5,7691$):
> 
> $$
> 102,84 = 5,7691 + \frac{106}{(1 + s_2)^2}
> $$
> 
> Khấu trừ hiện giá của coupon năm 1 khỏi thị giá để cô lập dòng tiền năm 2:
> 
> $$
> \frac{106}{(1 + s_2)^2} = 102,84 - 5,7691 = 97,0709
> $$
> 
> Giải phương trình tìm $s_2$:
> 
> $$
> (1 + s_2)^2 = \frac{106}{97,0709} \approx 1,091985 \implies 1 + s_2 = \sqrt{1,091985} \approx 1,04498
> $$
> 
> $$
> s_2 \approx 4,50\%/\text{năm}
> $$

> [!exm] Xác định Lãi suất Kỳ hạn Tương lai từ Lãi suất Giao ngay
> Cho biết lãi suất giao ngay kỳ hạn 1 năm là $s_1 = 3,0\%$ và kỳ hạn 2 năm là $s_2 = 3,5\%$. Xác định mức lãi suất kỳ hạn 1 năm áp dụng cho chu kỳ thứ hai ($f_{1,2}$).
> 
> Giải pháp:
> 
> Theo nguyên lý không kinh doanh chênh lệch giá, tổng tỷ suất tích lũy của hai năm đầu tư liên tục phải bằng tích lũy năm thứ nhất nhân với tích lũy kỳ hạn năm thứ hai:
> 
> $$
> (1 + s_2)^2 = (1 + s_1)^1 \cdot (1 + f_{1,2})^1
> $$
> 
> Thay các giá trị đã biết:
> 
> $$
> (1 + 0,035)^2 = (1 + 0,030) \cdot (1 + f_{1,2})
> $$
> 
> $$
> 1,071225 = 1,030 \cdot (1 + f_{1,2})
> $$
> 
> Rút ra giá trị lãi suất kỳ hạn:
> 
> $$
> 1 + f_{1,2} = \frac{1,071225}{1,030} \approx 1,040024 \implies f_{1,2} \approx 4,00\%/\text{năm}
> $$


# Động lực học Lạm phát, Thuế và Lãi suất Thực

> [!def] Lãi suất danh nghĩa và Lãi suất thực
> Lãi suất danh nghĩa $i$ đo lường tốc độ gia tăng thuần túy về mặt số lượng của đơn vị tiền tệ. Lãi suất thực $i_r$ đo lường tốc độ gia tăng về khối lượng vật chất thực tế, phản ánh sự thay đổi sức mua sau khi hiệu chỉnh theo tỷ lệ lạm phát $\pi$.

> [!thm] Đồng nhất thức Fisher và Méo mó hệ thống do Thuế
> Quan hệ cấu trúc giữa lãi suất danh nghĩa, lãi suất thực và tỷ lệ lạm phát kỳ vọng $\pi^e$ tuân theo phương trình hoàn giá kép:
> 
> $$
> 1 + i = (1 + i_r)(1 + \pi^e)
> $$
> 
> Khi hệ thống thuế thu nhập áp dụng mức thuế suất biên $\tau$ trên toàn bộ phần lợi nhuận danh nghĩa, lãi suất thực sau thuế $i_{r,at}$ bị suy giảm theo cấu trúc:
> 
> $$
> i_{r,at} = i_r(1 - \tau) - \tau \cdot \pi^e
> $$

> [!prf]
> Thuế được tính trên lãi suất danh nghĩa, do đó lợi suất danh nghĩa sau thuế là $i_{at} = i(1 - \tau)$.
> 
> Lãi suất thực sau thuế là sức mua còn lại: $i_{r,at} = i_{at} - \pi^e = i(1 - \tau) - \pi^e$.
> 
> Sử dụng xấp xỉ tuyến tính Fisher $i \approx i_r + \pi^e$, ta thế vào biểu thức:
> 
> $$
> i_{r,at} = (i_r + \pi^e)(1 - \tau) - \pi^e = i_r(1 - \tau) - \tau \cdot \pi^e
> $$

> [!thm] Cân bằng Lợi suất Sau thuế và Thuế suất Biên Hòa vốn
> Cho tài sản chịu thuế có lãi suất danh nghĩa $i_{\text{taxable}}$ và tài sản được miễn thuế có lãi suất $i_{\text{tax-free}}$.
> 
> 1. Lợi suất danh nghĩa sau thuế của tài sản chịu thuế:
> 
> $$
> i_{\text{after-tax}} = i_{\text{taxable}}(1 - \tau)
> $$
> 
> 2. Mức thuế suất biên hòa vốn $\tau^*$ khiến nhà đầu tư bàng quan giữa hai tài sản ($i_{\text{after-tax}} = i_{\text{tax-free}}$):
> 
> $$
> \tau^* = 1 - \frac{i_{\text{tax-free}}}{i_{\text{taxable}}}
> $$

> [!exm] Cân bằng Lợi suất Sau thuế và Thuế suất Hòa vốn
> Một trái phiếu doanh nghiệp chịu thuế có lợi suất $i_{\text{taxable}} = 6,25\%$/năm và một trái phiếu chính quyền địa phương được miễn thuế thu nhập có lợi suất $i_{\text{tax-free}} = 4,25\%$/năm. Xác định thuế suất biên hòa vốn $\tau^*$ và đưa ra quyết định đầu tư cho một cá nhân có thuế suất biên $\tau = 35\%$.
> 
> Giải pháp:
> 
> 1. Xác định thuế suất hòa vốn $\tau^*$:
> 
> $$
> \tau^* = 1 - \frac{i_{\text{tax-free}}}{i_{\text{taxable}}} = 1 - \frac{4,25\%}{6,25\%} = 1 - 0,68 = 32\%
> $$
> 
> 2. Đánh giá quyết định đầu tư:
> 
> Với thuế suất thực tế của nhà đầu tư $\tau = 35\%$:
> - Lợi suất sau thuế của trái phiếu doanh nghiệp:
> 
> $$
> i_{\text{after-tax}} = 6,25\% \times (1 - 0,35) = 4,0625\%
> $$
> 
> - So sánh: $i_{\text{tax-free}} = 4,25\% > 4,0625\%$.
> 
> Vì thuế suất thực tế cao hơn thuế suất biên hòa vốn ($35\% > 32\%$), nhà đầu tư nên lựa chọn trái phiếu miễn thuế để tối ưu hóa lợi nhuận thực nhận.

> [!exm] Bài toán cấu trúc dòng tiền bảo toàn sức mua
> Cân nhắc một tài sản tài chính có tính năng tự động điều chỉnh giá trị vốn gốc $K_t$ liên tục theo chỉ số giá để chống lạm phát: $K_t = K_0 \times \frac{CPI_t}{CPI_0}$. Nếu tỷ lệ lạm phát chu kỳ 1 là $5\%$ và vốn gốc ban đầu là $1.000$, thì vốn gốc được điều chỉnh thành $1.050$. Bất kỳ dòng tiền phái sinh nào tính trên vốn gốc này đều tăng trưởng tỷ lệ thuận với lạm phát, do đó tỷ suất sinh lời tính toán từ tài sản này phản ánh thuần túy lãi suất thực trên thị trường.


# Giải tích Rủi ro, Độ nhạy cảm và Miễn dịch Hệ thống

Tỷ suất sinh lời trong một chu kỳ nắm giữ từ $t$ đến $t+1$ phản ánh tổng hợp thu nhập từ dòng tiền phát sinh $A$ và biến động giá trị thị trường:

$$
R = \frac{A + (P_{t+1} - P_t)}{P_t} = i_c + g
$$

trong đó $i_c = \frac{A}{P_t}$ là lợi suất thu nhập và $g = \frac{P_{t+1} - P_t}{P_t}$ là tỷ lệ biến động giá trị vốn. Tỷ suất sinh lời thực nhận $R$ chỉ bằng đúng YTM ban đầu khi và chỉ khi kỳ hạn nắm giữ trùng khớp hoàn toàn với thời điểm kết thúc hợp đồng.

> [!thm] Lợi suất Kép Thực nhận trước Rủi ro Tái đầu tư (RCY)
> Cho tài sản mua tại giá $P_0$, kỳ hạn $n$ kỳ, sinh dòng tiền định kỳ $C$ và hoàn vốn $K$ khi đáo hạn. Nếu các dòng tiền định kỳ được tái đầu tư tại lãi suất $r_{\text{reinvest}}$ thay vì YTM ban đầu:
> 
> 1. Tổng giá trị tài sản thu được tại thời điểm đáo hạn $n$:
> 
> $$
> FV_{\text{total}} = C \cdot s_{\overline{n}|r_{\text{reinvest}}} + K = C \cdot \left[ \frac{(1 + r_{\text{reinvest}})^n - 1}{r_{\text{reinvest}}} \right] + K
> $$
> 
> 2. Lợi suất kép thực nhận (Realized Compound Yield - RCY) là nghiệm duy nhất của phương trình tích lũy:
> 
> $$
> P_0 (1 + RCY)^n = FV_{\text{total}} \iff RCY = \left( \frac{FV_{\text{total}}}{P_0} \right)^{1/n} - 1
> $$

> [!exm] Định lượng Rủi ro Tái đầu tư qua Lợi suất Kép Thực nhận
> Nhà đầu tư mua trái phiếu 3 năm mệnh giá $1.000$, trả coupon $10\%$/năm ($C = 100$) ngang mệnh giá $P_0 = 1.000$ (tương ứng $YTM = 10\%$). Sau khi mua, lãi suất tái đầu tư trên thị trường giảm xuống còn $r_{\text{reinvest}} = 6\%$/năm trong suốt vòng đời trái phiếu. Hãy xác định tổng tài sản thu được và lợi suất kép thực nhận (RCY).
> 
> Giải pháp:
> 
> 1. Tích lũy các dòng coupon sau 3 năm tại lãi suất $6\%$:
> 
> $$
> FV_{\text{coupon}} = 100 \cdot s_{\overline{3}|6\%} = 100 \cdot \left[ \frac{(1,06)^3 - 1}{0,06} \right] = 100 \times 3,1836 = 318,36
> $$
> 
> 2. Tổng giá trị tài sản thu hồi khi đáo hạn gồm coupon tái đầu tư và mệnh giá:
> 
> $$
> FV_{\text{total}} = 318,36 + 1.000 = 1.318,36
> $$
> 
> 3. Tính lợi suất kép thực nhận RCY:
> 
> $$
> 1.000 \cdot (1 + RCY)^3 = 1.318,36 \implies 1 + RCY = \left( \frac{1.318,36}{1.000} \right)^{1/3} \approx 1,09647
> $$
> 
> $$
> RCY \approx 9,65\%/\text{năm}
> $$
> 
> Do lãi suất tái đầu tư giảm xuống dưới mức YTM ban đầu ($6\% < 10\%$), mức sinh lời thực nhận của nhà đầu tư bị suy giảm 35 điểm cơ bản so với kỳ vọng ban đầu.

> [!def] Thời lượng Macaulay và Độ lồi
> Thời lượng Macaulay (ký hiệu $DUR$) là mô men bậc nhất chuẩn hóa của phân phối dòng tiền, đo lường thời gian bình quân gia quyền để thu hồi giá trị hiện tại của tài sản:
> 
> $$
> DUR = \frac{1}{P} \sum_{t=1}^n t \cdot \frac{CF_t}{(1+i)^t}
> $$
> 
> Độ lồi $CX$ là đạo hàm bậc hai chuẩn hóa của hàm giá theo tỷ suất chiết khấu, phản ánh độ cong phi tuyến:
> 
> $$
> CX = \frac{1}{P} \frac{d^2P}{di^2} = \frac{1}{P(1+i)^2} \sum_{t=1}^n \frac{t(t+1)CF_t}{(1+i)^t}
> $$

> [!thm] Tính chất Tuyến tính của Thời lượng Macaulay Danh mục
> Cho danh mục gồm $k$ tài sản có giá trị thị trường thành phần $V_1, V_2, \dots, V_k$ và thời lượng tương ứng $DUR_1, DUR_2, \dots, DUR_k$. Tổng giá trị thị trường danh mục là $V_p = \sum_{j=1}^k V_j$.
> 
> Thời lượng Macaulay của danh mục bằng tổng bình quân gia quyền theo thị giá của từng tài sản thành phần:
> 
> $$
> DUR_p = \sum_{j=1}^k w_j \cdot DUR_j \quad \text{với } w_j = \frac{V_j}{V_p}
> $$

> [!prf]
> Do tính chất cộng của giá trị thị trường, giá trị danh mục tại mỗi lãi suất $i$ là $V_p(i) = \sum_{j=1}^k V_j(i)$.
> 
> Lấy đạo hàm bậc nhất hai vế theo biến lãi suất $i$:
> 
> $$
> \frac{dV_p}{di} = \sum_{j=1}^k \frac{dV_j}{di}
> $$
> 
> Mặt khác, từ quan hệ vi phân của thời lượng Macaulay: $\frac{dV_j}{di} = -\frac{V_j \cdot DUR_j}{1+i}$ và $\frac{dV_p}{di} = -\frac{V_p \cdot DUR_p}{1+i}$. Thay vào đẳng thức trên:
> 
> $$
> -\frac{V_p \cdot DUR_p}{1+i} = -\sum_{j=1}^k \frac{V_j \cdot DUR_j}{1+i}
> $$
> 
> Nhân cả hai vế với $-\frac{1+i}{V_p}$:
> 
> $$
> DUR_p = \sum_{j=1}^k \left( \frac{V_j}{V_p} \right) \cdot DUR_j = \sum_{j=1}^k w_j \cdot DUR_j
> $$

> [!exm] Xác định Thời lượng Macaulay của Danh mục Đầu tư
> Một định chế tài chính nắm giữ danh mục gồm hai khoản đầu tư có tổng giá trị hiện tại $V_p = 70$ triệu:
> - Tài sản 1: Giá trị hiện tại $V_1 = 30$ triệu, là công cụ chiết khấu thuần túy (zero-coupon) kỳ hạn 3 năm ($DUR_1 = 3,0$ năm).
> - Tài sản 2: Giá trị hiện tại $V_2 = 40$ triệu, là công cụ nợ kỳ hạn 3 năm có dòng tiền định kỳ với thời lượng $DUR_2 = 2,76$ năm.
> Hãy tính thời lượng Macaulay của toàn bộ danh mục $DUR_p$.
> 
> Giải pháp:
> 
> 1. Xác định tỷ trọng vốn thị trường của từng tài sản:
> 
> $$
> w_1 = \frac{V_1}{V_p} = \frac{30}{70} = \frac{3}{7} \approx 0,4286
> $$
> 
> $$
> w_2 = \frac{V_2}{V_p} = \frac{40}{70} = \frac{4}{7} \approx 0,5714
> $$
> 
> 2. Áp dụng công thức bình quân gia quyền:
> 
> $$
> DUR_p = w_1 \cdot DUR_1 + w_2 \cdot DUR_2 = \left( \frac{3}{7} \times 3,0 \right) + \left( \frac{4}{7} \times 2,76 \right)
> $$
> 
> $$
> DUR_p \approx 1,2857 + 1,5771 = 2,863 \text{ năm}
> $$

> [!thm] Vi phân xấp xỉ biến động giá trị tài sản
> Sử dụng chuỗi Taylor bậc hai, biến động phần trăm giá trị của một chuỗi dòng tiền trước một cú sốc tỷ suất $\Delta i$ được định lượng bằng thời lượng hiệu chỉnh $DUR^* = \frac{DUR}{1+i}$ và độ lồi $CX$:
> 
> $$
> \frac{\Delta P}{P} \approx -DUR^* \cdot \Delta i + \frac{1}{2} CX (\Delta i)^2
> $$

> [!prf]
> Bắt đầu từ hàm hiện giá $P(i) = \sum_{t=1}^n CF_t (1+i)^{-t}$.
> 
> Lấy đạo hàm bậc nhất theo biến $i$:
> 
> $$
> \frac{dP}{di} = \sum_{t=1}^n (-t) CF_t (1+i)^{-t-1} = -\frac{1}{1+i} \sum_{t=1}^n t \frac{CF_t}{(1+i)^t} = -\frac{P \cdot DUR}{1+i}
> $$
> 
> Do đó $\frac{1}{P}\frac{dP}{di} = -DUR^*$.
> 
> Khai triển Taylor cho $\Delta P$:
> 
> $$
> \Delta P \approx \frac{dP}{di}\Delta i + \frac{1}{2}\frac{d^2P}{di^2}(\Delta i)^2
> $$
> 
> Chia toàn bộ cho $P$, ta thu được công thức xấp xỉ hoàn thiện:
> 
> $$
> \frac{\Delta P}{P} \approx -DUR^* \cdot \Delta i + \frac{1}{2} CX (\Delta i)^2
> $$

> [!exm] Bài toán Miễn dịch cấu trúc Tài sản - Nợ
> Để cô lập giá trị thặng dư ròng của một tổ chức trước các cú sốc lãi suất song song, điều kiện tối ưu là cân bằng mô men bậc nhất của dòng tiền giữa hai phía bảng cân đối:
> 
> $$
> DUR_{\text{Tài sản}} = DUR_{\text{Nợ phải trả}}
> $$
> 
> Giả sử một cấu trúc có tổng giá trị hiện tại của tài sản sinh lời là $100.000.000$ với thời lượng $5,0$ chu kỳ, và nợ phải trả là $90.000.000$ với thời lượng $2,0$ chu kỳ. Khe hở thời lượng (Duration Gap) được đo lường bằng:
> 
> $$
> \text{Gap} = 5,0 - \left( \frac{90.000.000}{100.000.000} \right) \times 2,0 = 3,2 \text{ chu kỳ}
> $$
> 
> Khe hở dương chỉ ra rằng hệ thống đang ở trạng thái nhạy cảm thuận chiều với rủi ro suy giảm lãi suất; một cú sốc tăng lãi suất sẽ phá hủy phần lớn giá trị thặng dư ròng.