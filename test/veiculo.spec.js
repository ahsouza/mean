const
 should = require("should"),
 request = require("request"),
 chai = require("chai"),
 expect = chai.expect,
 urlBase = "https://mean-ahsouza.herokuapp.com/api/veiculos";


describe("API REST Veículos App",()=>{
  it("Retorno de todos veículos registrados",(done)=>{
    request.get({url: urlBase}, (error, res, body) => {
        var _body = {}
        try{
          _body = JSON.parse(body)
        }
        catch(e){
          _body = {};
        }
        expect(res.statusCode).to.equal(200)

        console.log(_body)
        expect(_body)
        done()
      }
    )
  })
  it("Retorno de veículo com ano 2021",(done)=>{
    request.get({url: urlBase+"?ano=2021"}, (error, res, body) => {
        var _body = {}
        try{
          _body = JSON.parse(body)
        }
        catch(e){
          _body = {};
        }
        expect(res.statusCode).to.equal(200)
        console.log(_body)
        expect(_body)
        done()
      }
    )
  })
})