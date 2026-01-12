# ASCII Comment Generator for C/C++

**Tạo comment nghệ thuật ASCII đẹp mắt cho code C/C++ của bạn một cách nhanh chóng và dễ dàng!**

## ✨ Tính năng chính

### 🎨 Tạo ASCII Art Comment tự động
- Chuyển đổi text thành ASCII art với phong cách pixel/block art đẹp mắt
- Hỗ trợ đầy đủ 26 chữ cái tiếng Anh (A-Z)
- Định dạng chuẩn với chiều cao 7 dòng cho mỗi chữ cái

### ⚡ Trigger nhanh chóng

**Cách 1: Auto-trigger** 
- Gõ `/**bt` và nhấn **Enter**
- Input box sẽ tự động xuất hiện
- Nhập text bạn muốn → Comment được tạo ngay lập tức!

**Cách 2: Keyboard shortcut**
- `Ctrl+Shift+A` (Windows/Linux)
- `Cmd+Shift+A` (macOS)

**Cách 3: Command Palette**
- `Ctrl+Shift+P` → Gõ "Generate ASCII Comment"

### 🎯 Hỗ trợ 2 kiểu comment

**Block Comment (/* */)**
```c
/*
 * .##....##...########...##.......##.......#######..
 * .##....##...##.........##.......##......##.....##.
 * .##....##...##.........##.......##......##.....##.
 * .########...######.....##.......##......##.....##.
 * .##....##...##.........##.......##......##.....##.
 * .##....##...##.........##.......##......##.....##.
 * .##....##...########...########.########..#######..
 */
```

**Line Comment (//)**
```cpp
// .##....##...########...##.......##.......#######..
// .##....##...##.........##.......##......##.....##.
// .##....##...##.........##.......##......##.....##.
// .########...######.....##.......##......##.....##.
// .##....##...##.........##.......##......##.....##.
// .##....##...##.........##.......##......##.....##.
// .##....##...########...########.########..#######..
```

### 🛡️ An toàn và thông minh

- **Language-aware**: Chỉ hoạt động với file C/C++ (.c, .cpp, .h, .hpp)
- **Input validation**: Kiểm tra input hợp lệ (chỉ chữ cái A-Z và khoảng trắng)
- **Smart positioning**: Tự động insert comment đúng vị trí cursor
- **Clean code**: Tự động xóa trigger `/**bt` sau khi sử dụng

---

## 📦 Cài đặt

### Cách 1: Từ VS Code Marketplace
1. Mở VS Code
2. Nhấn `Ctrl+Shift+X` để mở Extensions
3. Tìm kiếm "ASCII Comment Generator"
4. Click **Install**

### Cách 2: Từ file .vsix

**Qua giao diện (Khuyên dùng)**
1. Mở VS Code
2. Nhấn `Ctrl+Shift+X` để mở Extensions
3. Click biểu tượng `...` (góc trên bên phải)
4. Chọn **"Install from VSIX..."**
5. Chọn file `.vsix` đã tải về
6. Đợi thông báo cài đặt thành công

**Qua Command Line**
```bash
code --install-extension ascii-comment-generator-0.0.1.vsix
```

**Kéo thả**
- Kéo file `.vsix` vào cửa sổ VS Code Extensions panel

---

## 🚀 Hướng dẫn sử dụng

### Sử dụng nhanh
1. Mở file C/C++ (.c, .cpp, .h, .hpp)
2. Đặt cursor ở vị trí muốn tạo comment
3. Gõ `/**bt` và nhấn **Enter** hoặc sử dụng phím tắt ```ctrl + shift + A ```
4. Nhập text (ví dụ: "HELLO WORLD")
5. Chọn kiểu comment (Block hoặc Line)
6. Comment ASCII art được tạo tự động!

### Các cách kích hoạt

| Phương thức | Thao tác |
|------------|----------|
| Auto-trigger | Gõ `/**bt` + Enter |
| Keyboard shortcut | `Ctrl+Shift+A` (Win/Linux)<br>`Cmd+Shift+A` (Mac) |
| Command Palette | `Ctrl+Shift+P` → "Generate ASCII Comment" |

---

## 🎓 Ví dụ sử dụng

### 1. Phân chia sections trong code
```c
/*
 * .########....###....########....###...
 * .##.....##..##.##......##......##.##..
 * .##.....##.##...##.....##.....##...##.
 * .##.....##.##...##.....##.....##...##.
 * .##.....##.#########....##.....#########
 * .##.....##.##.....##....##.....##.....##
 * .########..##.....##....##.....##.....##
 */

struct Data {
    int value;
    char name[50];
};
```

### 2. Đánh dấu hàm quan trọng
```cpp
/*
 * .##.....##....###....####.##....##
 * .###...###...##.##....##..###...##
 * .####.####..##...##...##..####..##
 * .##.###.##.##.....##..##..##.##.##
 * .##.....##.#########..##..##..####
 * .##.....##.##.....##..##..##...###
 * .##.....##.##.....##.####.##....##
 */

int main() {
    printf("Hello, World!\n");
    return 0;
}
```

### 3. Header cho module
```c
/*
 * .##.....##.########.####.##.......
 * .##.....##....##.....##..##.......
 * .##.....##....##.....##..##.......
 * .##.....##....##.....##..##.......
 * .##.....##....##.....##..##.......
 * .##.....##....##.....##..##.......
 * ..#######.....##....####.########.
 */

// Utility functions
```

---

## 💡 Tips & Tricks

- **Ngắn gọn hơn**: Dùng từ 3-10 chữ cái cho kết quả đẹp nhất
- **Phân chia code**: Đánh dấu sections như MAIN, DATA, UTILS, CONFIG
- **Header files**: Tạo banner cho tên module/library
- **Code review**: Làm code professional và dễ đọc hơn
- **Navigation**: Dễ dàng nhảy giữa các phần code lớn

---

## 📋 Yêu cầu hệ thống

- Visual Studio Code phiên bản **1.80.0** trở lên
- Không cần dependencies bổ sung

---

## 🔧 Cấu hình

Extension hoạt động ngay sau khi cài đặt, không cần cấu hình thêm!

---

## 📝 Giới hạn hiện tại

- Chỉ hỗ trợ chữ cái A-Z (chưa hỗ trợ số và ký tự đặc biệt)
- Chỉ hoạt động với file C/C++
- ASCII art có độ rộng cố định cho mỗi chữ cái

---

## 🛠️ Build từ source

### Yêu cầu
- Node.js 16.x trở lên
- npm hoặc yarn

### Các bước build

```bash
# 1. Clone repository
git clone <repository-url>
cd ascii-comment-generator

# 2. Cài đặt dependencies
npm install

# 3. Compile TypeScript
npm run compile

# 4. Tạo file .vsix
npm install -g @vscode/vsce
vsce package --allow-missing-repository
```

File `.vsix` sẽ được tạo trong thư mục hiện tại.

---

## 🐛 Báo lỗi & Góp ý

Nếu bạn gặp vấn đề hoặc có ý tưởng cải thiện, vui lòng tạo issue trên GitHub repository.

---

## 📄 License

MIT License - Xem file LICENSE để biết thêm chi tiết.

---

## 🎉 Enjoy!

**Làm việc với code vui hơn cùng ASCII Comment Generator!** 🚀

---