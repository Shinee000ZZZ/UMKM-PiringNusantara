/* init Isotope */
var $grid = $('.collection-list').isotope({
    // opsi
});

// menyaring item saat tombol diklik
$('.filter-button-group').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    resetFilterBtns();
    $(this).addClass('active-filter-btn');
    $grid.isotope({ filter: filterValue });
});

var filterBtns = $('.filter-button-group').find('button');
function resetFilterBtns(){
    filterBtns.each(function(){
        $(this).removeClass("active-filter-btn");
    });
}


    // Menangkap semua tautan di dalam navbar
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    // Menambahkan event listener pada setiap tautan
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            // Menghapus kelas 'active' dari semua tautan
            navLinks.forEach(innerLink => innerLink.classList.remove('active'));

            // Menambahkan kelas 'active' pada tautan yang diklik
            this.classList.add('active');
        });
    });

    
