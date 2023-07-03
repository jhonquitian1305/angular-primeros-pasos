import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10
    }
  ]

  // @Output()
  // public onDelete = new EventEmitter<number>();

  // onDeleteCharacter(index: number):void {
  //   console.log(index);

  //   this.onDelete.emit(index);
  // }

  @Output()
  public onDeleteById = new EventEmitter<string>();

  onDeleteCharacterById(id?: string):void {
    // console.log({id});

    if(!id) return;

    this.onDeleteById.emit(id);
  }

}
