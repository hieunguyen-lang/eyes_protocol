import { Stat, ChartData, TablePostDataMock } from '../../types';


export const mockPosts: TablePostDataMock[] = [
  {
    posturl: "https://example.com/post/1",
    name: "Nguyễn Văn A",
    content_created: "06 Jun 2025 15:46",
    content: "Tìm homestay · Các điểm đến có homestay nổi bật · Các quốc gia · Khu vực · CÀI ĐẶT · THÔNG TIN · CÁC TRANG HỮU ÍCH.",
    reaction_count: 120,
    comment_count: 15,
    share_count: 5,
    image_url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    type: "Facebook"
  },
  {
    posturl: "https://example.com/post/2",
    name: "Trần Thị B",
    content_created: "05 Jun 2025 10:30",
    content: "Homestay ở Mỹ. 1,558 chỗ nghỉ nhà dân trong tầm tay bạn.\n\nNgày nhận phòng: T6, 6 tháng 6 2025.\nNgày trả phòng: T7, 7 tháng 6 2025.\n\nTìm ngay để có giá tốt!",
    reaction_count: 85,
    comment_count: 8,
    share_count: 2,
    image_url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=600&q=80",
    type: "Facebook"
  },
  {
    posturl: "https://example.com/post/3",
    name: "Phạm C",
    content_created: "04 Jun 2025 09:15",
    content: "Các homestay tốt nhất thế giới, kèm ảnh minh họa dưới đây.",
    reaction_count: 200,
    comment_count: 22,
    share_count: 11,
    image_url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    type: "Facebook"
  },
  {
    posturl: "https://example.com/post/4",
    name: "Lê D",
    content_created: "03 Jun 2025 18:00",
    content: "Mình vừa thử homestay ở Đà Lạt, cực kỳ ấm cúng và sạch sẽ. Đánh giá 5 sao!\n\nẢnh thực tế bên dưới.",
    reaction_count: 45,
    comment_count: 5,
    share_count: 1,
    image_url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=600&q=80",
    type: "Facebook"
  },
  {
    posturl: "https://example.com/post/5",
    name: "Phan E",
    content_created: "02 Jun 2025 14:45",
    content: "Không thể bỏ lỡ danh sách homestay mới nhất năm 2025. Xem thêm tại link dưới.",
    reaction_count: 75,
    comment_count: 12,
    share_count: 3,
    image_url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=600&q=80",
    type: "Facebook"
  },
  {
    posturl: "https://example.com/post/1",
    name: "Nguyễn Văn A",
    content_created: "06 Jun 2025 15:46",
    content: "Tìm homestay · Các điểm đến có homestay nổi bật · Các quốc gia · Khu vực · CÀI ĐẶT · THÔNG TIN · CÁC TRANG HỮU ÍCH.",
    reaction_count: 120,
    comment_count: 15,
    share_count: 5,
    image_url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    type: "Facebook"
  },
  {
    posturl: "https://example.com/post/2",
    name: "Trần Thị B",
    content_created: "05 Jun 2025 10:30",
    content: "Homestay ở Mỹ. 1,558 chỗ nghỉ nhà dân trong tầm tay bạn.\n\nNgày nhận phòng: T6, 6 tháng 6 2025.\nNgày trả phòng: T7, 7 tháng 6 2025.\n\nTìm ngay để có giá tốt!",
    reaction_count: 85,
    comment_count: 8,
    share_count: 2,
    image_url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=600&q=80",
    type: "Facebook"
  },
  {
    posturl: "https://example.com/post/3",
    name: "Phạm C",
    content_created: "04 Jun 2025 09:15",
    content: "Các homestay tốt nhất thế giới, kèm ảnh minh họa dưới đây.",
    reaction_count: 200,
    comment_count: 22,
    share_count: 11,
    image_url: "https://scontent.fhan15-1.fna.fbcdn.net/v/t51.75761-15/476876734_18019378451661617_2776938907807016490_n.jpg?stp=dst-jpegr_s600x600_tt6&_nc_cat=110&cb=64d46a15-5a82848f&ccb=1-7&_nc_sid=127cfc&_nc_ohc=_UfpqEB-lcAQ7kNvwEOsEDQ&_nc_oc=Adl49zlAlywTTbNyQjTK9xtP1nQHdaHjvVFq-OfG2siikY0TADXnr9rm1Xp5dsz_B48&_nc_zt=23&se=-1&_nc_ht=scontent.fhan15-1.fna&_nc_gid=pkZb7-hBhX14wQtJtSQAfQ&oh=00_AfMrYfkNs5jGgeL2VwH1iTKYJCJ8w2QnSWLevFZuxGKB9g&oe=6848E775"
  
,    type: "Facebook"
  },
  {
    posturl: "https://example.com/post/4",
    name: "Lê D",
    content_created: "03 Jun 2025 18:00",
    content: "Mình vừa thử homestay ở Đà Lạt, cực kỳ ấm cúng và sạch sẽ. Đánh giá 5 sao!\n\nẢnh thực tế bên dưới.",
    reaction_count: 45,
    comment_count: 5,
    share_count: 1,
    image_url: "https://scontent.fhan15-1.fna.fbcdn.net/v/t51.75761-15/476876734_18019378451661617_2776938907807016490_n.jpg?stp=dst-jpegr_s600x600_tt6&_nc_cat=110&cb=64d46a15-5a82848f&ccb=1-7&_nc_sid=127cfc&_nc_ohc=_UfpqEB-lcAQ7kNvwEOsEDQ&_nc_oc=Adl49zlAlywTTbNyQjTK9xtP1nQHdaHjvVFq-OfG2siikY0TADXnr9rm1Xp5dsz_B48&_nc_zt=23&se=-1&_nc_ht=scontent.fhan15-1.fna&_nc_gid=pkZb7-hBhX14wQtJtSQAfQ&oh=00_AfMrYfkNs5jGgeL2VwH1iTKYJCJ8w2QnSWLevFZuxGKB9g&oe=6848E775",
    type: "Facebook"
  },
  {
    posturl: "https://example.com/post/5",
    name: "Phan E",
    content_created: "02 Jun 2025 14:45",
    content: "Không thể bỏ lỡ danh sách homestay mới nhất năm 2025. Xem thêm tại link dưới.",
    reaction_count: 75,
    comment_count: 12,
    share_count: 3,
    image_url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=600&q=80",
    type: "Facebook"
  },
  {
    posturl: "https://example.com/post/1",
    name: "Nguyễn Văn A",
    content_created: "06 Jun 2025 15:46",
    content: "Tìm homestay · Các điểm đến có homestay nổi bật · Các quốc gia · Khu vực · CÀI ĐẶT · THÔNG TIN · CÁC TRANG HỮU ÍCH.",
    reaction_count: 120,
    comment_count: 15,
    share_count: 5,
    image_url: "https://scontent.fhan15-1.fna.fbcdn.net/v/t51.75761-15/476876734_18019378451661617_2776938907807016490_n.jpg?stp=dst-jpegr_s600x600_tt6&_nc_cat=110&cb=64d46a15-5a82848f&ccb=1-7&_nc_sid=127cfc&_nc_ohc=_UfpqEB-lcAQ7kNvwEOsEDQ&_nc_oc=Adl49zlAlywTTbNyQjTK9xtP1nQHdaHjvVFq-OfG2siikY0TADXnr9rm1Xp5dsz_B48&_nc_zt=23&se=-1&_nc_ht=scontent.fhan15-1.fna&_nc_gid=pkZb7-hBhX14wQtJtSQAfQ&oh=00_AfMrYfkNs5jGgeL2VwH1iTKYJCJ8w2QnSWLevFZuxGKB9g&oe=6848E775",
    type: "Facebook"
  },
  {
    posturl: "https://example.com/post/2",
    name: "Trần Thị B",
    content_created: "05 Jun 2025 10:30",
    content: "Homestay ở Mỹ. 1,558 chỗ nghỉ nhà dân trong tầm tay bạn.\n\nNgày nhận phòng: T6, 6 tháng 6 2025.\nNgày trả phòng: T7, 7 tháng 6 2025.\n\nTìm ngay để có giá tốt!",
    reaction_count: 85,
    comment_count: 8,
    share_count: 2,
    image_url: "https://scontent.fhan15-1.fna.fbcdn.net/v/t51.75761-15/476363729_18018522110661617_7351455538108794898_n.jpg?stp=dst-jpegr_tt6&_nc_cat=110&cb=64d46a15-5a82848f&ccb=1-7&_nc_sid=127cfc&_nc_ohc=1uEiErzcCd0Q7kNvwFc-C5a&_nc_oc=AdkP0rzxyd7IdzJgcK2FWzl18S6ptj-AjLd2HPqvWRVA1uSOoZRhQA47EXjolqSXMj8&_nc_zt=23&se=-1&_nc_ht=scontent.fhan15-1.fna&_nc_gid=PxWBawfGdMSIgjsv33SdyA&oh=00_AfPC0t07P_2CWeUyJTDsivLcxkbgYJ00hl2IRRANs1I_3w&oe=6848F1D0",
    type: "Facebook"
  },
  {
    posturl: "https://example.com/post/3",
    name: "Phạm C",
    content_created: "04 Jun 2025 09:15",
    content: "Các homestay tốt nhất thế giới, kèm ảnh minh họa dưới đây.",
    reaction_count: 200,
    comment_count: 22,
    share_count: 11,
    image_url: "https://scontent.fhan15-2.fna.fbcdn.net/v/t51.75761-15/476381132_18018522092661617_6264513560120879763_n.jpg?stp=dst-jpegr_s600x600_tt6&_nc_cat=104&cb=64d46a15-5a82848f&ccb=1-7&_nc_sid=127cfc&_nc_ohc=yGkA31-UxIsQ7kNvwGRDIuX&_nc_oc=AdlOVAkdoK0da70NvlhvM2EB_mWCk11b1asQPeM5FEK4h5ghXd2X531UDkV0i5xXOg4&_nc_zt=23&se=-1&_nc_ht=scontent.fhan15-2.fna&_nc_gid=GblZoQZ9v0XrsULvPluSRg&oh=00_AfMbNidBmTPgwJejwzjNujXpnYMxpbczlnHEX050Z9ODTg&oe=68490464",
    type: "Facebook"
  },
  {
    posturl: "https://example.com/post/4",
    name: "Lê D",
    content_created: "03 Jun 2025 18:00",
    content: "Mình vừa thử homestay ở Đà Lạt, cực kỳ ấm cúng và sạch sẽ. Đánh giá 5 sao!\n\nẢnh thực tế bên dưới.",
    reaction_count: 45,
    comment_count: 5,
    share_count: 1,
    image_url: "https://scontent.fhan15-1.fna.fbcdn.net/v/t51.75761-15/479169602_18019131143661617_1272003635435910766_n.jpg?stp=dst-jpegr_tt6&_nc_cat=101&cb=64d46a15-5a82848f&ccb=1-7&_nc_sid=127cfc&_nc_ohc=iY6VaON_mPYQ7kNvwEj5m20&_nc_oc=Admbqibt8JqMKT2FhhCnT2GBBzmLDSviittjSEsAGiwjcr1PWILItrifEqcw41z-Wpg&_nc_zt=23&se=-1&_nc_ht=scontent.fhan15-1.fna&_nc_gid=xifSGzw7CrFjfGg29Dmgiw&oh=00_AfP-XXPI6m3I_hID4ZkOQmzEIhqvkSnMD5vhpNJgRNCJmw&oe=6848E391",
    type: "Facebook"
  },
  {
    posturl: "https://example.com/post/5",
    name: "Phan E",
    content_created: "02 Jun 2025 14:45",
    content: "Không thể bỏ lỡ danh sách homestay mới nhất năm 2025. Xem thêm tại link dưới.",
    reaction_count: 75,
    comment_count: 12,
    share_count: 3,
    image_url: "https://scontent.fhan15-2.fna.fbcdn.net/v/t51.75761-15/478750761_18019131122661617_7305438062585453190_n.jpg?stp=dst-jpegr_s600x600_tt6&_nc_cat=100&cb=64d46a15-5a82848f&ccb=1-7&_nc_sid=127cfc&_nc_ohc=A6cSnF8z7zsQ7kNvwHI9uER&_nc_oc=AdlitPGfcTiDslaQizAs8POZR1aGV7LVlszfuxYR2UvMsqogAxet8JQX73vr-CjKsrs&_nc_zt=23&se=-1&_nc_ht=scontent.fhan15-2.fna&_nc_gid=pkZb7-hBhX14wQtJtSQAfQ&oh=00_AfPOmI0QqVRWSfyC4bcyCnX34zr315l-2nVzS8TYeteZ7Q&oe=6848EA0B",
    type: "Facebook"
  },
  {
    posturl: "https://example.com/post/1",
    name: "Nguyễn Văn A",
    content_created: "06 Jun 2025 15:46",
    content: "Tìm homestay · Các điểm đến có homestay nổi bật · Các quốc gia · Khu vực · CÀI ĐẶT · THÔNG TIN · CÁC TRANG HỮU ÍCH.",
    reaction_count: 120,
    comment_count: 15,
    share_count: 5,
    image_url: "https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/481258006_1691221934766775_3317862982139265656_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=102&cb=64d46a15-5a82848f&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=pgEJN4kp5bAQ7kNvwGk4Za5&_nc_oc=AdmVKe0V-9y1mZ6mYOSbv1JnZ59yHcmfn6QgkRTa8uWHcqwmggWZ8rKmEHDu1VCLOxg&_nc_zt=23&_nc_ht=scontent.fhan15-1.fna&_nc_gid=sC8mufLH71VkXohmsQ0zNA&oh=00_AfN8GmLOXd8_lewEsuOqOCRR31fkDtvUnfTvszAULKOf_Q&oe=68490A0C",
    type: "Facebook"
  },
  {
    posturl: "https://example.com/post/2",
    name: "Trần Thị B",
    content_created: "05 Jun 2025 10:30",
    content: "Homestay ở Mỹ. 1,558 chỗ nghỉ nhà dân trong tầm tay bạn.\n\nNgày nhận phòng: T6, 6 tháng 6 2025.\nNgày trả phòng: T7, 7 tháng 6 2025.\n\nTìm ngay để có giá tốt!",
    reaction_count: 85,
    comment_count: 8,
    share_count: 2,
    image_url: "https://scontent.fhan15-1.fna.fbcdn.net/v/t51.75761-15/489528323_18025781786661617_3633906030401627829_n.jpg?stp=dst-jpegr_s640x640_tt6&_nc_cat=108&cb=64d46a15-5a82848f&ccb=1-7&_nc_sid=127cfc&_nc_ohc=yvA7IYeBLyAQ7kNvwEfh9K-&_nc_oc=Adl8ewnJpcE3JDD5LaKnIFzEecKXU1u-5Z1YANlrnsg8IGaxCejWF1YQtvlzeU9TkW4&_nc_zt=23&se=-1&_nc_ht=scontent.fhan15-1.fna&_nc_gid=LU7sOoKYMo1BVJI5fIkzWA&oh=00_AfPHEdiHaWxIDtxicU9guMqC_swbs7TkeKnbhjmRfGoF3g&oe=6848F9D4",
    type: "Facebook"
  },
  {
    posturl: "https://example.com/post/3",
    name: "Phạm C",
    content_created: "04 Jun 2025 09:15",
    content: "Các homestay tốt nhất thế giới, kèm ảnh minh họa dưới đây.",
    reaction_count: 200,
    comment_count: 22,
    share_count: 11,
    image_url: "https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-6/502967014_1020845946818932_5084975352060936808_n.jpg?_nc_cat=100&cb=64d46a15-5a82848f&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Kp3EZkf6mkYQ7kNvwGkgCk8&_nc_oc=Adlsypg-VCSVFvnQoPSzXptEtuUECmQuShD2Y_kSV7_IdI1oIYgW10VKtBlq95h_rjw&_nc_zt=23&_nc_ht=scontent.fhan5-11.fna&_nc_gid=piOGLRWz1GlqsG_SkHEUoA&oh=00_AfMLSiDqt3DemU77xXpZ3oBTNcHZdz093ju8hghvwAu4_A&oe=6848DF52",
    type: "Facebook"
  },
  {
    posturl: "https://example.com/post/4",
    name: "Lê D",
    content_created: "03 Jun 2025 18:00",
    content: "Mình vừa thử homestay ở Đà Lạt, cực kỳ ấm cúng và sạch sẽ. Đánh giá 5 sao!\n\nẢnh thực tế bên dưới.",
    reaction_count: 45,
    comment_count: 5,
    share_count: 1,
    image_url: "https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-6/500554407_1020845916818935_2006968330620344034_n.jpg?_nc_cat=108&cb=64d46a15-5a82848f&ccb=1-7&_nc_sid=127cfc&_nc_ohc=o2IgM4C2RTwQ7kNvwHWxBs5&_nc_oc=AdlsgDW4NkvghGCtucYSUyMLYvKhyzvzQysq0ifJ-qhyLEHiZsTSBemga83Zs6ryIPw&_nc_zt=23&_nc_ht=scontent.fhan5-8.fna&_nc_gid=g5G_bG4LN5VWWDJGzCWkyw&oh=00_AfNL7hkrDV1kh2cxbwpWhkX3Q2PMHm6YbouDZRkpq4Z5wQ&oe=6848F183",
    type: "Facebook"
  },
  {
    posturl: "https://example.com/post/5",
    name: "Phan E",
    content_created: "02 Jun 2025 14:45",
    content: "Không thể bỏ lỡ danh sách homestay mới nhất năm 2025. Xem thêm tại link dưới.",
    reaction_count: 75,
    comment_count: 12,
    share_count: 3,
    image_url: "https://scontent.fhan5-6.fna.fbcdn.net/v/t39.30808-6/502486791_1020845903485603_4160805932328853595_n.jpg?_nc_cat=105&cb=64d46a15-5a82848f&ccb=1-7&_nc_sid=127cfc&_nc_ohc=es43xiexdbMQ7kNvwFAZ6EK&_nc_oc=AdkSvrlXfVl3flZWIiS3zuBj117K4-wl5rNkckmlbtLalNLH-Sjw1z27GLaQprSf7Fs&_nc_zt=23&_nc_ht=scontent.fhan5-6.fna&_nc_gid=LAVN5LmUg-T0DePzqZ8qMw&oh=00_AfOMPs55t22bhvKNx0NI_zJAgXfZLxRCABTLcl2OeyWJfw&oe=6848F75F",
    type: "Facebook"
  },
];
