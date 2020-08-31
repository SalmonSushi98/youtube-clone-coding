const arrow = document.querySelector('div.titleArea__mid__right')
const downArow = document.querySelectorAll('div.titleArea__mid__right i')[1]
const upArow = document.querySelectorAll('div.titleArea__mid__right i')[0]
const videoInfo = document.querySelector('.videoInfo__invisible')

arrow.addEventListener('click', () => {
  if ( upArow.style.display == 'block' ) {
    videoInfo.className = 'videoInfo__invisible'
    upArow.style.display = 'none'
    downArow.style.display = 'block'
  } else {
    videoInfo.className = 'videoInfo__visible'
    downArow.style.display = 'none'
    upArow.style.display = 'block'
  }
})