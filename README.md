
# Bursa Engelliler Kültür Derneği Resmi Web Sayfası

[Bursa Engelliler Kültür Derneği](https://bursaengellilerkulturdernegi.com) , Türkiye Cumhuriyeti vatandaşı olan tüm engellilerin eğitim ve sağlık başta olmak üzere maddi ve manevi tüm ihtiyaçlarına katkıda bulunarak sosyal dayanışmalarını sağlamak amacıyla kurulmuştur. Bünyesinde toplanan engelli vatandaşlar için din, dil, ırk, bölge ve cinsiyet ayırımı yapmaksızın gerekli tüm çalışmaları yapar.

## Yapılandırma:

Herhangi bir şablonu çalıştırmadan önce, her paketin kök dizininde tanımlanan `.env.development` dosyasındaki bazı `env` değerlerini ayarlamanız gerekir.

```bash
GATSBY_DISQUS_NAME="put_your_disqus_name_here"
MAILCHIMP_ENDPOINT="put_your_mailchimp_endpoint_here"
GOOGLE_ANALYTICS_TRACKING_ID="put_your_google_analytics_tracking_id_here"
INSTAGRAM_USER_NAME="put_your_instagram_user_name_here"
INSTAGRAM_USER_NAME_ID="put_your_instagram_user_name_id_here"
INSTAGRAM_ID="put_your_instagram_id_here"
INSTAGRAM_ACCESS_TOKE="put_your_instagram_access_token_here"
```

**Gatsby Js sunucusunu çalıştırmak istiyorsanız, StoryHub Klasöründe aşağıdaki komutu çalıştırın**

```bash
$ yarn
$ yarn dev:modern-agency
```

Ardından tarayıcınızda `localhost:8000` adresine gidiniz ve `Modern Agency blog`u orada bulacaksınız. 

NOT: Diğer paketler de aynı kuralları izleyecektir (daha fazla bilgi için lütfen `package.json`a bakın)

**Content**

İçerik klasöründe iki klasör bulacaksınız: ‘assets’ and ‘blog’

1. assets

Resimler, videolar gibi tüm varlıkları bu klasörde bulacaksınız.

2. blog

Blog yazılarını bu klasörde bulacaksınız. Her klasör tek bir gönderidir. Her klasörde bir `index.md` dosyası bulacaksınız. Bu `index.md` dosyasına yazınızı yazabilirsiniz. Gönderiniz ile ilgili görsellerinizi bu klasörde tutabilirsiniz.

**src**

'src' klasörünün içinde bileşenler, kapsayıcılar, resimler, sayfalar, şablonlar, tema gibi bazı klasörler bulacaksınız.

**components**

src->component klasöründe, sadece bu ajans-blog şablonu için gerekli olan bileşeni bulacaksınız. Tüm kodlar TypeScript Containers içinde yazılmıştır.

src->containers klasöründe tüm kodlarımızı parça parça yazdık. Ayrıca style.js dosyasını da bulacaksınız. Tüm kodlar TypeScript ile yazılmıştır.

1. Pages

src->pages klasöründe, index.tsx , 404.tsx vb. gibi bu şablonda kullanılan tüm sayfaların rotalarını bulacaksınız.

2. Templates

Tüm sayfa şablonları buraya yazılır

3. Theme

colors.tsx : Bu dosyada, belirli açılış sayfalarınız için tüm özel renkleri saklayabilirsiniz. 

CustomVariant.tsx : Özel varyantlar yazmak için. 

Index.tsx : tüm stil aksesuarları.

## Blog yazısı nasıl yazılır?

Bir blog yazısı yazmak için lütfen packages -> modern-agency-blog -> content -> blog klasörü ve bir ada sahip bir klasör oluşturun. Ardından index.md adında bir md dosyası oluşturun ve gönderinizi bu biçimde yazın.

```
title: Sharing content that makes other people engage date: '2019-01-01T23:46:37.121Z'

cover: './preview.png'
tags: ['markdown', 'test', 'unity']

slug: 'sharing-content-that-makes-other'


Technology companies can do more, but as long as these trends continue, there will be incentives for companies to exploit them for profit. Both technology companies and libraries need to recognize that a core aspect of the problem is social in nature. The most obvious tool that libraries have at their disposal is the promotion of information literacy.
```

## Instagram Token

Instagram belirteci eklemek için packages -> modern-agency-blog -> gatsby-config.js -> resolve:gatsby-source-instagram'a gidin instagram kullanıcı adınızı, erişim, kimlik belirtecinizi koyun. Daha fazla bilgi için lütfen bu bağlantıyı kontrol edin https://www.gatsbyjs.org/packages/gatsby-source-instagram

## Disqus Name

Disqus belirteci eklemek için packages -> modern-agency-blog -> env.development ve packages -> modern-agency-blog env.production'a gidin ve Disqus adınızı buraya yazın.

## Mailchimp Integration

Mailchimp entegrasyonu eklemek için packages -> modern-agency-blog -> gatsby-config.js -> resolve:gatsby-plugin-mailchimp'a gidin ve uç noktanızı oraya koyun. Daha fazla bilgi için lütfen bu bağlantıyı kontrol edin https://www.gatsbyjs.org/packages/gatsby-plugin-mailchimp

## Deployment

Bu tamamen bir Gatsby Markdown Projesidir, bu nedenle desteklenen sağlayıcılardan herhangi birine ev sahipliği yapabilir. https://www.gatsbyjs.org/docs/deploying-and-hosting/

## Not

1. puppeteer bazı sorunlara neden olur, bunu düzeltmek için başvurmanız gerekebilir:

- Ağ bağlantınızı açmayı/kapatmayı deneyin
- Cihazınızı yeniden başlatın
- Çözülmezse, yeniden çalıştırmayı deneyin

```
PUPPETEER_DOWNLOAD_HOST=https://npm.taobao.org/mirrors yarn
or
sudo npm install puppeteer --unsafe-perm=true --allow-root
```
