
# Nền tảng Giải tích về Giá trị thời gian của tiền và Hàm tích lũy

Giá trị thời gian của tiền phản ánh nguyên lý một đơn vị giá trị trong hiện tại luôn lớn hơn chính nó trong tương lai do chi phí cơ hội của vốn, tác động bào mòn của lạm phát và rủi ro thanh khoản. Mối liên hệ cốt lõi là dòng tiền phát sinh tại thời điểm càng xa thì giá trị chiết khấu quy đổi về hiện tại càng nhỏ.

Thị trường sử dụng các quy tắc tính ngày để xác định phân số thời gian $t = \frac{\text{Số ngày tính lãi}}{\text{Số ngày trong một năm chuẩn}}$:
1. Quy tắc Actual/Actual: Chia số ngày lịch thực tế cho số ngày thực tế của năm.
2. Quy tắc 30/360: Giả định mỗi tháng có 30 ngày và một năm có 360 ngày.
3. Quy tắc Actual/360: Chia số ngày lịch thực tế cho cơ sở năm quy ước 360 ngày.

> [!def] Hàm số lượng và Hàm tích lũy
> Cho khoản vốn gốc ban đầu $k > 0$ đầu tư tại thời điểm $t = 0$. Hàm số lượng $A(t)$ xác định tổng giá trị thị trường của khoản đầu tư tích lũy đến thời điểm $t \ge 0$, thỏa mãn điều kiện biên $A(0) = k$.
> Hàm tích lũy $a(t)$ ghi nhận giá trị tích lũy tại thời điểm $t \ge 0$ của đúng một đơn vị tiền tệ được đầu tư tại gốc thời gian $t = 0$. Quan hệ đại số được định nghĩa bởi:
> $$a(t) = \frac{A(t)}{A(0)} = \frac{A(t)}{k}$$
> Các tính chất giải tích cơ bản của $a(t)$:
> 1. Chuẩn hóa tại gốc tọa độ: $a(0) = 1$.
> 2. Tính đơn điệu: $a(t)$ không giảm theo thời gian $t \ge 0$ trong môi trường lãi suất không âm.
> 3. Tính liên tục: $a(t)$ liên tục trên khoảng $[0, \infty)$ nếu quá trình tích lũy diễn ra liên tục.

> [!def] Lãi suất thực tế
> Lãi suất thực tế của kỳ thứ $n$, ký hiệu là $i_n$, là tỷ số giữa lượng giá trị thặng dư thu được trong kỳ thứ $n$ trên tổng giá trị tích lũy hiện diện ở đầu kỳ đó (thời điểm $n-1$):
> $$i_n = \frac{A(n) - A(n-1)}{A(n-1)} = \frac{a(n) - a(n-1)}{a(n-1)}$$

> [!thm] Đặc tính của Lãi suất đơn và Lãi suất kép
> Dưới cơ chế tích lũy tuyến tính (lãi suất đơn) $a(t) = 1 + it$ với $i > 0$, lãi suất thực tế $i_n$ giảm nghiêm ngặt theo chỉ số kỳ hạn $n$ và hội tụ về 0 khi thời gian tiến ra vô cùng:
> $$i_n = \frac{i}{1 + i(n-1)}, \quad \lim_{n \to \infty} i_n = 0$$
> Ngược lại, dưới cơ chế tích lũy hàm mũ (lãi suất kép) $a(t) = (1+i)^t$, lãi suất thực tế $i_n$ luôn là một hằng số bất biến đối với mọi kỳ hạn $n \ge 1$:
> $$i_n = i$$

> [!prf]
> 4. Đối với cơ chế lãi suất đơn $a(t) = 1 + it$:
> $$i_n = \frac{a(n) - a(n-1)}{a(n-1)} = \frac{(1 + in) - (1 + i(n-1))}{1 + i(n-1)} = \frac{i}{1 + i(n-1)}$$
> Vì $i > 0$, mẫu số $1 + i(n-1)$ tăng nghiêm ngặt theo $n$, suy ra $\lim_{n \to \infty} i_n = 0$.
> 5. Đối với cơ chế lãi suất kép $a(t) = (1+i)^t$:
> $$i_n = \frac{(1+i)^n - (1+i)^{n-1}}{(1+i)^{n-1}} = \frac{(1+i)^{n-1} [ (1+i) - 1 ]}{(1+i)^{n-1}} = i$$
> Sức sinh lời tương đối của cơ chế lãi kép hoàn toàn không suy giảm theo thời gian.

