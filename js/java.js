
      var data = {
        labels: ['قتلى الاحتلال الاسرائيلي ', '   القتلى الفلسطينين', 'الأسرى المحتجزين  لدى حماس'],
        datasets: [{
          data: [5000, 3000, 2000],
          // backgroundColor: ['#ff6384', '#36a2eb', '#ffce56']
        }]
      };

      var options = {
        responsive: true
      };
  
  
      var ctx = document.getElementById('myChart').getContext('2d');
      var pieChart = new Chart(ctx, {
        type: 'pie',
        data: data,
        options: options
      });
  
      var showPopupButton = document.getElementById('showPopupButton');
      var popup = document.getElementById('popup');
      var closePopupButton = document.getElementById('closePopupButton');
  
      showPopupButton.addEventListener('click', function() {
        popup.style.display = 'block';
        Toastify({
          text: "This is a toast",
          duration: 3000
        }).showToast();
      });
  
      closePopupButton.addEventListener('click', function() {
        popup.style.display = 'none';
      });
  
      var openGitHubButton = document.getElementById('openGitHubButton');
      openGitHubButton.addEventListener('click', function() {
        window.open("https://google.com");
      });
  
      var openTwitterButton = document.getElementById('openTwitterButton');
      openTwitterButton.addEventListener('click', function() {
        window.open("https://YOUTUBE.com");
      });
    