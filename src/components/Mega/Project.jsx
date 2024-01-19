import React from "react";
import "./Project.css";
import img1 from "../../assets/img/mega-nedir.jpeg";
import img2 from "../../assets/img/proje1.jpeg";
import img3 from "../../assets/img/proje2.jpeg";

function Project() {
  return (
    <>
      <div>
        <section className="mega">
          <img src={img1} className="img1" />
          <div className="container">
            <div className="row">
              <h2 className="title">Meram Mega Akademi Nedir?</h2>
              <p className="w_100">
                Toplumun hayatındaki ilerleme ve aralıkların azaltılması için
                bir neslin kendinden sonraki nesle aktaracağı deneyim ve
                birikimlerle mümkün olacağı bilinen temel bir gerçektir.
                Günümüzde giderek karmaşıklaşan bilgi ve saklanabilen ve bu
                bilgilerin hızlı değişimine ayak uydurabilen yetiştirilmesine
                ihtiyaç duyulmaktadır. Bu yetenek YENİ NESİL EĞİTİM PROJESİ ile
                hem dijital bir çağda doğmuş ve büyümüş olan “yeni neslin” yani
                z kuşağı ve Alfa kuşağının farklılaşan eğitim beklentilerine
                cevap vermek hem de önceki nesillerin kültürel değişimini
                gerçekleştirecek ve nesiller arası ilişkiyi kuvvetlendirecek
                “yeni” bir çalışmadır. Temel eğitim, orta öğretim, yüksek
                öğretim kurumları, sivil toplum örgütleri ve meslek
                birliklerinin birleştirilmesinde karakter eğitimi
                gerçekleştirilecektir.Meram Gelişim Akademisinin devamı olan
                MEGA en büyük anlamına gelmektedir. Bu kelimenin tam anlamıyla
                MEGA kaybı, tipik olarak hitap ettiği hedef kitlenin genişliğine
                ve içeriğinin büyüklüğüne de vurgu yapmaktadır.
              </p>
            </div>
          </div>
        </section>
        <section id="about" className="about section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-12">
                <div className="about-img">
                  <img src={img2} alt="" className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
                <div className="about-text">
                  <h2 className="title">Bilimin Dilinden</h2>
                  <p>
                    Milli teknoloji hamlesi kapsamında üç yıldır belediyemizin
                    okullarda yürüttüğü Bilim Kurdu projesi çalışmalarının daha
                    kapsamlı ve sistemli olması için üniversite ve milli eğitim
                    müdürlüğü ortaklığı ile planlanmış spesifik bir projedir.
                    Proje kapsamında 2021 yılı itibari ile gerçekleştirilmesi
                    hedeflenen milli teknoloji istasyonu hem teorik hem de
                    pratik eğitimlerin profesyonel olarak uygulanacağı ve
                    yarışma takımlarının yetiştirileceği bir program olarak
                    tasarlanmaktadır. Ülkemizin dışa bağımlılığını azaltmak için
                    geliştirdiği milli teknoloji strateji eylem planına uygun
                    olarak gerçekleştirdiğimiz Bilim Kurdu Projemizin KOP
                    aracılığı ve işbirliği ile daha üst düzeye taşınmasını
                    amaçlamaktayız. 2020 yılı Teknofest ve Tübitak proje
                    yarışmalarında Türkiye birinciliği ve ikinciliği alan proje
                    öğrencilerimizin sayısının daha da artması için projemizi
                    ciddi bir ihtiyaç olarak görmekteyiz. Tüm öğrencilere
                    bilhassa üstün yetenekli çocuklarımıza; tıp, astronomi,
                    ziraat, mühendislik, robotik, matematik gibi bilimleri ve
                    islam bilim adamları tarihini yayın, üniversite
                    uygulamaları, bilgi yarışmaları, bilim münazaraları, akıl
                    zeka oyunları desteği ile öğreterek milli ve özgüvenli bir
                    nesil yetiştirmek.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </section>
        <section id="about" className="about section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-12">
                <div className="about-img">
                  <img src={img3} alt="" className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
                <div className="about-text">
                  <h2 className="title">Meram’da Şampiyon Sporcuları Yetişiyor </h2>
                  <p>
                    Günümüz koşullarında
                    çocukların ve gençlerin iyi bir birey olarak yetişmesinde;
                    İnternet, televizyon ve bilgisayar oyunları gibi
                    eğlencelerin kişileri hareketsiz hale getirdiği dönemde
                    obezite riskini azaltacak sağlıklı bir hayata devam
                    edecekleri Yaz Spor Okullarımız ilçemiz çocukları için
                    kurulmuştur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Project;
