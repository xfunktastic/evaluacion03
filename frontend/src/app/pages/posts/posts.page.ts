import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {

  posts: any[] | undefined; // Inicializar como undefined

  constructor(private apiService: ApiService) {}

  async ngOnInit() {
    try {
      this.posts = await this.apiService.getPosts().toPromise() ?? []; // Usar operador ?? para asignar un array vacío en caso de ser undefined o null
      console.log(this.posts);
    } catch (error) {
      console.error('Error al obtener los posts:', error);
    }
  }
}
