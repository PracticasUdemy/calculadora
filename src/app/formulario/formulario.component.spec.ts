import { TestBed } from "@angular/core/testing";
import { FormularioComponent } from "./formulario.component";

describe("FormularioComponent", () => {

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FormularioComponent],
        }).compileComponents();
    });

    it("se debe crear el componento Formulario", () => {
        const fixture = TestBed.createComponent(FormularioComponent);

        expect(fixture.componentInstance).toBeTruthy();
    });

    it("valor inicial del operandoA es 0", () => {
        const formulario = new FormularioComponent();
        expect(formulario.operandoA).toBe(0);
    });

});