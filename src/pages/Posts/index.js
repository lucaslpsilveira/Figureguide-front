import React, { Component } from "react";
import { Button, Card, CardHeader, CardBody, Table } from 'reactstrap';
import api from "../../services/api";

class Posts extends Component {

  state = {
    posts: null,
    error: null,
    loading: false    
  }

  async getPosts(){        
    try {
      this.setState({ loading: true });
      const { data } = await api.get("/posts");
      this.setState({ posts: data });
    } catch (err) {
      console.log(err);
      this.setState({
        error:
          "Houve um problema"
      });
    } finally {
      this.setState({ loading: false });
    }   
  }

  componentDidMount(){
    this.getPosts();
  }

  render() {
    return (
      <>                          
        <Card className="shadow mb-4">
          <CardHeader className="py-3">
            <h6 className="m-0 font-weight-bold text-primary">Blog Posts</h6>
          </CardHeader>
          <CardBody>
            <div className="table-responsive">
              <Table bordered hover id="dataTable" width="100%" cellspacing="0">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Images</th>
                    <th>Created At</th>
                    <th>Updated At</th>                    
                    <th>Author</th>  
                    <th></th>
                  </tr>
                </thead>                
                <tbody>
                  { this.state.posts !== null 
                    ? Object.keys(this.state.posts).map((key) =>{
                      console.log(this.state.posts[key]);
                      const post = this.state.posts[key];
                      return (
                        <tr>
                          <td>{post.id}</td>
                          <td>{post.title}</td>
                          <td>{Object.keys(post.images).length}</td>
                          <td>{post.created_at}</td>
                          <td>{post.updated_at}</td>
                          <td>{post.user_id}</td>
                          <td>
                            <Button size='sm' className='mr-1'><i className='fa fa-edit'/></Button>
                            <Button size='sm' color='danger'><i className='fa fa-trash'/></Button>
                          </td>
                      </tr>);
                    })
                    : null }                   
                </tbody>
              </Table>
            </div>
          </CardBody>
        </Card>          
      </>
    );
  }
}

export default Posts;
 