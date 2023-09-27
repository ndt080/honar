routerAdd('GET', '/api/collections/pages/:path', (c) => {
  try {
    const path = c.pathParam('path');

    const result = new DynamicModel({
      id: '',
      title: '',
      description: '',
      preview: '',
      content: '',
      payload: '',
      navigation: '',
    });

    $app
      .dao()
      ?.db()
      .newQuery(
        `SELECT pages.id, pages.title, pages.description, pages.preview, pages.content, pages.payload
        FROM pages 
        JOIN navigation ON navigation.id=pages.navigation 
        WHERE navigation.path={:path} 
        LIMIT 1`,
      )
      ?.bind({ path })
      ?.one(result);

    return c.json(200, result);
  } catch (e) {
    console.log(e);
    return c.json(404, { message: 'Not Found' });
  }
});