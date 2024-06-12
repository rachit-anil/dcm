import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-jwt-example",
  templateUrl: "./jwt-example.component.html",
  styleUrl: "./jwt-example.component.scss",
})
export class JwtExampleComponent implements OnInit {
  constructor(public http: HttpClient) {}

  ngOnInit(): void {
    this.ping();
  }

  ping() {
    this.http.get("http://localhost:8080/getJokes").subscribe(
      (data) => console.log(data),
      (err) => console.log(err)
    );
  }
}