> [!thm] Tương quan thứ tự giữa quỹ đạo tích lũy đơn và kép
> Với mọi mức lãi suất $i > 0$ và thời gian $t \ge 0$, tương quan thứ tự giữa $a_{\text{kép}}(t) = (1+i)^t$ và $a_{\text{đơn}}(t) = 1 + it$ thỏa mãn:
> 6. $(1+i)^t < 1+it$ khi $0 < t < 1$.
> 7. $(1+i)^t = 1+it$ khi $t = 0$ hoặc $t = 1$.
> 8. $(1+i)^t > 1+it$ khi $t > 1$.

> [!prf]
> Xét hàm hiệu số $f(t) = (1+i)^t - (1+it)$ trên $[0, \infty)$ với $i > 0$. Ta có $f(0) = f(1) = 0$.
> Đạo hàm cấp hai của hàm mũ:
> $$\frac{d^2}{dt^2}(1+i)^t = [\ln(1+i)]^2 (1+i)^t > 0 \quad \forall t \ge 0$$
> Hàm $(1+i)^t$ lồi nghiêm ngặt trên $[0, \infty)$. Do đó đường thẳng cát tuyến $y = 1+it$ nối hai điểm $(0, 1)$ và $(1, 1+i)$ nằm phía trên đồ thị hàm mũ trên khoảng $(0, 1)$ và nằm phía dưới đồ thị hàm mũ khi $t > 1$. Suy ra $(1+i)^t < 1+it$ với $t \in (0, 1)$ và $(1+i)^t > 1+it$ với $t > 1$.

> [!thm] Định lý khôi phục hàm tích lũy từ lực lãi suất
> Cho hàm lực lãi suất $\delta_t$ khả tích trên đoạn $[0, t]$, hàm tích lũy tổng quát $a(t)$ được khôi phục duy nhất bởi công thức hàm mũ tích phân:
> $$a(t) = \exp\left(\int_0^t \delta_r \, dr\right)$$
> Trường hợp lực lãi suất là hằng số $\delta_t = \delta$, ta có $a(t) = e^{\delta t} = (1+i)^t \iff \delta = \ln(1+i)$.

