const titleArea__mid = document.querySelector('div.titleArea__mid')
const downArow = document.querySelectorAll('div.titleArea__mid__right i')[1]
const upArow = document.querySelectorAll('div.titleArea__mid__right i')[0]

titleArea__mid.addEventListener('click', () => {
  if ( upArow.style.display == 'block' ) {
    document.querySelector('.videoInfo').style.display = 'none'
    upArow.style.display = 'none'
    downArow.style.display = 'block'
  } else {
    document.querySelector('.videoInfo').style.display = 'block'
    downArow.style.display = 'none'
    upArow.style.display = 'block'
  }
})