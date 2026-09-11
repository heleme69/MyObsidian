> [!code]- C++
> ```cpp
> /*  
> ĐỀ BÀI: HỆ THỐNG QUẢN LÝ CỬA HÀNG TIỆN LỢI (GROCERY SYSTEM)  
> 
> 1. Cấu trúc phân cấp mặt hàng (Item):  
>    - Item: tên sản phẩm, mã sản phẩm, ngày nhập kho, đơn giá.  
>    - HouseHold (kế thừa từ Item): ngày xuất kho, mã ISO.  
>      + CookingSet (kế thừa từ HouseHold): số lượng dụng cụ trong một bộ.  
>      + DishSet (kế thừa từ HouseHold): tên nghệ nhân làm ra bộ chén dĩa.  
>    - Fresh (kế thừa từ Item): hạn sử dụng, ngày xuất kho, ngày và giờ rã đông.  
>      + SalmonSashimi (kế thừa từ Fresh): xuất xứ của cá hồi.  
>      + TempuraSeafood (kế thừa từ Fresh): số loại hải sản trong một gói.  
> 
> 2. Mối quan hệ giữa các lớp (Class Relationships):  
>    - Grocery và Item (Aggregation - quan hệ thu nạp):  
>      Kho hàng của Grocery chỉ chứa các con trỏ tham chiếu đến Item. Item được cấp phát độc lập ở ngoài và nạp vào kho.  
>    - Grocery và HoaDon (Composition - quan hệ cấu thành):  
>      Grocery trực tiếp tạo hóa đơn bên trong phương thức của mình, quản lý danh sách hóa đơn và chịu trách nhiệm giải phóng toàn bộ hóa đơn trong hàm hủy (Destructor).  
>    - HoaDon và Item (Association):  
>      Hóa đơn chứa danh sách con trỏ đến các Item được chọn mua.  
> 
> 3. Yêu cầu thực thi chương trình:  
>    - Tạo một đối tượng Grocery.  
>    - Tạo 6 Item gồm:  
>      + 3 Item thuộc loại HouseHold (có cả CookingSet và DishSet).  
>      + 3 Item thuộc loại Fresh (có cả SalmonSashimi và TempuraSeafood).  
>    - Nhập 6 Item này vào kho của Grocery và cập nhật ngày nhập kho cho từng mặt hàng.  
>    - Hiển thị thông tin của Grocery gồm các thuộc tính cơ bản và danh sách toàn bộ các Item đang có trong kho.  
>    - Tạo thêm 2 Item SalmonSashimi và nhập vào kho của Grocery (ngày nhập kho của 2 Item này phải sau ngày nhập kho của 6 Item trước).  
>    - Khách hàng mua tất cả các mặt hàng SalmonSashimi hiện có trong kho:  
>      + Grocery tiến hành lập hóa đơn cho khách.  
>      + Chuyển toàn bộ các mặt hàng SalmonSashimi từ kho sang hóa đơn (cập nhật lại kho sau khi bán).  
>      + In thông tin hóa đơn gồm: tên cửa hàng, ngày mua, danh sách chi tiết các mặt hàng SalmonSashimi và tổng số tiền thanh toán.  
>   
> SƠ ĐỒ UML:  
> 
>            +------------------+  
>            |     Grocery      |  
>            +------------------+  
>              ◇ *          ◆ *  
>              |            |  
>              |            v  
>              |     +-------------+  
>              |     |   HoaDon    |  
>              |     +-------------+  
>              |            | *  
>              v            v  
>       +-------------------------+  
>       |          Item           |  (getType(): ItemType)  
>       +-------------------------+  
>              △           △  
>              |           |  
>      +---------------+  +---------------+  
>      |   HouseHold   |  |     Fresh     |  
>      +---------------+  +---------------+  
>         △         △        △         △  
>         |         |        |         |  
>    +----------+ +-------+ +---------+ +----------------+  
>    |CookingSet| |DishSet| |Salmon...| | TempuraSeafood |  
>    +----------+ +-------+ +---------+ +----------------+  
> */  
> 
> #include <iostream>
> #include <string>
> #include <vector>
> 
> using namespace std;
> 
> enum ItemType { ITEM, COOKING_SET, DISH_SET, SALMON_SASHIMI, TEMPURA_SEAFOOD };
> 
> class Item {
> private:
>     string tenSP;
>     string maSP;
>     string ngayNhap;
>     double donGia;
> 
> public:
>     Item(string ten = "", string ma = "", string ngay = "", double gia = 0.0)
>         : tenSP(ten), maSP(ma), ngayNhap(ngay), donGia(gia) {}
> 
>     virtual ~Item() {}
> 
>     string getTenSP() const { return tenSP; }
>     string getMaSP() const { return maSP; }
>     string getNgayNhap() const { return ngayNhap; }
>     double getDonGia() const { return donGia; }
> 
>     void setNgayNhap(string ngay) { ngayNhap = ngay; }
> 
>     virtual ItemType getType() const { return ITEM; }
> 
>     virtual void display() const {
>         cout << tenSP << " " << maSP << " " << ngayNhap << " " << donGia;
>     }
> };
> 
> class HouseHold : public Item {
> private:
>     string ngayXuat;
>     string maISO;
> 
> public:
>     HouseHold(string ten = "", string ma = "", string ngayN = "", double gia = 0.0, string ngayX = "", string iso = "")
>         : Item(ten, ma, ngayN, gia), ngayXuat(ngayX), maISO(iso) {}
> 
>     void display() const override {
>         Item::display();
>         cout << " " << ngayXuat << " " << maISO;
>     }
> };
> 
> class Fresh : public Item {
> private:
>     string hanSuDung;
>     string ngayXuat;
>     string ngayRaDong;
> 
> public:
>     Fresh(string ten = "", string ma = "", string ngayN = "", double gia = 0.0, string hsd = "", string ngayX = "", string rDong = "")
>         : Item(ten, ma, ngayN, gia), hanSuDung(hsd), ngayXuat(ngayX), ngayRaDong(rDong) {}
> 
>     void display() const override {
>         Item::display();
>         cout << " " << hanSuDung << " " << ngayXuat << " " << ngayRaDong;
>     }
> };
> 
> class CookingSet : public HouseHold {
> private:
>     int soLuong;
> 
> public:
>     CookingSet(string ten = "", string ma = "", string ngayN = "", double gia = 0.0, string ngayX = "", string iso = "", int sl = 0)
>         : HouseHold(ten, ma, ngayN, gia, ngayX, iso), soLuong(sl) {}
> 
>     ItemType getType() const override { return COOKING_SET; }
> 
>     void display() const override {
>         HouseHold::display();
>         cout << " " << soLuong << "\n";
>     }
> };
> 
> class DishSet : public HouseHold {
> private:
>     string tenNgheNhan;
> 
> public:
>     DishSet(string ten = "", string ma = "", string ngayN = "", double gia = 0.0, string ngayX = "", string iso = "", string nn = "")
>         : HouseHold(ten, ma, ngayN, gia, ngayX, iso), tenNgheNhan(nn) {}
> 
>     ItemType getType() const override { return DISH_SET; }
> 
>     void display() const override {
>         HouseHold::display();
>         cout << " " << tenNgheNhan << "\n";
>     }
> };
> 
> class SalmonSashimi : public Fresh {
> private:
>     string xuatXu;
> 
> public:
>     SalmonSashimi(string ten = "", string ma = "", string ngayN = "", double gia = 0.0, string hsd = "", string ngayX = "", string rDong = "", string xx = "")
>         : Fresh(ten, ma, ngayN, gia, hsd, ngayX, rDong), xuatXu(xx) {}
> 
>     ItemType getType() const override { return SALMON_SASHIMI; }
> 
>     void display() const override {
>         Fresh::display();
>         cout << " " << xuatXu << "\n";
>     }
> };
> 
> class TempuraSeafood : public Fresh {
> private:
>     int soLoai;
> 
> public:
>     TempuraSeafood(string ten = "", string ma = "", string ngayN = "", double gia = 0.0, string hsd = "", string ngayX = "", string rDong = "", int sl = 0)
>         : Fresh(ten, ma, ngayN, gia, hsd, ngayX, rDong), soLoai(sl) {}
> 
>     ItemType getType() const override { return TEMPURA_SEAFOOD; }
> 
>     void display() const override {
>         Fresh::display();
>         cout << " " << soLoai << "\n";
>     }
> };
> 
> class HoaDon {
> private:
>     string tenCuaHang;
>     string ngayMua;
>     vector<Item*> dsMua;
> 
> public:
>     HoaDon(string tenCH = "", string ngay = "") : tenCuaHang(tenCH), ngayMua(ngay) {}
> 
>     void themItem(Item* item) {
>         if (item) dsMua.push_back(item);
>     }
> 
>     void display() const {
>         cout << tenCuaHang << " " << ngayMua << "\n";
>         double tong = 0.0;
>         for (auto item : dsMua) {
>             item->display();
>             tong += item->getDonGia();
>         }
>         cout << tong << "\n";
>     }
> };
> 
> class Grocery {
> private:
>     string ten;
>     string maSoThue;
>     vector<Item*> dsKho;
>     vector<HoaDon*> dsHoaDon;
> 
> public:
>     Grocery(string t = "", string mst = "") : ten(t), maSoThue(mst) {}
> 
>     ~Grocery() {
>         for (auto hd : dsHoaDon) {
>             delete hd;
>         }
>         dsHoaDon.clear();
>     }
> 
>     string getTen() const { return ten; }
> 
>     void nhapKho(Item* item, string ngayNhap) {
>         if (item) {
>             item->setNgayNhap(ngayNhap);
>             dsKho.push_back(item);
>         }
>     }
> 
>     void display() const {
>         cout << ten << " " << maSoThue << "\n";
>         for (auto item : dsKho) {
>             item->display();
>         }
>     }
> 
>     void thanhToanSalmonSashimi(string ngayMua) {
>         HoaDon* hd = new HoaDon(ten, ngayMua);
>         vector<Item*> khoMoi;
> 
>         for (auto item : dsKho) {
>             if (item->getType() == SALMON_SASHIMI) {
>                 hd->themItem(item);
>             } else {
>                 khoMoi.push_back(item);
>             }
>         }
> 
>         dsKho = khoMoi;
>         dsHoaDon.push_back(hd);
>         hd->display();
>     }
> };
> 
> int main() {
>     Grocery* g = new Grocery("Store", "001");
>     vector<Item*> allItems;
> 
>     allItems.push_back(new CookingSet("C1", "1", "", 50, "1/9", "ISO1", 5));
>     allItems.push_back(new CookingSet("C2", "2", "", 80, "1/9", "ISO2", 3));
>     allItems.push_back(new DishSet("D1", "3", "", 30, "1/9", "ISO3", "A"));
>     allItems.push_back(new SalmonSashimi("S1", "4", "", 15, "15/9", "5/9", "6/9", "NO"));
>     allItems.push_back(new TempuraSeafood("T1", "5", "", 10, "20/9", "6/9", "7/9", 2));
>     allItems.push_back(new TempuraSeafood("T2", "6", "", 12, "20/9", "6/9", "7/9", 1));
> 
>     for (int i = 0; i < 6; ++i) {
>         g->nhapKho(allItems[i], "1/9");
>     }
> 
>     g->display();
> 
>     allItems.push_back(new SalmonSashimi("S2", "7", "", 20, "30/9", "10/9", "11/9", "JP"));
>     allItems.push_back(new SalmonSashimi("S3", "8", "", 18, "30/9", "10/9", "11/9", "AU"));
> 
>     g->nhapKho(allItems[6], "2/9");
>     g->nhapKho(allItems[7], "2/9");
> 
>     g->thanhToanSalmonSashimi("2/9");
> 
>     delete g;
> 
>     for (auto item : allItems) {
>         delete item;
>     }
> 
>     return 0;
> }
> ```

