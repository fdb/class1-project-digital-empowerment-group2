<% include partials/_header %>

<div class="container">

  <div class="row">
    <!--FORM-->
    <div class="col-md-5">
      <div class="card">
        <div class="card-body">
          <form action="/add" method="post">
            <div class="form-group">
              <input class="form-control" type="text" name="title" placeholder="Title">
            </div>
            <div class="form-group">
              <textarea class="form-control" name="description" cols="80"
                placeholder="Add a Description"
                ></textarea>
            </div>
            <button class="btn btn-primary" type="submit">
              Add
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- LIST -->
    <div class="col-md-7">
      <table class="table table-bordered table-hover">
        <thead>
          <tr>
            <th>N°</th>
            <th>Title</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          <% for(var i=0; i < tasks.length; i++) { %>
            <tr>
              <td><%= i + 1%></td>
              <td><strong><%= tasks[i].title %></strong></td>
              <td>
                <a
                  class="<%= tasks[i].status ? 'btn btn-success' : 'btn btn-dark'%>"
                  href="/turn/<%= tasks[i]._id %>">Done</a>
                <a href="/delete/<%= tasks[i]._id %>"
                  class="btn btn-danger">
                  Delete
                </a>
                <a href="/edit/<%= tasks[i]._id %>" class="btn btn-info">
                  Edit
                </a>
              </td>
            </tr>
          <% } %>
        </tbody>
      </table>

    </div>
  </div>

</div>