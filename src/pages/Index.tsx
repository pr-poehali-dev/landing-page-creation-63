import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const PHONE = '+7 (920) 934-45-86';
const PHONE_RAW = '+79209344586';
const SEPTIC_IMG = 'https://cdn.poehali.dev/projects/8125b5b2-5274-41d4-b975-b9de294d7156/files/a4747acc-56dd-4de1-ad98-c26d74aebb2c.jpg';

const advantages = [
  {
    icon: 'PiggyBank',
    title: 'С нами Вы экономите',
    text: 'Поможем подобрать модель септика, которая Вас не подведёт и не ударит по карману. Самые низкие цены в области + скидка до 30% до 20 марта!',
  },
  {
    icon: 'FileCheck',
    title: 'Гарантия и договор',
    text: 'Перед работой заключаем договор, в котором прописываем все гарантии. Работая с нами, вы защищены от любых негативных сценариев.',
  },
  {
    icon: 'MapPin',
    title: 'Бесплатный выезд на замер',
    text: 'После заявки свяжемся и договоримся о бесплатной встрече на объекте. Она Вас ни к чему не обязывает.',
  },
  {
    icon: 'BadgeCheck',
    title: 'Мы официальные дилеры',
    text: 'Вы получаете продукцию по заводским ценам, а благодаря наработкам с поставщиками — самую низкую цену в регионе.',
  },
  {
    icon: 'Receipt',
    title: 'Прозрачная смета',
    text: 'Работаем без скрытых платежей. Вы точно понимаете, сколько потратите на всю работу — доплачивать ничего не придётся.',
  },
  {
    icon: 'Timer',
    title: 'Оперативная работа',
    text: 'Делаем монтаж септика за 1 день с момента подписания договора. Вы точно понимаете сроки сдачи объекта.',
  },
];

