document.addEventListener('DOMContentLoaded', () => {

  const dashboardItems = document.querySelectorAll('.kuDashboard__item');

  setTimeout( () => {

    dashboardItems.forEach( (item) => {

      if ( item.classList.contains('loading') ){
        item.classList.remove('loading');
      }

    });

  }, 4000 );

});

