<template>
  <section class="section hero" v-if="home">
    <div class="container hero__in">
      <div class="hero__row">
        <div class="hero__col hero__col--info">
          <div class="hero__info">
            <h1 class="hero__title year-cap" v-html="home.acf.hero_title"></h1>
            <div class="hero__descr" v-html="home.acf.hero_txt"></div>
            <div class="hero__btn_w gap-4">
              <btn
                name="Получить консультацию"
                size="large"
                @click.prevent="openModal('form', 'call')"
              />
              <btn
                name="Отправить проект на просчет"
                size="large"
                @click.prevent="openModal('form', 'price')"
              />
            </div>
          </div>
        </div>
        <div class="hero__col hero__col--img">
          <div class="hero__img_w">
            <img class="hero__img" :src="home.acf.hero_img.url" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <PromoSlider />
  <QuizForm />

  <section class="section system" id="about">
    <div class="container system__in">
      <div class="system__row">
        <div class="system__col system__col--img">
          <h2 class="system__title">Технология строительства "МСБК"©</h2>
          <div class="system__img_box lg:block hidden">
            <div class="system__img_w">
              <img
                class="system__img"
                src="http://2klstk.ru/wp-content/uploads/2024/11/1_post_2020_logo-scaled-1.jpg"
              />
            </div>
          </div>
        </div>
        <div class="system__col system__col--info">
          <div class="system__info_img_box">
            <div class="system__info_img_w">
              <img
                class="system__info_img"
                src="http://2klstk.ru/wp-content/uploads/2024/11/e4a09014a4376b4f05d51bb1613e3890.jpg"
              />
            </div>
            <div class="system__info_img_w">
              <img
                class="system__info_img"
                src="http://2klstk.ru/wp-content/uploads/2024/11/33de5e035ebde7e9541827594a3790c3.jpg"
              />
            </div>
          </div>
          <div class="system__info_about">
            <div class="system__info_about_title">
              Проектирование и изготовление металлических каркасов домов
            </div>
            <div class="system__info_about_descr">
              Возведение каркаса здания из металлоконструкции, собранной из оцинкованной
              стали, произведенного автоматической линией с технологическими отверстиями и
              пазами. Каркас с обеих сторон обшивается плитным материалом, который
              является несъемной опалубкой, полости заполняются полистиролбетоном, который
              делает конструкцию монолитной и теплой
            </div>
            <div style="display: inline-flex">
              <btn @click.prevent="openModal('form')" name="Получить консультацию" />
            </div>
          </div>
          <div class="system__info_about system__info_about--green">
            <div class="system__info_about_title">МСБК</div>
            <div class="system__info_about_descr">
              Иновационная технология строительства жилых домов и коммерческих зданий
              комфорт-класса
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section adv">
    <div class="container adv__in">
      <h2 class="adv__title"><strong>ПРЕИМУЩЕСТВА ТЕХНОЛОГИИ </strong> «МСБК»</h2>
      <div class="adv__info_row">
        <div class="adv__info">
          По теплоизоляционным свойствам полистиролбетон значительно превосходит кирпич и
          является лучшим среди легких бетонов. При заливке полистиролбетона исключается
          возникновение мест с повышенным теплообменом между наружным и внутренним
          контуром здания на протяжении всего периода эксплуатации.
        </div>
        <ul class="adv__info_list">
          <li class="adv__info_item">Высокая скорость возведения</li>
          <li class="adv__info_item">Идеальная геометрия стен и потолка</li>
          <li class="adv__info_item">Универсальность</li>
          <li class="adv__info_item">Экологичность</li>
          <li class="adv__info_item">Безупречная шумоизоляция</li>
          <li class="adv__info_item">Энергоэффективность</li>
          <li class="adv__info_item">Пожаропрочность</li>
          <li class="adv__info_item">Сейсмоустойчивость</li>
        </ul>
      </div>
      <div class="adv__about">
        <div class="adv__about_descr">
          <p>
            Древесная омыленная смола (СДО), входящая в состав полистиролбетона, подавляет
            рост патогенной микрофлоры (бактерий, грибов), т.е. препятствует образованию
            плесени и гниению.
          </p>
          <p>
            Входящие в состав полистиролбетона компоненты безопасны для здоровья и
            окружающей среды: вспененный полистирол используется для изготовления упаковок
            для продуктов, одноразовой посуды, детскихигрушек, одноразовых медицинских
            инструментов.
          </p>
          <p>
            Полистиролбетон в Двойном каркасе МСБК не препятствуютвоздухообмену, т. е.
            стены способны «дышать», а благодаря высокой паропроницаемости — регулировать
            влажность воздуха.
          </p>
        </div>
        <div class="adv__img_w">
          <img
            class="adv__img lg:aspect-auto aspect-square"
            src="http://2klstk.ru/wp-content/uploads/2024/11/f0d4b15779f4d028d7ebd3524f2564e5.jpg"
          />
        </div>
      </div>
      <ul class="adv__adv_list">
        <li class="adv__adv_item">
          <div class="adv__adv_title">
            Долговечность свыше 100 лет и сейсмостойкость до 9 баллов
          </div>
          <div class="adv__adv_descr">
            обеспечат капитальный свайно-ростверковый фундамент и монолитная сталебетонная
            стена
          </div>
        </li>
        <li class="adv__adv_item">
          <div class="adv__adv_title">Экономия на отоплении и комфортный микроклимат</div>
          <div class="adv__adv_descr">
            благодаря высокой энергоэффективности строения, заполненного теплоизолирующего
            и шумоизолирующего материала полистиролбетона
          </div>
        </li>
        <li class="adv__adv_item">
          <div class="adv__adv_title">Безопасность</div>
          <div class="adv__adv_descr">
            все материалы, использующиеся для строительства каркасно-монолитных домов,
            имеют высокий уровень пожарной и экологической безопасности
          </div>
        </li>
        <li class="adv__adv_item">
          <div class="adv__adv_title">Внешний вид на любой вкус</div>
          <div class="adv__adv_descr">
            от суперсовременного навесного фасада до классической кирпичной кладки с
            возможностью полного обновления фасада в процессе эксплуатации
          </div>
        </li>
        <li class="adv__adv_item">
          <div class="adv__adv_title">Срок строительства дома</div>
          <div class="adv__adv_descr">
            от 60 дней – это инновационный подход к возведению жилья, который сочетает в
            себе современные технологии и стандартные строительные процедуры. Сокращает
            время без ущерба для качества.
          </div>
        </li>
        <li class="adv__adv_item">
          <div class="adv__adv_title">Экономия времени и денег на ремонт и отделку</div>
          <div class="adv__adv_descr">
            безусадочная технология позволит приступить к отделке сразу же после
            возведения коробки дома, технология обеспечит идеально ровные углы и
            поверхности, готовую предчистовую отделку
          </div>
        </li>
      </ul>
    </div>
  </section>
  <Projects />
  <!-- <PromoBanner /> -->
  <section class="section imagine">
    <div class="container imagine__in">
      <h2 class="imagine__title">
        <strong>Представьте, как уже завтра</strong> <br />
        вы просыпаетесь в доме вашей мечты
      </h2>
      <ul class="imagine__list">
        <li class="imagine__item">
          <div class="imagine__img_w">
            <img
              class="imagine__img"
              src="http://2klstk.ru/wp-content/uploads/2025/07/chatgpt-image-8-iyul.-2025-g.-16_20_41.png"
              alt="Семейный вечер на террасе"
            />
          </div>
          <div class="imagine__info">
            <div class="imagine__item_title">Тёплые вечера на собственной террасе</div>
            <div class="imagine__item_descr">
              Наслаждайтесь барбекю, ароматом цветов и разговорами до поздней ночи под
              звёздным небом в кругу семьи.
            </div>
          </div>
        </li>

        <li class="imagine__item">
          <div class="imagine__img_w">
            <img
              class="imagine__img"
              src="http://2klstk.ru/wp-content/uploads/2025/07/chatgpt-image-8-iyul.-2025-g.-16_17_59.png"
              alt="Вид на летний участок"
            />
          </div>
          <div class="imagine__info">
            <div class="imagine__item_title">Живописный участок и собственный сад</div>
            <div class="imagine__item_descr">
              Выращивайте фрукты и овощи, ухаживайте за цветами и отдыхайте в тени
              деревьев рядом со своим домом в Краснодаре.
            </div>
          </div>
        </li>

        <li class="imagine__item">
          <div class="imagine__img_w">
            <img
              class="imagine__img"
              src="http://2klstk.ru/wp-content/uploads/2025/07/chatgpt-image-8-iyul.-2025-g.-16_23_34.png"
              alt="Дети играют во дворе"
            />
          </div>
          <div class="imagine__info">
            <div class="imagine__item_title">Безопасное детство на свежем воздухе</div>
            <div class="imagine__item_descr">
              Постройте дом, где дети будут играть во дворе, кататься на велосипедах и
              проводить лето с пользой и радостью.
            </div>
          </div>
        </li>
      </ul>

      <div class="btn-bottom" style="text-align: center">
        <btn
          name="Зафиксировать цену"
          size="large"
          style="display: inline-flex"
          @click.stop="openModal('sale')"
        />
      </div>
    </div>
  </section>
  <SystemsSlider :systems="home?.acf.case_list" :title="home?.acf?.case_title" />
  <BlockSteps />
  <!-- <section class="section step js-step-slider-w">
    <div class="section_in step__in">
      <h2 class="step__title">Как мы <strong> работаем</strong></h2>
      <div class="step__list_w">
        <Swiper
          :slides-per-view="4"
          :modules="[Navigation, Pagination]"
          :space-between="40"
          :speed="700"
          class="step__list"
          :navigation="{
            prevEl: '.js-step-navigation-prev',
            nextEl: '.js-step-navigation-next',
          }"
          :pagination="{ el: '.sys_slider__pag', clickable: true }"
          :breakpoints="{
            1200: { slidesPerView: 4, spaceBetween: 40 },
            992: { slidesPerView: 1, spaceBetween: 30 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            320: { slidesPerView: 1.2, spaceBetween: 10 },
          }"
        >
          <SwiperSlide v-for="(item, i) in steps" :key="'works-item-slide-' + item.id">
            <li class="step__card">
              <div class="step__card_info">
                <div class="step__card_title">{{ item.title }}</div>
                <div class="step__card_descr">{{ item.txt }}</div>
              </div>
            </li>
          </SwiperSlide>
        </Swiper>
        <div class="sys_slider__nav sys_slider__nav--step js-step-slider-nav">
          <button
            class="sys_slider__navigation sys_slider__navigation--prev_mod js-step-navigation-prev"
            type="button"
            aria-label="Prev slide"
          >
            <Icons icon="fluent:chevron-left-28-regular" :size="30" />
          </button>
          <button
            class="sys_slider__navigation sys_slider__navigation--next_mod js-step-navigation-next"
            type="button"
            aria-label="Next slide"
          >
            <Icons icon="fluent:chevron-right-28-regular" :size="30" />
          </button>
        </div>
      </div>
    </div>
  </section> -->
  <section class="section stage js-sys-slider-w" id="steps">
    <div class="container stage__in">
      <h2 class="stage__title">
        <strong>Посмотрите 4 этапа,</strong> как будет строиться ваш идеальный дом
      </h2>
      <div class="sys_slider__pag js-sys-pag-w"></div>
      <div class="stage__slider_w">
        <div class="stage__slider js-sys-slider">
          <Swiper
            :slides-per-view="1"
            :modules="[Navigation, Pagination]"
            :space-between="40"
            :speed="700"
            :navigation="{
              prevEl: '.js-bigstep-navigation-prev',
              nextEl: '.js-bigstep-navigation-next',
            }"
          >
            <SwiperSlide v-for="item in home?.acf.steps_list">
              <div class="stage__slide">
                <div class="stage__row">
                  <div class="stage__col stage__col--info">
                    <div class="stage__info">
                      <div class="stage__info_title">
                        {{ item.title }}
                      </div>
                      <div class="stage__info_subtitle">Включено:</div>
                      <ul class="stage__info_list">
                        <li class="stage__info_item" v-for="subitem in item.list">
                          <span class="stage__info_item_icon">
                            <svg class="icon icon_checked icon--size_mod">
                              <use
                                xlink:href="@/assets/images/sprite/sprite.svg#checked"
                              ></use></svg></span
                          ><span>{{ subitem.title }}</span>
                        </li>
                      </ul>
                    </div>
                    <div class="stage__info_about">
                      <div class="stage__info_about_item">
                        <span class="stage__info_about_item_icon">
                          <svg class="icon icon_clock icon--size_mod">
                            <use
                              xlink:href="@/assets/images/sprite/sprite.svg#clock"
                            ></use></svg></span
                        ><span>Срок: </span><strong> {{ item.dedline }}</strong>
                      </div>
                      <div class="stage__info_about_item">
                        <span class="stage__info_about_item_icon">
                          <svg class="icon icon_rub icon--size_mod">
                            <use
                              xlink:href="@/assets/images/sprite/sprite.svg#rub"
                            ></use></svg></span
                        ><span>Стоимость: </span><strong> {{ item.price }}</strong>
                      </div>
                    </div>
                  </div>
                  <div class="stage__col stage__col--img">
                    <div class="stage__img_w">
                      <img class="stage__img" :src="item.img" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div class="sys_slider__nav sys_slider__nav--step js-sys-nav-w">
          <button
            class="sys_slider__navigation sys_slider__navigation--prev_mod js-bigstep-navigation-prev"
            type="button"
            aria-label="Prev slide"
          >
            <Icons icon="fluent:chevron-left-28-regular" :size="30" />
          </button>
          <button
            class="sys_slider__navigation sys_slider__navigation--next_mod js-bigstep-navigation-next"
            type="button"
            aria-label="Next slide"
          >
            <Icons icon="fluent:chevron-right-28-regular" :size="30" />
          </button>
        </div>
      </div>
    </div>
  </section>

  <section class="section excursion">
    <div class="container excursion__in">
      <div class="excursion__row">
        <div class="excursion__col excursion__col--info">
          <div class="excursion__info_in">
            <h2 class="excursion__title">
              Приглашаем на <strong>бесплатную экскурсию</strong> по строящимся объектам
            </h2>
            <div class="excursion__subtitle">
              Поговорите с нашими строителями, узнайте больше о процессе
            </div>
            <ul class="excursion__list">
              <li class="excursion__item">
                <strong>Исследуйте</strong> используемые технологии строительства
              </li>
              <li class="excursion__item">
                <strong>Оцените</strong> качество стройматериалов
              </li>
              <li class="excursion__item">
                <strong>Задайте</strong> вопросы нашему прорабу
              </li>
            </ul>
            <ExcursionForm />
          </div>
        </div>
        <div class="excursion__col excursion__col--img">
          <div class="excursion__img_w">
            <img
              class="excursion__img"
              src="https://2klstk.ru/wp-content/uploads/2024/09/a40026533b53cfc61db1f98d9f031307.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section step js-step-slider-w">
    <div class="container step__in">
      <h2 class="step__title">
        Что о нас говорят <strong data-v-b4e148ca="">довольные клиенты</strong>
      </h2>
      <div class="step__list js-step-slider js-step-slider--review">
        <Swiper
          :slides-per-view="3"
          :modules="[Navigation, Pagination]"
          :space-between="40"
          :speed="700"
          :breakpoints="{
            1200: { slidesPerView: 3, spaceBetween: 40 },
            992: { slidesPerView: 1, spaceBetween: 30 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            320: { slidesPerView: 1.2, spaceBetween: 10 },
          }"
          :navigation="{
            prevEl: '.js-review-navigation-prev',
            nextEl: '.js-review-navigation-next',
          }"
        >
          <SwiperSlide v-for="(item, i) in home?.acf.rev" :key="'reviews-home-' + i">
            <li class="step__card">
              <div class="step__rev_info">
                <div class="step__rev_heading">
                  <div class="step__rev_img_w">
                    <img class="step__rev_img" :src="item.img" />
                  </div>
                  <div class="step__rev_about">
                    <div class="step__rev_name">
                      {{ item.name }}
                    </div>
                    <div class="step__rev_date">{{ item.date }}</div>
                  </div>
                  <div class="step__rev_icon_img_w">
                    <img class="step__rev_icon_img" :src="item.resurs" />
                  </div>
                </div>
                <div class="step__rev_descr">
                  {{ item.txt }}
                </div>
                <a class="step__rev_link" :href="item.link.url" target="_blank">{{
                  item.link.title
                }}</a>
              </div>
            </li>
          </SwiperSlide>
        </Swiper>

        <div class="sys_slider__nav sys_slider__nav--step js-step-slider-nav">
          <button
            class="sys_slider__navigation sys_slider__navigation--prev_mod js-review-navigation-prev"
            type="button"
            aria-label="Prev slide"
          >
            <Icons icon="fluent:chevron-left-28-regular" :size="30" />
          </button>
          <button
            class="sys_slider__navigation sys_slider__navigation--next_mod js-review-navigation-next"
            type="button"
            aria-label="Next slide"
          >
            <Icons icon="fluent:chevron-right-28-regular" :size="30" />
          </button>
        </div>
      </div>
    </div>
  </section>

  <section class="section step js-step-slider-w step--stage-mod">
    <div class="container step__in">
      <h2 class="step__title">
        Чтобы быть спокойным и уверенным в качественном доме -<strong
          >вам нужен надежный подрядчик</strong
        >
      </h2>
      <div class="step__subtitle">
        Обсуждается индивидуально, в зависимости от задач и их сложности
      </div>
      <div class="step__list_w">
        <Swiper
          :slides-per-view="3"
          :modules="[Navigation, Pagination]"
          :space-between="40"
          :speed="700"
          :breakpoints="{
            1200: { slidesPerView: 4, spaceBetween: 40 },
            992: { slidesPerView: 1, spaceBetween: 30 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            320: { slidesPerView: 1, spaceBetween: 10 },
          }"
          :navigation="{
            prevEl: '.js-builder-navigation-prev',
            nextEl: '.js-builder-navigation-next',
          }"
        >
          <SwiperSlide>
            <li class="step__card">
              <div class="step__card_info">
                <div class="step__card_title" data-num="1">Помощь в подборе участка</div>
              </div>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li class="step__card">
              <div class="step__card_info">
                <div class="step__card_title" data-num="2">
                  Получение разрешения на строительство
                </div>
              </div>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li class="step__card">
              <div class="step__card_info">
                <div class="step__card_title" data-num="3">
                  Помощь с подключением внешних коммуникаций
                </div>
              </div>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li class="step__card">
              <div class="step__card_info">
                <div class="step__card_title" data-num="4">
                  Сдача объекта строительства в эксплуатацию
                </div>
              </div>
            </li>
          </SwiperSlide>
        </Swiper>
        <div class="sys_slider__nav sys_slider__nav--step js-step-slider-nav">
          <button
            class="sys_slider__navigation sys_slider__navigation--prev_mod js-builder-navigation-prev"
            type="button"
            aria-label="Prev slide"
          >
            <Icons icon="fluent:chevron-left-28-regular" :size="30" />
          </button>
          <button
            class="sys_slider__navigation sys_slider__navigation--next_mod js-builder-navigation-next"
            type="button"
            aria-label="Next slide"
          >
            <Icons icon="fluent:chevron-right-28-regular" :size="30" />
          </button>
        </div>
      </div>
    </div>
  </section>

  <section class="section contact" id="contacts">
    <div class="container contact__in">
      <div class="contact__row">
        <div class="contact__col contact__col--map">
          <h2 class="contact__title">Мы на карте</h2>
          <div class="contact__row_icon">
            <span class="contact__icon">
              <svg class="icon icon_marker icon--size_mod">
                <use
                  xlink:href="@/assets/images/sprite/sprite.svg#marker"
                ></use></svg></span
            ><span>г. Краснодар, ул.Соколова, д. 66/2, офис 1</span>
          </div>
          <div class="contact__map aspect-video">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A4da2c5bba387fa2568380d887aae1c794786c9dac056a25f477cf46cd181a543&amp;source=constructor"
              width="100%"
              height="100%"
              frameborder="0"
            ></iframe>
          </div>
        </div>
        <div class="contact__col contact__col--info">
          <h2 class="contact__title">Наши контакты</h2>
          <div class="contact__day">Без выходных 9:00-18:00</div>
          <a class="contact__phone" href="tel:+79282755456">+7 928 275 54 56</a>
          <h3 class="contact__subtitle">Отвечаем мгновенно</h3>
          <ul class="contact__social_list">
            <li class="contact__social_item">
              <a class="contact__social_link" href="https://t.me/masternavse2"
                ><img
                  src="https://2klstk.ru/wp-content/themes/comfort/assets/images/contact/telegram.svg"
              /></a>
            </li>
            <li class="contact__social_item">
              <a class="contact__social_link" href="https://wtsp.cc/79282755456"
                ><img
                  src="https://2klstk.ru/wp-content/themes/comfort/assets/images/contact/whatsapp.svg"
              /></a>
            </li>
          </ul>
          <div class="contact__row_icon contact__row_icon--wheight">
            <span class="contact__icon">
              <Icons icon="clarity:envelope-solid" :size="30" /> </span
            ><a href="mailto:2klstk@mail.ru">2klstk@mail.ru</a>
          </div>
          <div class="contact__btn_w">
            <btn
              style="justify-content: center"
              name="Заказать звонок"
              size="large"
              @click="openModal('form')"
            />
          </div>
        </div>
        <!-- <div class="contacts-col">
          <h2 class="contact__title">Наши акции</h2>
          <div class="contact__col--img sales-list" @click="openModal('sale')">
            <div class="contact__img_w">
              <img
                class="contact__img"
                src="http://2klstk.ru/wp-content/uploads/2024/11/000.png"
              />
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BlockSteps from "@/components/blocks/BlockSteps.vue";
// import PromoBanner from "@/components/promo/PromoBanner.vue";
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import btn from "@/components/ui/btn.vue";
import PromoSlider from "@/components/blocks/PromoSlider.vue";
import QuizForm from "@/components/QuizForm.vue";
import Projects from "@/components/home/Projects.vue";
import SystemsSlider from "@/components/home/SystemsSlider.vue";
import ExcursionForm from "@/components/ExcursionForm.vue";
import { useModalStore } from "@/stores/useModalStore";
import { useHomeStore, useHomeStoreRefs } from "@/stores/useHomeStore";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
gsap.registerPlugin(ScrollTrigger);

const { getHome } = useHomeStore();
const { home } = useHomeStoreRefs();
const { openModal } = useModalStore();

onMounted(async () => {
  await getHome();

  // Анимация при скролле для всех секций с классом '.section'
  const sections = document.querySelectorAll(".section");

  sections.forEach((section) => {
    gsap.from(section, {
      opacity: 0,
      y: 50,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%", // Запуск анимации, когда секция видна на 80%
        toggleActions: "play none none none",
      },
    });
  });
});
</script>

<style scoped lang="scss">
.swiper-button-disabled {
  opacity: 0;
}

.step__card {
  .step__card_title {
    &:before {
      content: attr(data-num);
    }
  }
}

.contact__col--img {
  // max-width: 45rem;
  display: flex;
  align-items: flex-start;
  img {
    border-radius: 2rem;
    width: 100%;
    // height: 100%;
    object-fit: contain;
  }
}

.contact__row {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(45%, 1fr));
  gap: 6rem;

  @include bp($point_2) {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  }
}

.sales-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  gap: 1rem;

  div {
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: translateY(-0.5rem);
    }
  }
}

.btn-bottom {
  padding: 4rem 0;
}

.sys_slider__navigation {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
