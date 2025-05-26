from flask import Flask, render_template_string, request, abort
import sqlite3

app = Flask(__name__)

def get_projeto(id):
    conn = sqlite3.connect('carwiki.db')
    cursor = conn.cursor()
    cursor.execute(
        "SELECT nome, descricao, preco, estoque, imagem FROM products WHERE id = ?",
        (id,)
    )
    row = cursor.fetchone()
    conn.close()
    return row

@app.route('/projeto')
def projeto():
    id = request.args.get('id', type=int)
    if not id:
        return "ID do projeto não informado.", 400

    projeto = get_projeto(id)
    if not projeto:
        abort(404, description="Projeto não encontrado.")

    nome, descricao, preco, estoque, imagem = projeto
    img_path = f"static/img/cars/{imagem}"  # Caminho correto para imagem

    html = f'''
    <div class="alta-caixa">
      <a href="#" target="_blank" class="alta-card">
        <img src="{img_path}" alt="{nome}" class="alta-cars-imagem" />
        <h3 class="info-car">{nome}</h3>
        <div class="caixa-textos-alta">
          <p class="paragrafo-alta">{descricao}</p>
          <p class="preco">Preço: R$ {preco:.2f}</p>
          <p class="preco">Estoque: {estoque} unidades</p>
        </div>
      </a>
    </div>
    '''
    return render_template_string(html)

if __name__ == "__main__":
    app.run(debug=True)
