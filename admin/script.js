const names = [
  { id: "0", names: "Общее" },
  { id: "1", names: "Виталина и Владислав" },
  { id: "2", names: "Виктория и Никита" },
  { id: "3", names: "Марина, Александр и Альбина" },
  { id: "4", names: "Александр и Наталья" },
  { id: "5", names: "Бабушка Лида и Иван" },
  { id: "6", names: "Галина и Ангелина" },
  { id: "7", names: "Валерия и Максим" },
  { id: "8", names: "Ольга, Артем и Мирослава" },
  { id: "9", names: "Михаил и Юлия" },
  { id: "10", names: "Владислав и Мария" },
  { id: "11", names: "Владислав и Валерия" },
  { id: "12", names: "Станислав и Любовь" },
  { id: "13", names: "Юрий и Надежда" },
  { id: "14", names: "Наталья" },
  { id: "15", names: "Станислав" },
  { id: "16", names: "Степан" },
  { id: "17", names: "Кирилл" }
];

const baseURL = location.href.replace('admin/', ''); //location.origin
const container = document.getElementById('container');

names.forEach((name, index) => {
  const nameElem = document.createElement('div');
  nameElem.classList.add('name');
  const titleNameElem = document.createElement('p');
  titleNameElem.classList.add('name__title');
  titleNameElem.innerHTML = name.names;
  const linkNameElem = document.createElement('a');
  linkNameElem.classList.add('name__link');

  const link = `${baseURL}?id=${name.id}`;
  linkNameElem.href = link;
  linkNameElem.innerHTML = link;
  linkNameElem.target = '_blank';

  const btnCopyLink = document.createElement('button');
  btnCopyLink.innerHTML = 'copy';
  btnCopyLink.classList.add('name__btn-copy');
  btnCopyLink.dataset.link = link;

  const btnShareViber = document.createElement('a');
  btnShareViber.classList.add('name__btn-share-viber');
  btnShareViber.href = 'viber://forward?text=' + link;
  btnShareViber.target = '_blank';

  const btnShareTelegram = document.createElement('a');
  btnShareTelegram.classList.add('name__btn-share-telegram');
  btnShareTelegram.href = `https://telegram.me/share/url?url=${link}&amp;text=${link}`;
  btnShareTelegram.target = '_blank';

  const linkWrapper = document.createElement('div');
  linkWrapper.classList.add('name__link-wrapper');

  linkWrapper.append(
    linkNameElem,
    btnCopyLink,
    btnShareViber,
    btnShareTelegram
  );

  nameElem.append(titleNameElem, linkWrapper);

  container.append(nameElem);
});

container.addEventListener('click', (e) => {
  const btnCopy = e.target;

  if (btnCopy.classList.contains('name__btn-copy')) {
    const linkUrl = btnCopy.dataset.link;
    console.log(linkUrl);
    navigator.clipboard
      .writeText(linkUrl)
      .then(() => {
        console.log('Text copied to clipboard ' + linkUrl);
        btnCopy.innerHTML = 'copied';

        setTimeout(() => {
          btnCopy.innerHTML = 'copy';
        }, 5000);
      })
      .catch((err) => {
        console.error('Error in copying text: ', err);
      });
  }
});