const steps = [
  {
    icon: 'ClipboardList',
    title: 'Оформление заявки',
    text: 'Оставляете заявку на сайте, и с Вами связывается наш менеджер.',
  },
  {
    icon: 'Ruler',
    title: 'Бесплатный выезд инженера на замер',
    text: 'Наш специалист бесплатно выезжает к Вам на участок, чтобы произвести замеры и оценить окончательную стоимость всех работ.',
  },
  {
    icon: 'Wrench',
    title: 'Договор и монтаж',
    text: 'Подписываем договор, привозим оборудование и производим монтаж септика.',
  },
  {
    icon: 'CheckCheck',
    title: 'Завершающий этап',
    text: 'Проводим обязательное тестирование системы, после чего вы принимаете работу и оплачиваете счёт.',
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="container flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Icon name="Droplets" size={24} />
            </div>
            <div className="leading-tight">
              <div className="font-display text-xl font-bold tracking-wide text-primary">BIOseptik33</div>
              <div className="text-[11px] text-muted-foreground sm:text-xs">Установка и монтаж автономных канализаций</div>
            </div>
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <div className="flex gap-2">
              <a href="https://wa.me/79209344586" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition hover:opacity-90">
                <Icon name="MessageCircle" size={20} />
              </a>
              <a href="https://t.me/" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition hover:opacity-90">
                <Icon name="Send" size={18} />
              </a>
            </div>
            <a href={`tel:${PHONE_RAW}`} className="text-right leading-tight">
              <div className="font-display text-lg font-semibold text-foreground">{PHONE}</div>
              <div className="flex items-center justify-end gap-1.5 text-xs text-secondary">
                <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-secondary" />
                сейчас доступен
              </div>
            </a>
          </div>

          <a href={`tel:${PHONE_RAW}`} className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground md:hidden">
            <Icon name="Phone" size={18} />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="absolute -right-20 -top-20 -z-10 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="container grid items-center gap-10 py-14 lg:grid-cols-2 lg:py-20">
          <div className="animate-fade-up">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-1.5 text-sm font-semibold text-accent-foreground">
              <Icon name="Flame" size={16} className="text-accent-foreground" />
              Скидка до 30% только до 20 марта
            </div>
            <h1 className="font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Установим септик <span className="text-primary">за 1 день</span> с гарантией и скидкой до 30%
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Работаем во Владимире и Владимирской области
            </p>

            <ul className="mt-6 space-y-3">
              {[
                'Официальный дилер — работаем по ценам производителя',
                'Наши клиенты не переплачивают',
                'Полный комплекс работ от замера до запуска системы',
                'Только проверенные временем септики',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={22} className="mt-0.5 shrink-0 text-secondary" />
                  <span className="text-base text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button size="lg" className="h-14 rounded-xl px-8 text-base font-bold shadow-lg shadow-primary/25 hover-lift">
                Рассчитать стоимость септика
                <Icon name="ArrowRight" size={20} className="ml-1" />
              </Button>
              <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                <Icon name="Gift" size={16} className="text-accent-foreground" />
                и получите 1 из 2-х подарков на выбор
              </p>
            </div>
          </div>

          <div className="relative animate-fade-up" style={{ animationDelay: '0.15s' }}>
            <div className="relative mx-auto max-w-md">
              <div className="absolute inset-0 -z-10 rounded-[2rem] bg-primary/10 blur-2xl" />
              <img src={SEPTIC_IMG} alt="Септик BIOseptik33" className="w-full rounded-[2rem] border border-border/60 bg-white object-cover shadow-2xl" />
              <div className="absolute -bottom-5 left-1/2 w-[90%] -translate-x-1/2 rounded-2xl bg-primary px-5 py-4 text-center shadow-xl">
                <div className="font-display text-lg font-bold uppercase leading-tight text-primary-foreground">
                  Самые низкие цены во Владимире и области!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-primary py-16 text-primary-foreground lg:py-24">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-3 inline-block text-sm font-bold uppercase tracking-widest text-accent">Этапы работы</div>
            <h2 className="font-display text-3xl font-bold uppercase leading-tight sm:text-4xl lg:text-5xl">
              Сегодня — заявка,<br className="hidden sm:block" /> завтра — установленный септик
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="animate-fade-up relative rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-7 backdrop-blur-sm"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                    <Icon name={step.icon} size={28} />
                  </div>
                  <span className="font-display text-5xl font-bold text-primary-foreground/20">0{i + 1}</span>
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold uppercase leading-tight tracking-wide">{step.title}</h3>
                <p className="text-[15px] leading-relaxed text-primary-foreground/75">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <div className="mb-3 inline-block text-sm font-bold uppercase tracking-widest text-secondary">Преимущества</div>
            <h2 className="font-display text-3xl font-bold uppercase leading-tight sm:text-4xl lg:text-5xl">
              Почему нужно работать именно с нами
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {advantages.map((adv, i) => (
              <div
                key={adv.title}
                className="hover-lift animate-fade-up rounded-2xl border border-border/70 bg-card p-7"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon name={adv.icon} size={28} />
                </div>
                <h3 className="mb-2 font-display text-xl font-semibold uppercase tracking-wide">{adv.title}</h3>
                <p className="text-[15px] leading-relaxed text-muted-foreground">{adv.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Button size="lg" className="h-14 rounded-xl px-8 text-base font-bold shadow-lg shadow-primary/25 hover-lift">
              Рассчитать стоимость септика
              <Icon name="ArrowRight" size={20} className="ml-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60 bg-primary py-10 text-primary-foreground">
        <div className="container flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-foreground/15">
              <Icon name="Droplets" size={24} />
            </div>
            <div>
              <div className="font-display text-xl font-bold tracking-wide">BIOseptik33</div>
              <div className="text-sm text-primary-foreground/70">Владимир и Владимирская область</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://wa.me/79209344586" target="_blank" rel="noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-foreground/15 transition hover:bg-primary-foreground/25">
              <Icon name="MessageCircle" size={20} />
            </a>
            <a href="https://t.me/" target="_blank" rel="noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-foreground/15 transition hover:bg-primary-foreground/25">
              <Icon name="Send" size={18} />
            </a>
            <a href={`tel:${PHONE_RAW}`} className="font-display text-lg font-semibold">{PHONE}</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;