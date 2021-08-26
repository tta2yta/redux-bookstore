const bookForm = () => (
  <div className="add-book">

    <form>
      <input type="text" placeholder="Book Title" />
      <select name="categories" id="categories">
        <option value="fiction">Fiction</option>
        <option value="scifiction">Science Fiction</option>

        <option value="romance">Romance</option>

        <option value="tech">Technology</option>

      </select>
    </form>
  </div>
);
export default bookForm;
