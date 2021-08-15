import { Directive, HostListener, ElementRef, Output, EventEmitter, OnInit } from '@angular/core';

@Directive({
  selector: '[appDrawable]'
})
export class DrawableDirective implements OnInit {

  _cursorPosition = { x: 0, y: 0 };
  _canvasContext: CanvasRenderingContext2D;
  _canvasElement: HTMLCanvasElement;

  @Output() imageChanged = new EventEmitter<ImageData>();

  constructor(
    private _element: ElementRef
  ) {}

  ngOnInit() {
    this._canvasElement = this._element.nativeElement as HTMLCanvasElement;
    this._canvasContext = this._canvasElement.getContext('2d');
  }

  @HostListener('mouseup', ['$event'])
  onUp(_) {
    this.imageChanged.emit(this.getImgData());
  }

  @HostListener('mouseenter', ['$event'])
  onEnter(event) {
    this.setPosition(event);
  }

  @HostListener('mousedown', ['$event'])
  onMove(event) {
    this.setPosition(event);
  }

  @HostListener('mousemove', ['$event'])
  onDown(event) {

    if (event.buttons !== 1) {
      return;
    }

    this._canvasContext.beginPath(); // begin

    this._canvasContext.lineWidth = 10;
    this._canvasContext.lineCap = 'round';
    this._canvasContext.strokeStyle = '#111111';

    this._canvasContext.moveTo(this._cursorPosition.x, this._cursorPosition.y);
    this.setPosition(event);
    this._canvasContext.lineTo(this._cursorPosition.x, this._cursorPosition.y);

    this._canvasContext.stroke();
  }

  @HostListener('resize', ['$event'])
  onResize(_) {
    this._canvasContext.canvas.width = window.innerWidth;
    this._canvasContext.canvas.height = window.innerHeight;
  }

  setPosition(event) {
    this._cursorPosition.x = event.offsetX;
    this._cursorPosition.y = event.offsetY;
  }

  clear() {
    this._canvasContext.clearRect(0, 0, this._canvasContext.canvas.width, this._canvasContext.canvas.height);
  }

  getImgData(): ImageData {
    this._canvasContext.drawImage(this._canvasElement, 0, 0, 28, 28);
    return this._canvasContext.getImageData(0, 0, 28, 28);
  }

  setImageData(data: number[]) {
    const uintData = new Uint8ClampedArray(data);
    const imageData: ImageData = {
      data: uintData,
      height: this._canvasContext.canvas.height,
      width: this._canvasContext.canvas.width
    };

    this._canvasContext.putImageData(imageData, 0, 0);
  }
}