> [!prf]
> Từ định nghĩa giải tích của lực lãi suất $\delta_r = \frac{a'(r)}{a(r)} = \frac{d}{dr}\ln a(r)$.
> Lấy tích phân định hướng hai vế từ $0$ đến $t$:
> $$\int_0^t \delta_r \, dr = \int_0^t \frac{d}{dr}\ln a(r) \, dr = \ln a(t) - \ln a(0)$$
> Vì $a(0) = 1$ nên $\ln a(0) = 0$. Áp dụng hàm số mũ cơ số tự nhiên $e$ cho hai vế, thu được $a(t) = \exp\left(\int_0^t \delta_r \, dr\right)$.

> [!exm] Bài toán xác định giá trị tích lũy với lực lãi suất biến thiên
> Một tài sản được tích lũy với lực lãi suất biến thiên liên tục $\delta_t = \frac{0,05}{1 + 0,05t}$. Nếu quy mô vốn ban đầu là $2.000$, tính quy mô tài sản đạt được sau $t = 10$ chu kỳ.
> Giải pháp:
> Tích phân hàm lực lãi suất từ $0$ đến $10$:
> $$\int_0^{10} \frac{0,05}{1 + 0,05r} \, dr = \left[ \ln(1 + 0,05r) \right]_0^{10} = \ln(1,5)$$
> Khôi phục hàm tích lũy: $a(10) = \exp(\ln(1,5)) = 1,5$.
> Quy mô tài sản tại thời điểm $10$ là $A(10) = 2.000 \times 1,5 = 3.000$.

# Mô hình Dòng tiền Cốt lõi và Hệ thống Thước đo Lợi suất

Mọi tài sản hay hợp đồng tài chính đều có thể trừu tượng hóa thành một chuỗi dòng tiền phát sinh $CF_t$ tại các mốc thời gian $t = 1, 2, \dots, n$ và giá trị thị trường hiện hành $P$.

> [!def] Hệ thống Khái niệm Thước đo Lợi suất
> 1. Tỷ lệ lãi danh nghĩa cố định định kỳ ($r$ hoặc $c$): Tỷ lệ phần trăm tính trên một quy mô vốn danh nghĩa $F$ để tạo ra dòng tiền định kỳ $A = F \cdot r$.
> 2. Lợi suất hiện hành ($i_c$ - Current Yield): Tỷ số giữa dòng tiền định kỳ hàng năm $A$ trên thị giá hiện tại $P$ của tài sản:
> $$i_c = \frac{A}{P}$$
> Thước đo này phản ánh hiệu suất thu nhập dòng tiền trên thị giá nhưng bỏ qua phần chênh lệch vốn giữa giá trị thanh toán cuối kỳ và giá mua hiện tại.
> 3. Lợi suất đến hạn ($i$ hoặc $YTM$ - Yield to Maturity): Nghiệm lãi suất chiết khấu duy nhất làm cân bằng giá trị thị trường hiện hành $P$ của tài sản với tổng giá trị hiện tại của toàn bộ chuỗi dòng tiền tương lai:
> $$P = \sum_{t=1}^n \frac{CF_t}{(1+i)^t}$$
> YTM đại diện cho tỷ suất hoàn vốn nội bộ (IRR). Mức sinh lời thực tế của nhà đầu tư chỉ bằng đúng YTM nếu tài sản được nắm giữ đến khi đáo hạn và toàn bộ dòng tiền trung gian đều được tái đầu tư với lãi suất bằng chính YTM.

> [!prp] Các tính chất tiệm cận và biến thiên của Lợi suất hiện hành so với YTM
> Cho một tài sản có dòng tiền định kỳ $A = F \cdot r$, dòng thanh toán kết thúc kỳ $n$ là $F$, và đang giao dịch tại mức thị giá $P$. Khi đó lợi suất hiện hành $i_c = \frac{A}{P}$ và lợi suất đến hạn $i$ (YTM) thỏa mãn hai tính chất:
> 4. Tính xấp xỉ tiệm cận: $i_c$ là xấp xỉ tốt cho $i$ khi thị giá gần ngang bằng mệnh giá danh nghĩa ($P \approx F$) hoặc khi kỳ hạn của tài sản rất dài ($n \to \infty$). Cụ thể:
> $$\lim_{n \to \infty} i = i_c \quad \text{và} \quad \left. i \right|_{P = F} = i_c = r$$
> 5. Tính đồng biến (cùng chiều biến thiên): Sự thay đổi của lợi suất hiện hành $i_c$ luôn cùng chiều với sự thay đổi của lợi suất đến hạn $i$:
> $$\frac{di_c}{di} > 0$$

> [!prf]
> 6. Chứng minh tính xấp xỉ tiệm cận:
> Phương trình định giá của tài sản theo YTM $i$:
> $$P = \sum_{t=1}^n \frac{A}{(1+i)^t} + \frac{F}{(1+i)^n} = A \cdot \left[ \frac{1 - (1+i)^{-n}}{i} \right] + \frac{F}{(1+i)^n}$$
> Nhân cả hai vế với $i$ và biến đổi đại số:
> $$P \cdot i = A \left[ 1 - (1+i)^{-n} \right] + \frac{F \cdot i}{(1+i)^n} = A + \frac{F \cdot i - A}{(1+i)^n}$$
> Chia cả hai vế cho $P$ và thay định nghĩa $i_c = \frac{A}{P}$:
> $$i = \frac{A}{P} + \frac{F \cdot i - A}{P(1+i)^n} = i_c + \frac{i - \frac{A}{F}}{\frac{P}{F}(1+i)^n} = i_c + \frac{i - r}{\frac{P}{F}(1+i)^n}$$
> Từ hệ thức sai số tuyệt đối $|i - i_c| = \frac{|i - r|}{\frac{P}{F}(1+i)^n}$:
> - Khi $P = F$: Ta có $i = r$, tử số triệt tiêu: $|i - i_c| = 0 \implies i = i_c = r$. Khi $P \approx F$, sai số $|i - i_c| \approx 0$.
> - Khi $n \to \infty$: Với $i > 0$, mẫu số $(1+i)^n \to \infty$, dẫn đến $\lim_{n \to \infty} |i - i_c| = 0 \implies \lim_{n \to \infty} i = i_c$.
> 2. Chứng minh tính đồng biến ($\frac{di_c}{di} > 0$):
> Lấy đạo hàm bậc nhất của thị giá $P$ theo $i$:
> $$\frac{dP}{di} = - \sum_{t=1}^n t \cdot CF_t (1+i)^{-t-1} < 0$$
> Thị giá $P$ nghịch biến nghiêm ngặt theo $i$. Từ định nghĩa $i_c = \frac{A}{P}$, lấy đạo hàm của $i_c$ theo biến $P$:
> $$\frac{di_c}{dP} = -\frac{A}{P^2} < 0$$
> Áp dụng quy tắc đạo hàm hàm hợp:
> $$\frac{di_c}{di} = \frac{di_c}{dP} \cdot \frac{dP}{di} = \left( -\frac{A}{P^2} \right) \cdot \frac{dP}{di} > 0$$
> Tích của hai đại lượng âm là một số dương, chứng minh $i_c$ luôn đồng biến theo $i$.

> [!exm] Bài toán thẩm định hợp đồng dòng tiền cố định
> Một chủ thể kinh tế cân nhắc việc nộp ngay khoản vốn $P = 100.000$ để đổi lấy một chuỗi dòng tiền cố định $12.000$ vào cuối mỗi kỳ, liên tục trong $12$ kỳ. Nếu chi phí cơ hội của vốn trên thị trường là $6\%$ mỗi kỳ, hãy thẩm định hợp đồng dựa trên tỷ suất hoàn vốn nội bộ.
> Giải pháp:
> Thiết lập phương trình cân bằng hiện giá để tìm nghiệm $i^*$:
> $$100.000 = 12.000 \cdot \left[ \frac{1 - (1 + i^*)^{-12}}{i^*} \right]$$
> Bằng phương pháp nội suy, ta xác định được nghiệm $i^* \approx 6,103\%$. Vì tỷ suất sinh lời nội bộ cao hơn chi phí cơ hội của thị trường ($6,103\% > 6,00\%$), hợp đồng mang lại thặng dư kinh tế dương.

# Mô hình Định giá Dòng tiền Tổng quát: Hiện giá và Tương lai

Mọi cấu trúc tài chính quy chuẩn đều có thể được mô hình hóa thành tổ hợp của một dòng tiền đều định kỳ $A$ và một dòng tiền đơn cuối kỳ $K$.

> [!def] Giá trị hiện tại và Giá trị tương lai của Niên kim
> Cho chuỗi $n$ khoản thanh toán bằng nhau, mỗi khoản trị giá $A$, với tỷ suất lãi suất mỗi kỳ là $i > 0$.
> 1. Hiện giá niên kim thông thường (thanh toán cuối kỳ):
> $$a_{\overline{n}|i} = \sum_{t=1}^n (1+i)^{-t} = \frac{1 - (1+i)^{-n}}{i}$$
> 2. Giá trị tương lai niên kim thông thường (tích lũy đến thời điểm $n$):
> $$s_{\overline{n}|i} = \sum_{t=0}^{n-1} (1+i)^t = a_{\overline{n}|i} \cdot (1+i)^n = \frac{(1+i)^n - 1}{i}$$
> 3. Dạng niên kim đầu kỳ (Annuity-due): Khi các khoản thanh toán phát sinh tại đầu mỗi chu kỳ, hiện giá và tương lai giá được khuếch đại bởi hệ số tích lũy một kỳ:
> $$\ddot{a}_{\overline{n}|i} = (1+i) \cdot a_{\overline{n}|i}, \quad \ddot{s}_{\overline{n}|i} = (1+i) \cdot s_{\overline{n}|i}$$

> [!thm] Phương trình Dòng tiền Tổng quát 
> Đối với cấu trúc tài chính gồm dòng tiền định kỳ $A$ và dòng tiền đơn $K$ tại kỳ $n$:
> 4. Phương trình Hiện giá Tổng quát ($PV$):
> $$PV = A \cdot a_{\overline{n}|i} + K \cdot (1+i)^{-n} = A \cdot \left[ \frac{1 - (1+i)^{-n}}{i} \right] + K \cdot (1+i)^{-n}$$
> 5. Phương trình Tương lai Tổng quát ($FV$):
> $$FV = PV \cdot (1+i)^n = A \cdot s_{\overline{n}|i} + K = A \cdot \left[ \frac{(1+i)^n - 1}{i} \right] + K$$
> 6. Các dạng suy biến cơ bản:
> - Cấu trúc chiết khấu thuần túy: $A = 0 \implies PV = K(1+i)^{-n}, \; FV = K$.
> - Cấu trúc hoàn trả dần (Niên kim thuần túy): $K = 0 \implies PV = A \cdot a_{\overline{n}|i}, \; FV = A \cdot s_{\overline{n}|i}$.
> - Cấu trúc dòng tiền vô hạn: Khi $n \to \infty$, $PV = \frac{A}{i}$.

> [!prf]
> Xét phương trình Hiện giá:
> $$PV = \sum_{t=1}^n \frac{A}{(1+i)^t} + \frac{K}{(1+i)^n}$$
> Đặt $v = \frac{1}{1+i}$. Chuỗi niên kim là tổng cấp số nhân với số hạng đầu $u_1 = v$, công bội $q = v$:
> $$\sum_{t=1}^n v^t = v \cdot \frac{1 - v^n}{1 - v} = \frac{1}{1+i} \cdot \frac{1 - (1+i)^{-n}}{\frac{i}{1+i}} = \frac{1 - (1+i)^{-n}}{i} = a_{\overline{n}|i}$$
> Nhân toàn bộ biểu thức Hiện giá với $(1+i)^n$, ta thu được phương trình Tương lai:
> $$FV = PV(1+i)^n = A \cdot \left[ \frac{1 - (1+i)^{-n}}{i} \right](1+i)^n + K = A \cdot \left[ \frac{(1+i)^n - 1}{i} \right] + K = A \cdot s_{\overline{n}|i} + K$$
> Khi $n \to \infty$, vì $i > 0$ nên $(1+i)^{-n} \to 0$, suy ra $PV = A \cdot \frac{1 - 0}{i} + K \cdot 0 = \frac{A}{i}$.

> [!cor] Dạng chuyển hóa qua Tỷ số Lãi suất Định kỳ
> Khi dòng tiền định kỳ $A$ được xác định theo tỷ lệ $r$ trên quy mô danh nghĩa $F$ ($A = F \cdot r$), phương trình hiện giá có thể viết lại theo tỷ số $\frac{r}{i}$:
> $$PV = F \cdot \left(\frac{r}{i}\right) \cdot [1 - (1+i)^{-n}] + K \cdot (1+i)^{-n}$$
> Biểu thức này cô lập tỷ số $\frac{r}{i}$, cho phép định giá trực tiếp ngay cả khi chưa xác định riêng rẽ $r$ và $i$.

> [!thm] Mô hình Dòng tiền Tăng trưởng Hình học
> Nếu dòng tiền không cố định mà tăng trưởng với tốc độ không đổi $g$ mỗi chu kỳ, tức $CF_t = A_1(1+g)^{t-1}$, với $i \ne g$:
> 1. Hiện giá chuỗi hữu hạn $n$ kỳ:
> $$PV = \sum_{t=1}^n \frac{A_1(1+g)^{t-1}}{(1+i)^t} = \frac{A_1}{i - g} \left[ 1 - \left(\frac{1+g}{1+i}\right)^n \right]$$
> 2. Giới hạn chuỗi vô hạn ($n \to \infty$) khi $i > g$:
> $$PV = \lim_{n \to \infty} \frac{A_1}{i - g} \left[ 1 - \left(\frac{1+g}{1+i}\right)^n \right] = \frac{A_1}{i - g}$$

> [!prf]
> Đặt tỷ số $x = \frac{1+g}{1+i}$. Khi đó:
> $$PV = \frac{A_1}{1+g} \sum_{t=1}^n x^t = \frac{A_1}{1+g} \cdot x \cdot \frac{1 - x^n}{1 - x}$$
> Thay $x = \frac{1+g}{1+i}$ vào biểu thức:
> $$1 - x = 1 - \frac{1+g}{1+i} = \frac{i - g}{1+i}$$
> Rút gọn biểu thức ta thu được $PV = \frac{A_1}{i - g} \left[ 1 - \left(\frac{1+g}{1+i}\right)^n \right]$.
> Khi $i > g$, ta có $0 < x < 1$. Do đó khi $n \to \infty$, $x^n \to 0$, kéo theo nghiệm đóng $PV = \frac{A_1}{i - g}$.

> [!exm] Bài toán tích lũy theo Niên kim Tương lai
> Một chủ thể cần tích lũy một lượng vốn mục tiêu $FV = 20.000$ sau $n = 8$ kỳ với tỷ suất sinh lời $i = 6\%$ mỗi kỳ thông qua các khoản trích lập định kỳ bằng nhau $A$ vào cuối mỗi kỳ.
> Giải pháp:
> Áp dụng phương trình tương lai với $K = 0$:
> $$FV = A \cdot s_{\overline{8}|6\%} \implies A = \frac{FV}{s_{\overline{8}|6\%}} = \frac{20.000 \times 0,06}{(1,06)^8 - 1} \approx 2.020,72$$

# Cơ sở Chiết khấu Tuyến tính và Hiện tượng Lãi suất Âm

> [!def] Lợi suất trên cơ sở chiết khấu
> Trong các cấu trúc tài chính ngắn hạn, thị trường thường sử dụng hệ thống chiết khấu tuyến tính $i_{db}$ thay vì hoàn giá kép:
> $$i_{db} = \frac{K - P}{K} \times \frac{\text{Cơ sở ngày quy ước}}{D}$$
> trong đó $K$ là giá trị thanh toán cuối kỳ, $P$ là giá giao dịch hiện tại, và $D$ là số ngày thực tế. Đại lượng này dùng giá trị tương lai $K$ làm mẫu số thay vì vốn đầu tư hiện tại $P$, đồng thời áp dụng tích lũy tuyến tính.

> [!thm] Phép chuyển đổi hệ tọa độ lợi suất
> Tỷ suất chiết khấu tuyến tính $i_{db}$ luôn đánh giá thấp một cách có hệ thống mức sinh lời hiệu dụng $i_{ytm}$. Hàm chuyển đổi chính xác giữa hai hệ đo lường là:
> $$i_{ytm} = \frac{\text{Cơ sở ngày chuẩn} \cdot i_{db}}{\text{Cơ sở ngày quy ước} - (i_{db} \cdot D)}$$

> [!prf]
> Xuất phát từ định nghĩa mức sinh lời trên vốn thực tế:
> $$i_{ytm} = \frac{K - P}{P} \times \frac{\text{Cơ sở ngày chuẩn}}{D}$$
> Từ công thức của $i_{db}$, ta có khoản thặng dư $K - P = K \cdot i_{db} \cdot \frac{D}{\text{Cơ sở ngày quy ước}}$.
> Suy ra $P = K \left[ 1 - i_{db} \cdot \frac{D}{\text{Cơ sở ngày quy ước}} \right]$.
> Lập tỷ số $\frac{K - P}{P}$ và triệt tiêu $K$, ta thu được công thức chuyển đổi duy nhất giữa hai hệ chuẩn.

> [!exm] Bài toán định lượng giới hạn dưới bằng không
> Trạng thái bất thường lãi suất âm ($i < 0$) xảy ra khi thị giá giao dịch $P$ cao hơn giá trị nhận về $K$ vào cuối kỳ. Nếu một tổ chức cấp vốn $50.000.000$ với mức tỷ suất danh nghĩa âm $-0,40\%$ cho chu kỳ $0,5$ năm.
> Giải pháp:
> Giá trị thu hồi khi kết thúc hợp đồng theo cơ chế chiết khấu âm là:
> $$K = 50.000.000 \times [1 + (-0,004 \times 0,5)] = 49.900.000$$
> Mức tổn thất danh nghĩa là $100.000$. Chủ thể vẫn chấp nhận giao dịch này nếu chi phí bảo quản và duy trì tính thanh khoản của vốn dưới dạng vật chất vượt quá $100.000$.

# Cấu trúc Kỳ hạn của Lãi suất và Định giá Không Kinh doanh Chênh lệch giá

> [!def] Lãi suất Giao ngay và Lãi suất Kỳ hạn
> Lãi suất giao ngay (Spot rate) $s_t$ là mức tỷ suất hiệu dụng hàng năm áp dụng cho dòng tiền phát sinh từ hiện tại đến thời điểm $t$.
> Lãi suất kỳ hạn (Forward rate) $f_{t_1, t_2}$ là mức lãi suất được thỏa thuận tại hiện tại nhưng áp dụng cho một khoản đầu tư bắt đầu từ thời điểm $t_1$ và kết thúc tại thời điểm $t_2$ trong tương lai.

> [!thm] Quan hệ Cấu trúc Kỳ hạn theo Nguyên lý Không kinh doanh Chênh lệch giá
> Để triệt tiêu cơ hội kinh doanh chênh lệch giá (No-Arbitrage), việc đầu tư liên tục trong kỳ hạn dài phải mang lại giá trị tích lũy tương đương với việc đầu tư vào kỳ hạn ngắn rồi tái đầu tư theo lãi suất kỳ hạn:
> $$(1 + s_{t_2})^{t_2} = (1 + s_{t_1})^{t_1} \cdot (1 + f_{t_1, t_2})^{t_2 - t_1}$$
> Đối với cấu trúc đa kỳ hạn không đồng nhất, hiện giá của một chuỗi dòng tiền phải được chiết khấu theo từng lãi suất giao ngay tương ứng của mỗi kỳ:
> $$PV = \sum_{t=1}^n \frac{CF_t}{(1 + s_t)^t}$$

> [!exm] Bài toán xác định lãi suất kỳ hạn tương lai
> Cho biết lãi suất giao ngay kỳ hạn 1 chu kỳ là $s_1 = 3,0\%$ và kỳ hạn 2 chu kỳ là $s_2 = 3,5\%$. Xác định lãi suất kỳ hạn cho chu kỳ thứ hai $f_{1,2}$.
> Giải pháp:
> Thiết lập phương trình cân bằng tích lũy:
> $$(1 + s_2)^2 = (1 + s_1)^1 \cdot (1 + f_{1,2})^1 \implies 1 + f_{1,2} = \frac{(1,035)^2}{1,03} \approx \frac{1,071225}{1,03} \approx 1,04002$$
> Suy ra $f_{1,2} \approx 4,00\%$.

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
> $$i_{r,at} = (i_r + \pi^e)(1 - \ tau) - \pi^e = i_r(1 - \tau) - \tau \cdot \pi^e$$

> [!exm] Bài toán cấu trúc dòng tiền bảo toàn sức mua
> Cân nhắc một tài sản tài chính có tính năng tự động điều chỉnh giá trị vốn gốc $K_t$ liên tục theo chỉ số giá để chống lạm phát: $K_t = K_0 \times \frac{CPI_t}{CPI_0}$. Nếu tỷ lệ lạm phát chu kỳ 1 là $5\%$ và vốn gốc ban đầu là $1.000$, thì vốn gốc được điều chỉnh thành $1.050$. Bất kỳ dòng tiền phái sinh nào tính trên vốn gốc này đều tăng trưởng tỷ lệ thuận với lạm phát, do đó tỷ suất sinh lời tính toán từ tài sản này phản ánh thuần túy lãi suất thực trên thị trường.

# Giải tích Rủi ro, Độ nhạy cảm và Miễn dịch Hệ thống

Tỷ suất sinh lời trong một chu kỳ nắm giữ từ $t$ đến $t+1$ phản ánh tổng hợp thu nhập từ dòng tiền phát sinh $A$ và biến động giá trị thị trường:
$$R = \frac{A + (P_{t+1} - P_t)}{P_t} = i_c + g$$
trong đó $i_c = \frac{A}{P_t}$ là lợi suất thu nhập và $g = \frac{P_{t+1} - P_t}{P_t}$ là tỷ lệ biến động giá trị vốn. Tỷ suất sinh lời thực nhận $R$ chỉ bằng đúng YTM ban đầu khi và chỉ khi kỳ hạn nắm giữ trùng khớp hoàn toàn với thời điểm kết thúc hợp đồng.

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