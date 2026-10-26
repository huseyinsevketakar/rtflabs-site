# RTFLab web sitesi

Sade, statik bir site: derleme (build) adımı yok, sunucu gerekmiyor. Dosyaları herhangi bir statik barındırma servisine olduğu gibi yüklemek yeterli.

## Dosyalar

| Dosya | İçerik |
|---|---|
| `index.html` | Ana sayfa |
| `ekip.html` | Kurucu ekip sayfası |
| `iletisim.html` | İletişim, mesaj hazırlayıcı ve sık sorulanlar |
| `site.css` | Tüm sayfaların ortak stili |
| `site.js` | TR/EN dil seçimi, mobil menü, kopyalama ve mesaj hazırlayıcı |
| `favicon.svg` | Tarayıcı sekmesi simgesi |
| `media/` | Tanıtım videosu, video kapağı, ekip fotoğrafı ve vesikalıklar |
| `.nojekyll` | GitHub Pages'in dosyaları olduğu gibi yayınlaması için (boş dosya, silmeyin) |

Bilgisayarda denemek için `index.html` dosyasını tarayıcıda açın.

## GitHub Pages ile yayınlama

1. GitHub'da yeni bir repo açın (ör. `rtflabs-site`). Ücretsiz hesapta GitHub Pages için repo **public** olmalı.
2. "Add file → Upload files" ile bu klasördeki her şeyi reponun **köküne** yükleyin (`index.html` doğrudan kökte olmalı, bir alt klasörde değil). `.nojekyll` gizli dosya olduğu için sürükle-bırakta görünmeyebilir; görünmezse "Add file → Create new file" ile `.nojekyll` adında boş bir dosya oluşturun.
3. Settings → Pages → Source: "Deploy from a branch", Branch: `main`, klasör: `/ (root)` → Save.
4. Birkaç dakika sonra site `https://<kullanıcı-adı>.github.io/rtflabs-site/` adresinde açılır.

## Alan adını bağlama (GitHub Pages)

1. Settings → Pages → Custom domain alanına alan adını yazın (ör. `rtflab.com`) → Save.
2. Alan adını aldığınız firmanın DNS panelinde:
   - Kök alan adı (`rtflab.com`) için dört **A** kaydı: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `www` için bir **CNAME** kaydı: `<kullanıcı-adı>.github.io`
3. DNS yayıldıktan sonra (birkaç dakika ile birkaç saat) Settings → Pages'te "Enforce HTTPS" kutusunu işaretleyin.

## Alternatif: Netlify, Vercel veya Cloudflare Pages

GitHub reposunu bu servislerden birine bağlayın. Build komutu boş kalsın, yayın klasörü (publish directory) kök dizin olsun. Alan adı bağlama adımlarını servis kendi panelinde gösterir.

## Sık yapılacak değişiklikler

- **E-posta adresi:** `huseyinsevketakar@gmail.com` adresini tüm dosyalarda "bul ve değiştir" ile değiştirin (`index.html`, `ekip.html`, `iletisim.html`, `site.js`).
- **LinkedIn:** Şirket sayfası (`https://www.linkedin.com/company/rtflab/`) iletişim sayfasında ve tüm sayfaların alt menüsünde bağlı.
- **Metinler:** Türkçe metinler HTML dosyalarında, İngilizceleri `site.js` içindeki `EN` sözlüğünde. Bir metni değiştirirken aynı `data-i18n` anahtarının İngilizcesini de güncelleyin.
- **Kalite paneli** bölümündeki rakamlar temsilidir ve öyle etiketlenmiştir; gerçek veri olmadan değiştirmeyin.
