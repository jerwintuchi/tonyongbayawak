export type ModelArchitecture = {
    model: string,
    lags: number,
    batch_size: number,
    epochs: number,
    neurons_per_layer: number,
    activation_function: string,
    learning_rate: number,
    dropout_layer: number,
    neurons_per_dense_layer: number,
    code: string;
};

export const models: ModelArchitecture[] = [
    {
        model: "rnn_unlayered",
        lags: 60,
        batch_size: 0,
        epochs: 40,
        neurons_per_layer: 100,
        activation_function: "Tanh",
        learning_rate: 0.001,
        dropout_layer: 0.2,
        neurons_per_dense_layer: 0,
        code: `f.manual_forecast(
    lags=60,
    layers_struct=[('SimpleRNN',{'units':100,'dropout':0.2})],
    epochs=40,
    validation_split=0.2,
    plot_loss=True,
    call_me="rnn_unlayered",
    verbose=1,
)`
    },
    {
        model: "rnn_layered_dense",
        lags: 120,
        batch_size: 0,
        epochs: 40,
        neurons_per_layer: 100,
        activation_function: "Tanh",
        learning_rate: 0.001,
        dropout_layer: 0,
        neurons_per_dense_layer: 10,
        code: `f.manual_forecast(
    lags=120,
    layers_struct=[('SimpleRNN',{'units':100,'dropout':0})]*2 + [('Dense',{'units':10})]*2,
    epochs=40,
    validation_split=0.2,
    call_me='rnn_layered_dense',
    verbose=1
)`
    },
    {
        model: "lstm_vanilla",
        lags: 1,
        batch_size: 0,
        epochs: 15,
        neurons_per_layer: 25,
        activation_function: "Tanh",
        learning_rate: 0.001,
        dropout_layer: 0,
        neurons_per_dense_layer: 0,
        code: `f.manual_forecast(
    lags=1,
    layers_struct=[('LSTM',{'units':25})],
    epochs=15,
    validation_split=0.2,
    call_me="lstm_vanilla",
    verbose=1
)`
    },
    {
        model: "lstm_base",
        lags: 72,
        batch_size: 0,
        epochs: 15,
        neurons_per_layer: 100,
        activation_function: "Tanh",
        learning_rate: 0.001,
        dropout_layer: 0.2,
        neurons_per_dense_layer: 0,
        code: `f.manual_forecast(
    lags=72,
    layers_struct=[('LSTM',{'units':100,'dropout':0.2})],
    epochs=15,
    validation_split=0.2,
    call_me="lstm_base",
    verbose=1
)`
    },
    {
        model: "lstm_layered",
        lags: 120,
        batch_size: 16,
        epochs: 50,
        neurons_per_layer: 100,
        activation_function: "Linear",
        learning_rate: 0.0001,
        dropout_layer: 0,
        neurons_per_dense_layer: 0,
        code: `f.manual_forecast(
    lags=120,
    layers_struct=[('LSTM',{'units':100})]*2,
    epochs=50,
    validation_split=0.2,
    call_me="lstm_layered",
    verbose=1
)`
    },
    {
        model: "lstm_layered_dense",
        lags: 120,
        batch_size: 16,
        epochs: 15,
        neurons_per_layer: 50,
        activation_function: "Linear",
        learning_rate: 0.0001,
        dropout_layer: 0.2,
        neurons_per_dense_layer: 5,
        code: `f.manual_forecast(
    lags=120,
    layers_struct=[('LSTM',{'units':50,'dropout':0.2})]*2 + [('Dense',{'units':5})]*2,
    epochs=15,
    validation_split=0.2,
    call_me="lstm_layered_dense",
    verbose=1
)`
    },
    {
        model: "lstm_layered_dense_earlystop",
        lags: 120,
        batch_size: 16,
        epochs: 15,
        neurons_per_layer: 50,
        activation_function: "Linear",
        learning_rate: 0.0001,
        dropout_layer: 0.2,
        neurons_per_dense_layer: 5,
        code: `f.manual_forecast(
    lags=120,
    layers_struct=[('LSTM',{'units':50,'dropout':0.2})]*2 + [('Dense',{'units':5})]*2,
    epochs=15,
    validation_split=0.2,
    early_stopping=True,
    call_me="lstm_layered_dense_earlystop",
    verbose=1
)`
    }
];