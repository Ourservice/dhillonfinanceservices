 function showService(serviceId) {
        const items = document.querySelectorAll('.service-item');
        items.forEach(item => item.style.display = 'none');

        const selected = document.getElementById(serviceId);
        if(selected) selected.style.display = 'block';
      }
      function showalert() {
        alert("🚨 Please read it: Loan services available in Ludhiana only.");
      }