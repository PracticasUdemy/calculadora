import { TestBed } from "@angular/core/testing";
import { ResultadoComponent } from "./resultado.component";

describe("ResultadoComponent", () => {

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ResultadoComponent],
        }).compileComponents();
    });

    it("se debe crear el componento Resultado", () => {
        const fixture = TestBed.createComponent(ResultadoComponent);

        expect(fixture.componentInstance).toBeTruthy();
    });

    it("se debe crear el texto Resultado: 0", () => {
        const fixture = TestBed.createComponent(ResultadoComponent);
        fixture.detectChanges();
        const compiled: HTMLElement = fixture.nativeElement;
        expect(compiled.querySelector("p")?.textContent).toEqual("Resultado: 0");
    });
});