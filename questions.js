const quizData = [
    {
        id: "hckt_1",
        group: "hc",
        needCheck: false,
        category: "Chuyên ngành Hậu cần",
        question: "Câu 1. Phong trào thi đua ngành hậu cần và của các ngành hậu cần",
        options: [
            "Ngành Hậu cần Quân đội làm theo lời Bác Hồ dạy; Quân nhu “Đơn vị Nuôi quân giỏi - quản lý quân nhu tốt”; Quân y “Đơn vị Quân y 5 tốt”; Doanh trại “Xây dựng và quản lý doanh trại chính quy, xanh, sạch, đẹp”; Xăng dầu “Quản lý, sử dụng xăng dầu an toàn, tiết kiệm, hiệu quả”; Vận tải “Xây dựng đơn vị vận tải chính quy, an toàn, hiệu quả”.",
            "Ngành Hậu cần Quân đội làm theo lời Bác Hồ dạy; Quân nhu “Đơn vị Nuôi quân giỏi - quản lý tốt”; Quân y “Đơn vị Quân y 5 tốt”; Doanh trại “Xây dựng và quản lý doanh trại chính quy, sáng, xanh, sạch, đẹp”; Xăng dầu “Quản lý, sử dụng xăng dầu an toàn, tiết kiệm, hiệu quả”; Vận tải “Xây dựng đơn vị vận tải chính quy, an toàn, hiệu quả”."
        ],
        answer: 1,
        explain: "Quân nhu: 'quản lý tốt' (không có chữ quân nhu) + Doanh trại có chữ 'SÁNG' (chính quy, SÁNG, xanh, sạch, đẹp)."
    },
    {
        id: "hckt_2",
        group: "hc",
        needCheck: true,
        category: "Hậu cần - Kỹ thuật (Cần check văn bản 2026)",
        question: "Câu 2. [CHƯA CHẮC 100% - CHECK LẠI VĂN BẢN 2026 TẠI ĐƠN VỊ] Nhiệm vụ trọng tâm, đột phá công tác HC, KT năm 2026",
        options: [
            "Bảo đảm HC, KT cho SSCĐ và chiến đấu (trọng điểm là nhiệm vụ BM, CV, KTS,...). Tập trung nâng cao chất lượng đời sống bộ đội (ăn, mặc, ở, quản lý chăm sóc SK), thực hiện một số nội dung quy hoạch doanh trại đã được TLHQ phê duyệt, duy trì có hiệu quả phương thức bảo đảm hậu cần tập trung, chính quy, bảo đảm tốt kỹ thuật cho TBKT thực hiện các nhiệm vụ thường xuyên và đột xuất, nâng cao chất lượng tham mưu, đề xuất trong thực hiện công tác HC, KT. Đột phá vào: Nâng cao chất lượng kiểm tra, khám sức khoẻ, tư vấn, điều dưỡng, điều trị; xây dựng doanh trại chính quy, xanh, sạch, đẹp; tập trung xây dựng, củng cố xe, kho, xưởng, trạm theo đúng tiêu chí “chính quy, mẫu mực”. Phối hợp xây dựng, hoàn thiện hệ sinh thái số, đẩy mạnh chuyển đổi số các ngành.",
            "Bảo đảm HC, KT cho SSCĐ và chiến đấu (trọng điểm là nhiệm vụ BM, CV, KTS,...). Tập trung nâng cao chất lượng đời sống bộ đội (ăn, mặc, ở, quản lý chăm sóc SK), thực hiện một số nội dung quy hoạch doanh trại đã được TLHQ phê duyệt, duy trì có hiệu quả phương thức bảo đảm hậu cần tập trung, chính quy, bảo đảm tốt kỹ thuật thực hiện các nhiệm vụ thường xuyên và đột xuất, nâng cao chất lượng tham mưu, đề xuất trong thực hiện công tác HC, KT. Đột phá vào: Nâng cao chất lượng kiểm tra, khám sức khoẻ, tư vấn, điều dưỡng, điều trị; xây dựng doanh trại chính quy, xanh, sạch, đẹp; tập trung xây dựng, củng cố xe, kho, xưởng, trạm theo đúng tiêu chí “chính quy, mẫu mực”. Phối hợp xây dựng, hoàn thiện hệ sinh thái số, đẩy mạnh chuyển đổi số các ngành."
        ],
        answer: 0,
        explain: "Khác duy nhất cụm: 'bảo đảm tốt kỹ thuật CHO TBKT thực hiện các nhiệm vụ...' (câu sai bị lược mất 2 chữ 'cho TBKT')."
    },
    {
        id: "hckt_3",
        group: "hc",
        needCheck: true,
        category: "Chuyên ngành Hậu cần (Cần check TT 96/2025)",
        question: "Câu 3. [CHƯA CHẮC 100% - CHECK LẠI THÔNG TƯ 96/2025/TT-BQP] Tiêu chuẩn tiền ăn, một số định lượng chính theo Thông tư 96/2025/TT-BQP ngày 25/8/2025 của Bộ Quốc phòng",
        options: [
            "Tiền ăn (Tiền ăn cơ bản bộ binh: 72.000 đồng/ người/ngày; Tiền ăn công binh xây dựng công trình chiến đấu, vật cản; công binh SCH-TĐ; Công binh dò tìm xử lý bom mìn, Công binh vượt sông: 119.000 đồng/ người/ngày; Tiền ăn công binh đường hầm: 130.000 đồng/ người/ngày; Tiền ăn bệnh nhân điều trị tại bệnh xá: 126.000 đồng/ người/ngày; Tiền ăn thêm diễn tập: 72.000 đồng/ người/ngày; Tiền ăn ốm tại trại: 22.000 đồng/ người/ngày; Người làm công tác phục vụ cho các đối tượng ăn QBC được hưởng mức tiền ăn thêm 15.000 đồng/ngày). Định lượng ăn bộ binh (gam/người/ngày): Gạo tẻ = 740, Thịt xô lọc = 50, Thịt lợn nạc = 80, Thịt bò = 40, Thịt gia cầm = 90, Dầu mỡ ăn = 25, cá tươi = 150, Trứng = 40, Đậu phụ = 80, Vừng lạc = 10, Muối iốt = 20, Mì chính = 02, Rau xanh = 400, Hoa quả tươi = 300, Nước mắm = 30 ml, Tiền gia vị (so với tiền LTTP) = 3% = 2.160, Tiền chất đốt (so với tiền LTTP) = 5% = 3.600, Tiền vệ sinh trang bị, DCCD (so với tiền LTTP) = 0,35% = 252, Nhiệt lượng = 3.200 Kcal.",
            "Tiền ăn (Tiền ăn cơ bản bộ binh: 72.000 đồng/ người/ngày; Tiền ăn công binh xây dựng công trình chiến đấu, vật cản; công binh SCH-TĐ; Công binh dò tìm xử lý bom mìn, Công binh vượt sông: 119.000 đồng/ người/ngày; Tiền ăn công binh đường hầm: 130.000 đồng/ người/ngày; Tiền ăn bệnh nhân điều trị tại bệnh xá: 126.000 đồng/ người/ngày; Tiền ăn thêm diễn tập: 72.000 đồng/ người/ngày; Tiền ăn ốm tại trại: 22.000 đồng/ người/ngày; Người làm công tác phục vụ cho các đối tượng ăn QSC được hưởng mức tiền ăn thêm 15.000 đồng/ngày). Định lượng ăn bộ binh (gam/người/ngày): Gạo tẻ = 680, Thịt xô lọc = 50, Thịt lợn nạc = 80, Thịt bò = 40, Thịt gia cầm = 90, Dầu mỡ ăn = 25, cá tươi = 150, Trứng = 40, Đậu phụ = 80, Vừng lạc = 10, Muối iốt = 20, Mì chính = 02, Rau xanh = 400, Hoa quả tươi = 300, Nước mắm = 30 ml, Tiền gia vị (so với tiền LTTP) = 3% = 2.160, Tiền chất đốt (so với tiền LTTP) = 5% = 3.600, Tiền vệ sinh trang bị, DCCD (so với tiền LTTP) = 0,35% = 252, Nhiệt lượng = 3.200 Kcal."
        ],
        answer: 0,
        explain: "Khác 2 chỗ: Đối tượng 'QBC' + Gạo tẻ = '740' gam (ý kia ghi 'QSC' + Gạo tẻ = '680' gam)."
    },
    {
        id: "hckt_4",
        group: "hc",
        needCheck: true,
        category: "Chuyên ngành Hậu cần (Cần check NĐ 02/2026)",
        question: "Câu 4. [CHƯA CHẮC 100% - CHECK LẠI NGHỊ ĐỊNH 02/2026/NĐ-CP] Tiêu chuẩn ăn thêm ngày lễ, tết theo Nghị định số 02/2026/NNĐ-CP ngày 20/01/2026 của Chính phủ quy định về tiêu chuẩn, định mức vật chất hậu cần trong QĐNDVN",
        options: [
            "2 lần so với tiêu chuẩn ăn cơ bản của HSQ-BS BB.",
            "1,5 lần so với tiêu chuẩn ăn cơ bản của HSQ-BS BB."
        ],
        answer: 0,
        explain: "Khác con số '2 lần' (đi cặp với 72.000đ ở Câu 10) vs '1,5 lần' (đi cặp với 108.000đ ở Câu 10)."
    },
    {
        id: "hckt_5",
        group: "hc",
        needCheck: false,
        category: "Chuyên ngành Hậu cần",
        question: "Câu 5. Năm kỹ thuật cấp cứu cơ bản",
        options: [
            "Băng vết thương; Cầm máu tạm thời vết thương; Cố định tạm thời gẫy xương; Cấp cứu ngừng tuần hoàn C-A-B; Chuyển thương hỏa tuyến",
            "Băng vết thương; Cầm máu tạm thời vết thương; Cố định tạm thời gẫy xương; Cấp cứu ngừng tuần hoàn B-A-C; Chuyển thương hỏa tuyến"
        ],
        answer: 0,
        explain: "Cấp cứu ngừng tuần hoàn chuẩn là: C-A-B (không phải B-A-C)."
    },
    {
        id: "hckt_6",
        group: "hc",
        needCheck: false,
        category: "Chuyên ngành Hậu cần",
        question: "Câu 6. Nội dung PTTĐ: Đơn vị nuôi quân giỏi, quản lý quân nhu tốt.",
        options: [
            "Nuôi quân giỏi (Chế biến thực phẩm giỏi - Tăng gia sản xuất giỏi - Bảo đảm quân trang tốt - Thái độ phục vụ tốt). Quản lý quân nhu tốt (Quản lý ngân sách, quỹ vốn Quân nhu tốt - Quản lý, sử dụng Quân trang tốt - Xây dựng đội ngũ cán bộ, chiến sĩ, nhân viên Quân nhu tốt - Xây dựng ngành Quân nhu chính quy, mẫu mực).",
            "Nuôi quân giỏi (Chế biến lương thực, thực phẩm giỏi - Tăng gia sản xuất giỏi - Bảo đảm quân trang tốt - Thái độ phục vụ tốt). Quản lý quân nhu tốt (Quản lý ngân sách, quỹ vốn Quân nhu tốt - Quản lý, sử dụng Quân trang tốt - Xây dựng đội ngũ cán bộ, chiến sĩ, nhân viên Quân nhu tốt - Xây dựng ngành Quân nhu chính quy, mẫu mực)."
        ],
        answer: 1,
        explain: "Có chữ 'LƯƠNG THỰC': Chế biến LƯƠNG THỰC, thực phẩm giỏi."
    },
    {
        id: "hckt_7",
        group: "hc",
        needCheck: false,
        category: "Chuyên ngành Hậu cần",
        question: "Câu 7. Nội dung phong trào thi đua Đơn vị Quân y 5 tốt",
        options: [
            "Phục vụ chiến đấu, SSCĐ, huấn luyện, xây dựng đơn vị tốt; Có nếp sống vệ sinh khoa học, bảo đảm quân số khỏe tốt; Quản lý sức khỏe và cấp cứu điều trị tốt; Kết hợp y dược học hiện đại với y dược học cổ truyền; Quản lý và sử dụng thuốc, trang thiết bị y tế tốt.",
            "Phục vụ chiến đấu, huấn luyện, xây dựng đơn vị tốt; Có nếp sống vệ sinh khoa học, bảo đảm quân số khỏe tốt; Quản lý sức khỏe và cấp cứu điều trị tốt; Kết hợp y dược học hiện đại với y dược học cổ truyền; Quản lý và sử dụng thuốc, trang thiết bị y tế tốt."
        ],
        answer: 0,
        explain: "Có chữ 'SSCĐ': Phục vụ chiến đấu, SSCĐ, huấn luyện, xây dựng đơn vị tốt."
    },
    {
        id: "hckt_8",
        group: "hc",
        needCheck: true,
        category: "Chuyên ngành Hậu cần (Cần check NĐ 02/2026)",
        question: "Câu 8. [CHƯA CHẮC 100% - CHECK LẠI NGHỊ ĐỊNH 02/2026/NĐ-CP] Tiêu chuẩn định mức sử dụng điện năng sinh hoạt đối với HSQ-BS theo Nghị định số 02/2026/NNĐ-CP ngày 20/01/2026 của Chính phủ quy định về tiêu chuẩn, định mức vật chất hậu cần trong QĐNDVN.",
        options: [
            "24 KWh/người/tháng",
            "21 KWh/người/tháng."
        ],
        answer: 0,
        explain: "Khác con số '24 KWh' vs '21 KWh'."
    },
    {
        id: "hckt_9",
        group: "hc",
        needCheck: false,
        category: "Chuyên ngành Hậu cần",
        question: "Câu 9. Đột tử (nguyên nhân, dự phòng)",
        options: [
            "Nguyên nhân: Do bệnh lý tim mạch như: Nhồi máu cơ tim, rối loạn nhịp tim, nhịp nhanh thất hay rung thất... - Do xơ vữa mạch máu - Do các dị dạng bẩm sinh của các mạch máu não - Do các bệnh lý mạn tính như tăng huyết áp, đái tháo đường, rối loạn lipid máu,... Dự phòng: Tăng cường hoạt động thể lực - Không để cơ thể thừa cân, béo phì - Giảm căng thẳng - Hạn chế uống rượu bia - Không hút thuốc",
            "Nguyên nhân: Do bệnh lý tim mạch như: Nhồi máu cơ tim, rối loạn nhịp tim, nhịp nhanh thất hay rung thất... - Do xơ vữa mạch máu - Do các dị dạng bẩm sinh của các mạch máu não - Do các bệnh lý mạn tính như tăng huyết áp, đái tháo đường, rối loạn lipid máu,... Dự phòng: Hạn chế hoạt động thể lực - Không để cơ thể thừa cân, béo phì - Giảm căng thẳng - Hạn chế uống rượu bia - Không hút thuốc"
        ],
        answer: 0,
        explain: "Dự phòng là 'TĂNG CƯỜNG hoạt động thể lực' (câu sai ghi 'Hạn chế')."
    },
    {
        id: "hckt_10",
        group: "hc",
        needCheck: true,
        category: "Chuyên ngành Hậu cần (Cần check NĐ 02/2026)",
        question: "Câu 10. [CHƯA CHẮC 100% - CHECK LẠI NGHỊ ĐỊNH 02/2026/NĐ-CP] Số ngày và tiền ăn lễ, tết",
        options: [
            "Số ngày (12 ngày): 01/01, 05 ngày tết Nguyên đán (01 ngày cuối năm và 04 ngày đầu năm), 10/3 âm lịch, 30/4, 01/5, 02/9 và 01 ngày liền kề trước hoặc sau ngày 02/9, 22/12. Mức ăn thêm: 72 .000 đồng/người/ngày. 100% quân số không phải trả tiền.",
            "Số ngày (12 ngày): 01/01, 05 ngày tết Nguyên đán (01 ngày cuối năm và 04 ngày đầu năm), 10/3 âm lịch, 30/4, 01/5, 02/9 và 01 ngày liền kề trước hoặc sau ngày 02/9, 22/12. Mức ăn thêm: 108.000 đồng/người/ngày. 100% quân số không phải trả tiền."
        ],
        answer: 0,
        explain: "Khác mức ăn thêm '72.000 đồng' (đi cặp Câu 4a) vs '108.000 đồng' (đi cặp Câu 4b)."
    },
    {
        id: "hckt_11",
        group: "kt",
        needCheck: false,
        category: "Chuyên ngành Kỹ thuật",
        question: "Câu 11. Thực hiện ngày kỹ thuật cấp tiểu đoàn",
        options: [
            "Thời gian thực hiện (0,5 ngày, thứ 6 hàng tuần). 5 nội dung (Kiểm tra TTKT và đồng bộ 100% VKTBKT của đơn vị đang quản lý - Bảo quản VKTBKT và các dụng cụ, thiết bị khác, sửa chữa hư hỏng VKTBKT (nếu có) - Làm vệ sinh, tu bổ, sửa chữa nhà cửa, hệ thống đường sá, hệ thống điện, hệ thống thoát nước, hệ thống chống sét, bổ sung, củng cố các phương tiện phương án bảo vệ, PCCN, chiếu sáng của KKT, kho, trạm - Tổ chức HL kỹ thuật bổ sung - Kiểm tra cập nhật hồ sơ, ghi chép sổ sách đăng ký thống kê",
            "Thời gian thực hiện (0,5 ngày, thứ 6 hàng tuần). 5 nội dung (Kiểm tra TTKT và đồng bộ 100% VKTBKT của đơn vị đang quản lý - Bảo quản VKTBKT và các dụng cụ, thiết bị khác, sửa chữa hư hỏng VKTBKT (nếu có) - Làm vệ sinh, tu bổ, sửa chữa nhà cửa, hệ thống đường sá, hệ thống điện, hệ thống thoát nước, hệ thống chống sét, bổ sung, củng cố các phương tiện phương án bảo vệ, PCCN, chiếu sáng của KKT, kho, trạm - Tổ chức HL kỹ thuật theo kế hoạch - Kiểm tra cập nhật hồ sơ, ghi chép sổ sách đăng ký thống kê"
        ],
        answer: 1,
        explain: "Tổ chức HL kỹ thuật 'THEO KẾ HOẠCH' (không phải 'bổ sung')."
    },
    {
        id: "hckt_12",
        group: "kt",
        needCheck: false,
        category: "Chuyên ngành Kỹ thuật",
        question: "Câu 12. Sắp xếp, quản lý vũ khí, khí tài, đạn dược trong tủ súng",
        options: [
            "Sắp xếp vũ khí (Vị trí sắp xếp vũ khí trong tủ súng thống nhất theo tem súng và danh sách kê biên, HTĐ không có đạn lắp trên súng. Đối với tủ súng tiểu đội: Súng được sắp xếp trên giá đỡ trong tủ súng từ trái qua phải (báng gấp, báng gỗ, báng nhựa) theo thứ tự AK, M79, B41, RPĐ; sắp xếp tay cầm hướng vào phía trong, dây kẹp theo sát thân súng; Súng sắp xếp phải được khoá vòng cò, trừ súng ngắn). Sắp xếp đạn (Hòm đạn được sắp xếp từ 1-2 chồng tại ngăn dưới tủ súng theo thứ tự từ trái qua phải, từ dưới lên trên, đạn 12,7, K53, K56; Đạn rời trang bị theo súng được lắp trong HTĐ, kẹp đạn theo quy định khi làm nhiệm vụ (chia đều lắp trong HTĐ) xếp thành hàng ngay ngắn ở đáy tủ súng, cửa HTĐ quay ra phía ngoài, HTĐ có đạn và HTĐ không có đạn để tách nhau).",
            "Sắp xếp vũ khí (Vị trí sắp xếp vũ khí trong tủ súng thống nhất theo tem súng và danh sách kê biên, HTĐ lắp trên súng. Đối với tủ súng tiểu đội: Súng được sắp xếp trên giá đỡ trong tủ súng từ trái qua phải (báng gấp, báng gỗ, báng nhựa) theo thứ tự AK, M79, B41, RPĐ; sắp xếp tay cầm hướng vào phía trong, dây kẹp theo sát thân súng; Súng sắp xếp phải được khoá vòng cò, trừ súng ngắn). Sắp xếp đạn (Hòm đạn được sắp xếp từ 1-2 chồng tại ngăn dưới tủ súng theo thứ tự từ trái qua phải, từ dưới lên trên, đạn 12,7, K53, K56; Đạn rời trang bị theo súng được lắp trong HTĐ, kẹp đạn theo quy định khi làm nhiệm vụ (chia đều lắp trong HTĐ) xếp thành hàng ngay ngắn ở đáy tủ súng, cửa HTĐ quay ra phía ngoài, HTĐ có đạn và HTĐ không có đạn để tách nhau)."
        ],
        answer: 0,
        explain: "HTĐ 'KHÔNG CÓ ĐẠN' lắp trên súng (câu sai thiếu 'không có đạn')."
    },
    {
        id: "hckt_13",
        group: "kt",
        needCheck: false,
        category: "Chuyên ngành Kỹ thuật",
        question: "Câu 13. Quy định về khoá và quản lý khoá tủ súng",
        options: [
            "Tủ súng tiểu đội (được khoá chắc chắn bằng 02 khoá cầu ngang, CH/b trực tiếp giữ 01 chìa của 01 khoá, CH/c giữ 01 chìa của khoá còn lại. Số chìa khoá còn lại cắt nhỏ huỷ hoặc làm biến dạng không thể sử dụng được); Tủ súng trung đội (được khoá chắc chắn bằng 04 khoá cầu ngang, CH/b trực tiếp giữ 02 chìa của 02 khoá riêng biệt, CH/c giữ 02 chìa của 02 khoá còn lại. Số chìa khoá còn lại cắt nhỏ huỷ hoặc làm biến dạng không thể sử dụng được.",
            "Tủ súng tiểu đội (được khoá chắc chắn bằng 02 khoá cầu ngang, CH/b trực tiếp giữ 01 chìa của 01 khoá, CH/c giữ 01 chìa của khoá còn lại. Số chìa khoá còn lại cắt nhỏ huỷ hoặc làm biến dạng không thể sử dụng được); Tủ súng trung đội (được khoá chắc chắn bằng 04 khoá cầu ngang, CH/b trực tiếp giữ 02 chìa của 02 khoá, CH/c giữ 02 chìa của 02 khoá còn lại. Số chìa khoá còn lại cắt nhỏ huỷ hoặc làm biến dạng không thể sử dụng được."
        ],
        answer: 0,
        explain: "Tủ súng trung đội có chữ 'RIÊNG BIỆT': 02 chìa của 02 khoá RIÊNG BIỆT."
    },
    {
        id: "hckt_14",
        group: "kt",
        needCheck: false,
        category: "Chuyên ngành Kỹ thuật",
        question: "Câu 14. Nội dung cơ bản của CTKT",
        options: [
            "6 nội dung: Tham gia bảo đảm VKTBKT; BĐKT cho TBKT; HL KT; Hoạt động KH-CNMT và thông tin KHKTQS; Quản lý KT; Động viên KT.",
            "6 nội dung: Tham gia bảo đảm trang bị; BĐKT cho TBKT; HL KT; Hoạt động KH-CNMT và thông tin KHKTQS; Quản lý KT; Động viên KT."
        ],
        answer: 1,
        explain: "Nội dung đầu là: Tham gia bảo đảm 'TRANG BỊ' (không phải 'VKTBKT')."
    },
    {
        id: "hckt_15",
        group: "kt",
        needCheck: false,
        category: "Chuyên ngành Kỹ thuật",
        question: "Câu 15. Nội dung bảo đảm kỹ thuật cho trang bị kỹ thuật",
        options: [
            "6 nội dung: Chuẩn bị sử dụng; Bảo quản VKTBKT; Bảo dưỡng VKTBKT; Niêm cất VKTBKT; Sửa chữa VKTBKT; Thanh xử lý VKTBKT.",
            "6 nội dung: Chuẩn bị sử dụng; Bảo quản VKTBKT; Bảo dưỡng VKTBKT; Niêm cất VKTBKT; sửa chữa VKTBKT; Tăng hạn sử dụng VKTBKT."
        ],
        answer: 0,
        explain: "Nội dung thứ 6 là: 'THANH XỬ LÝ' VKTBKT (không phải 'Tăng hạn sử dụng')."
    },
    {
        id: "hckt_16",
        group: "kt",
        needCheck: false,
        category: "Chuyên ngành Kỹ thuật",
        question: "Câu 16. Nội dung bảo đảm kỹ thuật cho trang bị kỹ thuật (Câu lặp trong đề)",
        options: [
            "6 nội dung: Chuẩn bị sử dụng; Bảo quản VKTBKT; Bảo dưỡng VKTBKT; Niêm cất VKTBKT; Sửa chữa VKTBKT; Thanh xử lý VKTBKT.",
            "6 nội dung: Chuẩn bị sử dụng; Bảo quản VKTBKT; Bảo dưỡng VKTBKT; Niêm cất VKTBKT; sửa chữa VKTBKT; Tăng hạn sử dụng VKTBKT."
        ],
        answer: 0,
        explain: "Giống Câu 15: Nội dung thứ 6 là 'THANH XỬ LÝ' VKTBKT."
    },
    {
        id: "hckt_17",
        group: "kt",
        needCheck: false,
        category: "Chuyên ngành Kỹ thuật",
        question: "Câu 17. Phân cấp chất lượng VKTBKT",
        options: [
            "5 cấp: Cấp 1 (VKTBKT mới sản xuất), cấp 2 (VKTBKT đang sử dụng, hoạt động tốt, cơ bản vẫn đồng bộ), cấp 3 (VKTBKT hư hỏng nhỏ, cần sửa chữa vừa), cấp 4 (VKTBKT hư hỏng lớn, cần sửa chữa lớn), cấp 5 (VKTBKT hư hỏng nặng, cần thanh lý)",
            "5 cấp: Cấp 1 (VKTBKT mới sản xuất), cấp 2 (VKTBKT đang sử dụng, hoạt động tốt, cơ bản vẫn đồng bộ), cấp 3 (VKTBKT bị hư hỏng, cần sửa chữa), cấp 4 (VKTBKT hư hỏng lớn, cần sửa chữa lớn), cấp 5 (VKTBKT hư hỏng nặng, cần thanh lý)"
        ],
        answer: 0,
        explain: "Cấp 3 ghi rõ: hư hỏng 'NHỎ', cần sửa chữa 'VỪA'."
    },
    {
        id: "hckt_18",
        group: "kt",
        needCheck: false,
        category: "Chuyên ngành Kỹ thuật",
        question: "Câu 18. Nội dung HL kỹ thuật tại đơn vị",
        options: [
            "5 nội dung: HL làm chủ VKTBKT, HL khai thác VKTBKT, HL nghiệp vụ CTKT, HL chiến thuật ngành và bồi dưỡng kiến thức mới",
            "5 nội dung: HL làm chủ VKTBKT mới, HL khai thác VKTBKT, HL nghiệp vụ CTKT, HL chiến thuật ngành và bồi dưỡng kiến thức mới"
        ],
        answer: 0,
        explain: "HL làm chủ 'VKTBKT' (không có chữ 'mới')."
    },
    {
        id: "hckt_19",
        group: "kt",
        needCheck: false,
        category: "Chuyên ngành Kỹ thuật",
        question: "Câu 19. Mục tiêu CVĐ 50",
        options: [
            "4 mục tiêu: Quản lý tốt; Khai thác tốt, bền; BĐAT; Thực hành tiết kiệm.",
            "4 mục tiêu: Quản lý tốt; Khai thác tốt, bền; BĐAT tuyệt đối; Thực hành tiết kiệm."
        ],
        answer: 0,
        explain: "Chỉ là 'BĐAT' (không có chữ 'tuyệt đối')."
    },
    {
        id: "hckt_20",
        group: "kt",
        needCheck: false,
        category: "Chuyên ngành Kỹ thuật",
        question: "Câu 20. Điều kiện đủ đối với xe ô tô quân sự khi tham gia giao thông",
        options: [
            "7 loại: Biển số đăng ký; GCN đăng ký; Tem kiểm định còn hiệu lực dán trên kính chắn gió; Hệ thống biển phụ; Lệnh điều xe, giấy công tác xe; Chứng từ hàng hoá (xe vận chuyển hàng hoá); Sổ theo dõi hoạt động xe-máy.",
            "7 loại: Biển số đăng ký; GCN đăng ký; Tem kiểm định còn hiệu lực dán trên kính chắn gió; Hệ thống biển phụ; Giấy công tác xe; Chứng từ hàng hoá (xe vận chuyển hàng hoá); Sổ theo dõi hoạt động xe-máy."
        ],
        answer: 0,
        explain: "Có đủ 'LỆNH ĐIỀU XE, giấy công tác xe' (câu sai thiếu 'Lệnh điều xe')."
    }
];