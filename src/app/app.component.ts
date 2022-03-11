import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: 'Snails',
      url: 'https://images.unsplash.com/photo-1626104243085-c6f581158ad0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'Forest',
      url: 'https://images.unsplash.com/photo-1581785171272-5061e55fcb33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mzh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'Beach',
      url: 'https://images.unsplash.com/photo-1581785171320-1105a9c0640f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'Window',
      url: 'https://images.unsplash.com/photo-1626103871599-267ba327ee84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'Water',
      url: 'https://images.unsplash.com/photo-1626105125599-1c8bfa36b338?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'Lighthouse',
      url: 'https://images.unsplash.com/photo-1626104837115-b1c6d8d42a2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'Snails',
      url: 'https://images.unsplash.com/photo-1626104243085-c6f581158ad0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'Forest',
      url: 'https://images.unsplash.com/photo-1581785171272-5061e55fcb33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mzh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'Beach',
      url: 'https://images.unsplash.com/photo-1581785171320-1105a9c0640f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'Window',
      url: 'https://images.unsplash.com/photo-1626103871599-267ba327ee84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'Water',
      url: 'https://images.unsplash.com/photo-1626105125599-1c8bfa36b338?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'Lighthouse',
      url: 'https://images.unsplash.com/photo-1626104837115-b1c6d8d42a2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'Snails',
      url: 'https://images.unsplash.com/photo-1626104243085-c6f581158ad0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'Forest',
      url: 'https://images.unsplash.com/photo-1581785171272-5061e55fcb33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mzh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'Beach',
      url: 'https://images.unsplash.com/photo-1581785171320-1105a9c0640f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'Window',
      url: 'https://images.unsplash.com/photo-1626103871599-267ba327ee84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'Water',
      url: 'https://images.unsplash.com/photo-1626105125599-1c8bfa36b338?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'Lighthouse',
      url: 'https://images.unsplash.com/photo-1626104837115-b1c6d8d42a2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
    },
  ];

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}
