$(document).ready(function() {
  const apiUrl = 'https://your-api-url.com/articles';

  function loadArticles() {
    $.ajax({
      url: apiUrl,
      method: 'GET',
      success: function(data) {
        const articlesContainer = $('#articles');
        articlesContainer.empty();

        if (data && data.length > 0) {
          data.forEach(article => {
            articlesContainer.append(`
              <article>
                <h2>${article.title}</h2>
                <p>${article.content}</p>
                <p>${article.date}</p>
              </article>
            `);
          });
        } else {
          articlesContainer.html('<p>No articles available.</p>');
        }
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.error('Error loading articles:', jqXHR.status, textStatus, errorThrown);
        $('#articles').html('<p>Failed to load articles.</p>');
      }
    });
  }

  function loadOverview() {
    $.ajax({
      url: apiUrl,
      method: 'GET',
      success: function(data) {
        const overviewContainer = $('#overview-articles');
        overviewContainer.empty();

        if (data && data.length > 0) {
          data.forEach(article => {
            overviewContainer.append(`
              <article>
                <h2>${article.title}</h2>
                <p>${article.content}</p>
                <p>${article.date}</p>
              </article>
            `);
          });
        } else {
          overviewContainer.html('<p>No articles available.</p>');
        }
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.error('Error loading overview articles:', jqXHR.status, textStatus, errorThrown);
        $('#overview-articles').html('<p>Failed to load articles.</p>');
      }
    });
  }

  function loadArticleDetail() {
    const articleId = new URLSearchParams(window.location.search).get('id');
    if (!articleId) {
      $('#article-detail').html('<p>Article not found.</p>');
      return;
    }

    $.ajax({
      url: `${apiUrl}/${articleId}`,
      method: 'GET',
      success: function(data) {
        if (data) {
          $('#article-detail').html(`
            <article>
              <h2>${data.title}</h2>
              <p>${data.content}</p>
              <p>${data.date}</p>
            </article>
          `);
        } else {
          $('#article-detail').html('<p>Article not found.</p>');
        }
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.error('Error loading article detail:', jqXHR.status, textStatus, errorThrown);
        $('#article-detail').html('<p>Failed to load article.</p>');
      }
    });
  }

  function addArticle(title, content, date) {
    $.ajax({
      url: apiUrl,
      method: 'POST',
      data: JSON.stringify({ title, content, date }),
      contentType: 'application/json',
      success: function() {
        alert('Article added successfully!');
        window.location.href = 'index.html';
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.error('Error adding article:', jqXHR.status, textStatus, errorThrown);
        alert('Failed to add article.');
      }
    });
  }

