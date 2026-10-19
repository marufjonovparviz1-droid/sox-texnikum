# So‘x tuman texnikumi

O‘zbek tilidagi moslashuvchan, rasmiy ta’lim sayti dizayni. HTML, CSS va oddiy JavaScript asosida; hech qanday yig‘ish bosqichi talab etilmaydi.

`dist/index.html` sahifani ochadi. Mahalliy HTTP ko‘rish uchun `node preview.mjs` buyrug‘i `http://127.0.0.1:4173` manzilida xizmat qiladi.

Qidiruv, ta’lim yo‘nalishlari filtri, yo‘nalishlar haqida oynalar, axborot oynalari, mobil menyu, matn o‘lchami va yuqori kontrast imkoniyatlari mavjud. Ariza tugmalari rasmiy my.edu.uz portaliga olib boradi.

## Rasmiy ma’lumotlar

Muassasa nomi Lex.uz PF-190 ilovasiga tayanadi. Yo‘nalishlar 2025/2026-yil qabul hujjatlaridan olingan; joriy qabul shartlari sifatida ko‘rsatilmaydi. Manbalar saytdagi “Manbalar va suratlar” oynasida mavjud.

Rasmiy foydalanishdan oldin texnikum ma’muriyati joriy qabul ro‘yxati, aniq manzil, telefon, elektron pochta, muassasa ramzi va yangiliklarni tasdiqlab to‘ldirishi mumkin. Shaxsiy ma’lumot yig‘uvchi forma va soxta murojaat yuborish yo‘q.

Fotosuratlar Pexels’dan olingan tabiiy tasviriy suratlar. Ular aynan texnikum binosi yoki o‘quvchilari sifatida ko‘rsatilmagan. Kreditlar `dist/assets/credits.txt` faylida. Saytdagi ramz — dizayn uchun yaratilgan kitob va akademik qalpoq belgisi.

## GitHub va Netlify orqali joylash

1. ZIPni kompyuterda oching. ZIP faylining o‘zini GitHubga yuklamang.
2. GitHubda yangi `sox-texnikumi` repozitoriysini yarating. README qo‘shishni tanlasangiz, fayl yuklash menyusi darhol paydo bo‘ladi.
3. `Add file → Upload files` orqali `dist` papkasini (ichidagi barcha fayllari bilan), `netlify.toml` va ushbu README faylini repozitoriy boshiga yuklang. `Commit changes` bilan saqlang.
4. Tuzilma `dist/index.html`, `dist/style.css`, `dist/app.js`, `dist/assets/…` va bosh papkada `netlify.toml` ko‘rinishida qolishi kerak. Saytni yana bir tashqi papka ichiga yuklamang.
5. Netlifyda `Add new project → Import an existing project → GitHub` ni tanlang va shu repozitoriyni ulang.
6. Branch: `main`; Base directory: bo‘sh; Build command: bo‘sh; Publish directory: `dist`. `netlify.toml` fayli `dist`ni avtomatik belgilaydi. Bu oddiy HTML sayti uchun yig‘ish buyrug‘i kerak emas.
7. `Publish`ni bosing. Loyiha ko‘rinishi `Public` ekanini tekshiring va berilgan havolani hisobingizga kirmagan oynada sinang.
8. Keyingi o‘zgarishlarni GitHubdagi `main` tarmog‘iga saqlang. Netlify ularni avtomatik joylaydi.

GitHubda sayt kodi, Netlifyda esa internetga ochiq nusxasi turadi. Kompyuteringizni doim yoqib qo‘yish talab qilinmaydi. Xizmatdan foydalanish hosting hisobingiz va amaldagi tarif shartlariga bog‘liq.

GitHubsiz bir martalik joylash uchun: Netlify hisobingizga kiring, https://app.netlify.com/drop sahifasiga `dist` papkasini tashlang. Bu yo‘l bilan yangilashda `dist` papkasini qayta yuklash kerak bo‘ladi.

Rasmiy yo‘riqnomalar:
- https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository
- https://docs.netlify.com/start/quickstarts/deploy-from-repository/
- https://docs.netlify.com/build/configure-builds/file-based-configuration/
